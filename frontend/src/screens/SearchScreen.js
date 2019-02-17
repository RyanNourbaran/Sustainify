import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import SearchBar from "react-native-searchbar";

const items = [
  "aluminium",
  "coffee cups",
  "coffee cup lid",
  "laptop",
  "wax paper",
  "pencils",
  "pens",
  "ceramic",
  "magazines",
  "paper towels",
  "tape & tape dispensers",
  "plastic bottles"
];

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }

  render() {
    return (
      <View style={{ backgroundColor: "#efefe7", height: "100%" }}>
        <View
          style={{
            marginTop: 80,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {this.state.results.map((result, i) => {
            let arrResult = [];
            arrResult.push(result);
            console.log(arrResult);

            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Results", {
                    materials: arrResult
                  })
                }
                style={{
                  padding: 20,
                  height: 100,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderColor: "black",
                  backgroundColor: "#198e63",
                  margin: 5
                }}
                key={i}
              >
                <Text style={{ fontSize: 30 }}>
                  {typeof result === "object" && !(result instanceof Array)
                    ? "gold object!"
                    : result.toString()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <SearchBar
          ref={ref => (this.searchBar = ref)}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
        />
      </View>
    );
  }
}
