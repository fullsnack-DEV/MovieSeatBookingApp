import React from "react";
import Svg, { Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";

export default function ScreenCom(props) {
  return (
    <View style={{}}>
      <Svg
        height="100"
        width="500"
        {...props}
        style={{
          backgroundColor: "#000",
          top: 50,
        }}
      >
        <Path
          d="M220 -50  Q15 450 450 450 "
          fill="#000"
          stroke="#fff"
          strokeWidth="2.6"
          x="550"
          y="10"
          transform="translate(30,40) rotate(480)"
        />
      </Svg>
      <LinearGradient
        colors={["transparent", "#000"]}
        style={{
          width: "100%",
          height: "80%",
          position: "absolute",
          bottom: -50,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 85,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
