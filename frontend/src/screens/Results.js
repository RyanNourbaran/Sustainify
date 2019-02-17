import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      material: []
    };
  }
  componentDidMount = () => {
    const materialArray = this.props.navigation.state.params.materials;
    console.log(materialArray);

    axios({
      method: "get",
      url:
        "https://api.mlab.com/api/1/databases/sustainify/collections/materials?apiKey=",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        let newMaterials = [];
        descriptions = response.data;
        for (let i = 0; i < materialArray.length; i++) {
          descriptions.forEach(obj => {
            console.log(obj.name.toLowerCase(), materialArray[i].name);

            if (
              obj.name.toLowerCase() === materialArray[i].name.toLowerCase()
            ) {
              console.log(obj.instructions);
              newMaterials.push({
                name: obj.name,
                instructions: obj.instructions
              });
            }
          });
        }
        this.setState({ material: newMaterials });
        console.log(newMaterials);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.material.map((obj, i) => {
          return (
            <View style={styles.title} key={obj.name + i}>
              <View>
                <Text styles={styles.titleText}>{obj.name}</Text>
              </View>

              <View style={styles.instructions}>
                <Text styles={styles.instructionsText}>{obj.instructions}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  title: {
    width: "100%",
    padding: 10,
    backgroundColor: "blue"
  },
  titleText: {
    fontSize: 30
  },
  instructions: {
    width: "100%",
    padding: 10,
    backgroundColor: "white"
  },
  instructionsText: {
    fontSize: 18
  }
});
