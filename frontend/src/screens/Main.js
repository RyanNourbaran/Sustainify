import React, { Component } from "react";
import { Text, StyleSheet, Image, ImageBackground } from "react-native";
import PropTypes from "prop-types";
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
  Button,
  Item,
  Input
} from "native-base";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/EvilIcons";

const cards = [
  {
    text: "Tip 1",
    name: "One",
    image: require("./tip.png"),
    body:
      "Recycled tires can be made into fuel, rubberized asphalt, construction materials and more."
  },
  {
    text: "Tip 2",
    name: "Two",
    image: require("./tip.png"),
    body:
      "Recyclable material must not have any food or drink residue on them, as it could contaminate other recyclable material."
  },
  {
    text: "Tip 3",
    name: "Three",
    image: require("./tip.png"),
    body:
      "Each ton of recycled paper can save 17 trees, 380 gallons of oil, three cubic yards of landfill space, 4,000 kilowatts of energy and 7,000 gallons of water! "
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
  search = () => {
    this.props.navigation.navigate("Search");
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
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <Card
                style={{
                  elevation: 3,
                  height: 200,
                  bottom: 100,
                  width: "95%",
                  alignSelf: "center"
                }}
              >
                <CardItem
                  header
                  bordered
                  style={{ backgroundColor: "#eff0d1" }}
                >
                  <Left>
                    <Thumbnail
                      source={item.image}
                      style={{ height: 65, paddingRight: 10 }}
                    />
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 30,
                        fontWeight: "600"
                      }}
                    >
                      {item.text}
                    </Text>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{ fontSize: 18 }}>{item.body}</Text>
                  </Body>
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
            <Button onPress={this.search} style={styles.button}>
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
    top: 80
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
