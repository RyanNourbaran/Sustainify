import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Camera from "./src/screens/Camera";
import Main from "./src/screens/Main";
import MySustain from "./src/screens/MySustain";
import Results from "./src/screens/Results";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="md-home"
            style={{ fontSize: 24, paddingTop: 4, color: tintColor }}
          />
        )
      }
    },
    "My Sustain": {
      screen: MySustain,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="md-stats"
            style={{ fontSize: 24, paddingTop: 4, color: tintColor }}
          />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#262730",
      inactiveTintColor: "#A9A9A9",
      labelStyle: {
        fontSize: 14,
        paddingBottom: 6,
        paddingTop: 0,
        marginTop: 0
      },
      style: {
        height: 60,
        borderTopColor: "transparent",
        shadowOffset: { height: -4 },
        shadowColor: "#073325",
        shadowOpacity: 1.0
      }
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Tab: TabNavigator,
      Camera: Camera,
      Results: Results
    },
    {
      initialRouteName: "Results"
    }
  )
);
