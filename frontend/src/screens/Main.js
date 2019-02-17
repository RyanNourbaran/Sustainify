import React, { Component } from "react";
import { Text, StyleSheet, Image } from "react-native";
import {
  Buttonimport,
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Button
} from "native-base";
import LinearGradient from "react-native-linear-gradient";
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
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#1D976C", "#93F9B9"]} style={styles.container}>
        <View>
          <Image
            source={require("./logo.png")}
            style={{ height: 200, width: 200 }}
          />
        </View>
        <View>
          <Text>Tips</Text>
        </View>
        <View style={styles.innerContainer}>
          <Button onPress={this.camera} style={styles.button}>
            <Icon name="camera" style={styles.icon} />
          </Button>
          <Button onPress={this.next} style={styles.button}>
            <Icon name="search" style={styles.icon} />
          </Button>
        </View>
      </LinearGradient>
    </View>
  );

  render() {
    return <View style={styles.container}>{this.giveImage()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },

  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    top: 20
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
