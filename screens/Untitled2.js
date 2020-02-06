import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import UntitledComponent from "../components/UntitledComponent";

function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.untitledComponent1Stack}>
        <UntitledComponent
          style={styles.untitledComponent1}
        ></UntitledComponent>
        <Text style={styles.gurukul1}>Gurukul</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  untitledComponent1: {
    top: 0,
    left: 0,
    width: 375,
    height: 81,
    backgroundColor: "rgba(5,50,227,0.07)",
    position: "absolute",
    opacity: 0.82,
    borderColor: "#000000",
    borderWidth: 1
  },
  gurukul1: {
    top: 26,
    left: 136,
    color: "#121212",
    position: "absolute",
    fontSize: 30,
    fontFamily: "roboto-regular"
  },
  untitledComponent1Stack: {
    width: 375,
    height: 81,
    marginTop: 35
  }
});

export default Untitled2;
