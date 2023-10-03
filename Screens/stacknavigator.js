import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./tabnavigation";
import HomeScreen from "./homescreen";

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"home"} component={HomeScreen} />
        <Stack.Screen name={"bottomTab"} component={BottomTab} />
      </Stack.Navigator>
    );
  }
}
