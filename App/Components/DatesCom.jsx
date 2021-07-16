import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const ITEM_SIZE = width * 0.17;

export default function DatesCom() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#000",
          textAlign: "center",
          fontSize: 15,
          marginTop: 10,
        }}
      >
        Fri
      </Text>
      <Text style={{ color: "#000", textAlign: "center", fontSize: 22 }}>
        15
      </Text>
      <View style={styles.holes} />
      <View style={styles.holes2} />
      <View style={styles.holes3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff443a",
    top: "35%",
    width: ITEM_SIZE,
    height: ITEM_SIZE * 1.5,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 150,
  },
  holes: {
    width: 10,
    height: 10,
    backgroundColor: "#000",
    borderRadius: 50,
    position: "absolute",
    right: ITEM_SIZE / 2.3,
    top: 7,
  },
  holes2: {
    width: 10,
    height: 10,
    backgroundColor: "#000",
    borderRadius: 50,
    position: "absolute",
    left: -4,
    top: ITEM_SIZE * 1.1,
  },
  holes3: {
    width: 10,
    height: 10,
    backgroundColor: "#000",
    borderRadius: 50,
    position: "absolute",
    right: -4,
    top: ITEM_SIZE * 1.1,
  },
});
