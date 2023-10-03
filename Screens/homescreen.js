import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default class HomeScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace("bottomTab");
    }, 5000);
  }
  render() {
    return (
      <View style={styles.conteiner}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.titleImage}
            source={require("../assets/relogio.png")}
          />
          <Text style={styles.titleText}>Reminder Routine</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#B0E0E6",
    flex: 1,
  },
  titleImage: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  titleText: {
    // fontFamily: "Bungee Inline",
    fontSize: 40,
    margin: 5,
  },
});
