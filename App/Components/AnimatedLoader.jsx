import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function AnimatedLoader() {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.wrapper]}>
      <LottieView source={require("../Data/loading2.json")} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    zIndex: 1,
  },
});
