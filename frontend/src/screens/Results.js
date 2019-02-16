import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { apiKey } from "../assets/apiKey";
import axios from "axios";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      material: [
        { name: "plastic", descript: "descript" },
        { name: "cupcakes", descript: "descript" }
      ]
    };
  }
  getData() {
    console.log(this.state.material);

    const materialArray = this.props.navigation.state.params.materials;
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
        console.log(response.data);
        descriptions = response.data[0];
        for (let i = 0; i < materialArray.length; i++) {
          let x = materialArray[i];
          console.log(descriptions[x]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    this.getData();
    console.log(this.state.material);
    return (
      <View style={styles.container}>
        {this.state.material.map((obj, i) => {
          <Text>{obj.name}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-end",
    backgroundColor: "white"
  }
});
