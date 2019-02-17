import React, { Component } from "react";
import { View, StyleSheet, Linking } from "react-native";
import { apiKey } from "../assets/apiKey";

import {
  Container,
  Header,
  Title,
  Card,
  CardItem,
  Text,
  Body,
  Icon,
  Button,
  Left,
  Right,
  List,
  ListItem,
  Footer,
  FooterTab
} from "native-base";
//import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import geolib from "geolib";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      material: []
    };
  }
  componentDidMount = () => {
    axios({
      method: "get",
      url:
        "https://api.mlab.com/api/1/databases/sustainify/collections/materials?apiKey=" +
        apiKey,
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        const materialArray = this.props.navigation.state.params.materials;

        let newMaterials = [];
        let descriptions = response.data;
        for (let i = 0; i < materialArray.length; i++) {
          descriptions.forEach(obj => {
            if (obj.name.toLowerCase() === materialArray[i].toLowerCase()) {
              newMaterials.push({
                name: obj.name,
                instructions: obj.instructions,
                type: obj.type
              });
            }
          });
        }
        this.setState({ material: newMaterials });
      })
      .catch(error => {
        console.log(error);
      });
  };
  getClosestBin() {
    console.log("here1");

    axios({
      method: "get",
      url: "https://data.cityofnewyork.us/resource/sxx4-xhzg.json",

      headers: {
        "Content-Type": "application/json",
        "X-App-Token": "CnqGyJ5m8eLaxapX8QKfU8Je3"
      }
    })
      .then(res => {
        navigator.geolocation.setRNConfiguration({
          skipPermissionRequests: false
        });
        console.log("here2");
        navigator.geolocation.getCurrentPosition(
          data => {
            console.log("here3");

            let min = Number.MAX_SAFE_INTEGER;
            let minLoc = {};
            for (let i = 0; i < res.data.length; i++) {
              const loc = res.data[i];

              let x = geolib.getDistance(
                {
                  latitude: data.coords.latitude,
                  longitude: data.coords.longitude
                },
                {
                  latitude: loc.latitude || 0,
                  longitude: loc.longitude || 0
                },
                5
              );

              if (x < min) {
                min = x;
                minLoc = loc;
              }
            }
            console.log(minLoc);
            const scheme = "maps:0,0?q=";

            const latLng = `${minLoc.latitude},${minLoc.longitude}`;
            const label = "Closest Recycling Bin";
            const url =
              "maps:0,0?q=" +
              "Closest Recycling Bin@" +
              minLoc.latitude +
              "," +
              minLoc.longitude;

            Linking.openURL(url);
          },
          err => {
            console.log(err);
          },
          { enableHighAccuracy: true, timeout: 200000 }
        );
      })
      .catch(err => console.log(typeof err));
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#efefe7" }}>
        <Header style={{ backgroundColor: "#198e63" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Camera")}
            >
              <Icon
                type="EvilIcons"
                name="camera"
                style={{ color: "white", fontSize: 36, paddingTop: 4 }}
              />
            </Button>
          </Left>
          <Body>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 30 }}>
              Materials
            </Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Tab")}
            >
              <Icon
                name="home"
                type="SimpleLineIcons"
                style={{ color: "white", fontSize: 23 }}
              />
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          {this.state.material.map((el, i) => {
            return (
              <View style={styles.itemContainer} key={el.name + i}>
                <Card>
                  <CardItem
                    header
                    bordered
                    style={{
                      backgroundColor: "#77BA99",
                      height: 60,
                      marginBottom: 10
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",

                        backgroundColor: "white",
                        borderColor: colorMap[el.type] || "black",
                        borderWidth: 3,
                        height: 80,
                        width: 80,
                        borderRadius: 40,
                        marginRight: 15
                      }}
                    >
                      <Icon
                        type="MaterialCommunityIcons"
                        name={iconMap[el.type] || "delete"}
                        style={{
                          color: colorMap[el.type] || "black",
                          fontSize: 45,

                          width: "60%"
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "700"
                      }}
                    >
                      {el.name}
                    </Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <List>
                        {el.instructions.map((instruct, i) => {
                          return (
                            <ListItem key={instruct + i}>
                              <Text>{i + 1 + ". " + instruct}</Text>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            );
          })}

          <Footer
            style={{
              position: "absolute",
              bottom: 0,
              height: 60,
              paddingLeft: 63,
              paddingRight: 0,
              width: "100%",
              shadowOffset: { height: 1 },
              shadowColor: "#6a6a6a",
              shadowOpacity: 0.6
            }}
          >
            <Text
              style={{
                fontFamily: "System",
                fontSize: 20,
                fontWeight: "400",
                width: "100%",
                color: "#262730",
                textAlign: "center",
                alignSelf: "center",
                paddingRight: 0,
                paddingLeft: 63
              }}
            >
              Find closest Recycle Bin
            </Text>

            <Button
              onPress={() => this.getClosestBin()}
              style={{
                backgroundColor: "white",
                height: 60,
                width: 60,
                borderRadius: 30,
                bottom: 80,
                marginRight: 80,
                shadowOffset: { height: 2, width: 2 },
                shadowColor: "#6a6a6a",
                shadowOpacity: 0.6
              }}
            >
              <Icon
                type="FontAwesome5"
                name="location-arrow"
                style={{ color: "#4285F4", fontSize: 27 }}
              />
            </Button>
          </Footer>
        </View>
      </Container>
    );
  }
}
const iconMap = {
  "Recycle Bin": "recycle",
  "Garbage Bin": "delete",
  "Compost Bin": "delete",
  "Electronic Waste": "power-plug"
};
const colorMap = {
  "Recycle Bin": "#4285F4",
  "Garbage Bin": "black",
  "Compost Bin": "#0F9D58",
  "Electronic Waste": "#F4B400"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  itemContainer: {
    width: "100%",
    margin: 20
  },
  title: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    backgroundColor: "green",
    alignItems: "center"
  },
  titleText: {
    fontSize: 30,
    padding: 5
  },
  instructions: {
    width: "100%",
    backgroundColor: "white"
  },
  instructionsText: {
    padding: 15,
    fontSize: 20
  },
  navButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch"
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: 90,
    width: 90,
    borderRadius: 45
  }
});
