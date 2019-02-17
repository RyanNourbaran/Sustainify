import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Button,
  Icon,
  Right,
  Switch,
  ListItem,
  Left,
  Body
} from "native-base";
import LinearGradient from "react-native-linear-gradient";

export default class MySustain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <LinearGradient colors={["#237A57", "#093028"]} style={{ flex: 1 }}>
          <View style={styles.header} />
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
            }}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Jack Dorsey</Text>
              <Text style={styles.info}>New York, New York, USA</Text>
              <ListItem style={styles.listItems} icon>
                <Left>
                  <Button
                    style={{
                      width: 50,
                      height: 60,
                      backgroundColor: "#FF9501"
                    }}
                  >
                    <Icon
                      active
                      style={{ fontSize: 40 }}
                      type="Foundation"
                      name="lightbulb"
                    />
                  </Button>
                </Left>
                <Body>
                  <Text style={styles.bodyText}>Energy Saved:</Text>
                </Body>
                <Right>
                  <Text style={[styles.bodyText]}>64 Kwh </Text>
                </Right>
              </ListItem>
              <ListItem style={styles.listItems} icon>
                <Left>
                  <Button
                    style={{ width: 50, height: 60, backgroundColor: "grey" }}
                  >
                    <Icon
                      active
                      style={{ fontSize: 30 }}
                      type="FontAwesome5"
                      name="city"
                    />
                  </Button>
                </Left>
                <Body>
                  <Text style={styles.bodyText}>Pollution Stopped:</Text>
                </Body>
                <Right>
                  <Text style={[styles.bodyText]}>3.6 lbs</Text>
                </Right>
              </ListItem>
              <ListItem style={styles.listItems} icon>
                <Left>
                  <Button
                    style={{ width: 50, height: 60, backgroundColor: "blue" }}
                  >
                    <Icon
                      active
                      style={{ fontSize: 40 }}
                      type="Ionicons"
                      name="ios-water"
                    />
                  </Button>
                </Left>
                <Body style={styles.bodyText}>
                  <Text style={styles.bodyText}>Water Saved:</Text>
                </Body>
                <Right>
                  <Text style={[styles.bodyText]}>397 Gal.</Text>
                </Right>
              </ListItem>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Icon
                  active
                  style={{ fontSize: 50, color: "gold" }}
                  type="FontAwesome"
                  name="star"
                />
                <Icon
                  active
                  style={{ fontSize: 50, color: "gold" }}
                  type="FontAwesome"
                  name="star"
                />
                <Icon
                  active
                  style={{ fontSize: 50, color: "gold" }}
                  type="FontAwesome"
                  name="star"
                />
                <Icon
                  active
                  style={{ fontSize: 50, color: "gold" }}
                  type="FontAwesome"
                  name="star"
                />
                <Icon
                  active
                  style={{ fontSize: 50, color: "gold" }}
                  type="FontAwesome"
                  name="star-o"
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#efefe7",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  body: { flex: 1, marginTop: 40 },
  bodyContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 30,
    fontSize: 28
  },
  name: {
    fontSize: 28,
    color: "#efefe7",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  },
  bodyText: {
    fontSize: 20,
    flexWrap: "wrap",
    color: "#efefe7"
  },
  listItems: {
    justifyContent: "space-between",
    alignItems: "stretch",
    width: "100%",
    margin: 20
  }
});
