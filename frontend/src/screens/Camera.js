import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { RNCamera } from "react-native-camera";
import { Header, Button, Icon, Left, Right, Content } from "native-base";
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

  componentDidMount = () => {
    setTimeout(() => {
      this.takePicture();
    }, 1000);
  };

  flash = () => {
    this.setState({ inactive: !this.state.inactive });
  };

  renderCamera() {
    const isFocused = true; //this.props.navigation.isFocused();
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
                        name="ios-close"
                        style={{
                          color: "white",
                          fontSize: 60,
                          fontWeight: 900
                        }}
                      />
                    </Button>
                  </Left>
                  <Right>
                    <Button style={styles.button} onPress={() => this.flash()}>
                      <Icon
                        name={
                          this.state.inactive ? "ios-flash" : "ios-flash-off"
                        }
                        style={{
                          color: "white",
                          fontSize: 40,
                          fontWeight: "normal"
                        }}
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
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      //console.log(data.base64);

      this.passBlob(data);
    }
  };

  passBlob(blob) {
    const formData = new FormData();
    formData.append("image", {
      uri: blob.uri,
      type: "image/jpg",
      name: "test.jpg"
    });
    axios({
      method: "post",
      url: "http://sustainify.azurewebsites.net/classify",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "multipart/form-data"
      },
      data: formData
    })
      .then(response => {
        console.log(response);
        console.log("a2@@@@@");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    this.takePicture();
    return this.renderCamera();
  }
}
