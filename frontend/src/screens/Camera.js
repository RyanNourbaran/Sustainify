import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { RNCamera } from "react-native-camera";
import { Header, Button, Left, Right, Content } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  button: {
    height: 100,
    backgroundColor: "transparent"
  }
});

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inactive: true
    };
  }

  flash = () => {
    this.setState({ inactive: !this.state.inactive });
  };

  renderCamera() {
    console.log("its renderCamera");
    const isFocused = this.props.navigation.isFocused();
    if (isFocused) {
      return (
        <View style={styles.container}>
          <StatusBar hidden />
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={
              this.state.inactive
                ? RNCamera.Constants.FlashMode.off
                : RNCamera.Constants.FlashMode.torch
            }
            permissionDialogTitle={"Permission to use camera"}
            permissionDialogMessage={
              "We need your permission to use your camera phone"
            }
            captureAudio={false}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row"
              }}
            >
              <TouchableOpacity style={{ width: "90%" }}>
                <Header transparent>
                  <Left>
                    <Button
                      style={styles.button}
                      onPress={() => this.props.navigation.navigate("Tab")}
                    >
                      <Icon
                        name="close"
                        style={{
                          color: "white",
                          fontSize: 40,
                          fontWeight: 900
                        }}
                      />
                    </Button>
                  </Left>
                  <Right>
                    <Button style={styles.button} onPress={() => this.flash()}>
                      <Icon
                        name={this.state.inactive ? "flash-on" : "flash-off"}
                        style={{
                          color: "white",
                          fontSize: 32,
                          fontWeight: "normal"
                        }}
                        type="Ionicons"
                      />
                    </Button>
                  </Right>
                </Header>
              </TouchableOpacity>
            </View>
          </RNCamera>
        </View>
      );
    } else {
      return null;
    }
  }

  takePicture = async function() {
    console.log("smell");
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      //console.log(data.base64);
      this.passBlob(data);
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.takePicture();
    }, 1000);
  };

  passBlob(blob) {
    console.log("blobby");
    console.log(blob);
    const materials = [];
    const formData = new FormData();
    formData.append("image", {
      uri: blob.uri,
      type: "image/jpg",
      name: "test.jpg"
    });
    axios({
      method: "post",
      url: "http://sustainify1.appspot.com/classify",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "multipart/form-data"
      },
      data: formData
    })
      .then(response => {
        const responseArray = response.data.predictions;
        console.log(responseArray);
        for (let i = 0; i < responseArray.length; i++) {
          let item = responseArray[i];
          console.log(item);
          if (item.probability > 0.4) {
            materials.push(item.tagName);
          }
        }
        console.log(materials);
        this.props.navigation.navigate("Results", { materials });
      })
      .catch(error => {
        console.log(error);
      });
    console.log("end");
  }

  render() {
    this.takePicture();
    return this.renderCamera();
  }
}
