import React, { Component } from "react";
import { Text, StyleSheet, Image, ImageBackground } from "react-native";
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

const cards = [
  {
    text: "Card One",
    name: "One",
    image: require("./logo.png")
  },
  {
    text: "Card 2",
    name: "One",
    image: require("./logo.png")
  }
];

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
      <ImageBackground
        source={require("./background.png")}
        style={styles.container}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Text style={styles.title}>SUSTAINIFY</Text>
        </View>
        <View>
          <Text>Tips</Text>
        </View>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: "#ED4A6A" }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
        <View style={styles.innerContainer}>
          <View>
            <Button onPress={this.camera} style={styles.button}>
              <Icon name="camera" style={styles.icon} />
            </Button>
            <Text style={{ textAlign: "center", padding: 15, color: "white" }}>
              Camera
            </Text>
          </View>
          <View>
            <Button onPress={this.next} style={styles.button}>
              <Icon name="search" style={styles.icon} />
            </Button>
            <Text style={{ textAlign: "center", padding: 15, color: "white" }}>
              Search
            </Text>
          </View>
        </View>
      </ImageBackground>
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
    top: 50
  },
  title: {
    fontFamily: "AvenirNextCondensed-Medium",
    color: "white",
    fontSize: 70,
    fontWeight: "600",
    bottom: 30
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: 90,
    width: 90,
    borderRadius: 45
  },
  icon: {
    color: "#317151",
    fontSize: 70
  },

  elements: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-end"
  }
});
