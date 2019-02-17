import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import {
  Buttonimport,
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body
} from "native-base";
import Icon from "react-native-vector-icons/EvilIcons";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  camera = () => {
    this.props.navigation.navigate("Camera");
  };

  giveImage = () => (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("./tree.png")}
    >
      <View bottom style={styles.innerContainer}>
        <Image
          source={require("./logo.png")}
          style={{ height: 200, width: 200 }}
        />

        <Button onPress={this.camera} style={styles.button}>
          <Icon name="camera" style={styles.icon} />
        </Button>
        <Button onPress={this.next} style={styles.button}>
          <Icon name="search" style={styles.icon} />
        </Button>
      </View>
    </ImageBackground>
  );

  render() {
    return <View style={styles.container}>{this.giveImage()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-end"
  },

  backgroundImage: {
    height: "110%",
    width: "100%",

    backgroundColor: "rgba(0, 146, 83,0.65)"
  },
  innerContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(0, 146, 83,0.65)"
  },

  button: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: 90,
    width: 90,
    borderRadius: 45
  },
  icon: {
    color: "rgb(0, 146, 83)",
    fontSize: 70
  },

  elements: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end"
  }
});
