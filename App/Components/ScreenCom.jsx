import React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";
import { View, Text, StyleSheet } from "react-native";

export default function ScreenCom(props) {
  return (
    <Svg
      height="100"
      width="500"
      {...props}
      style={{ backgroundColor: "#000", top: 50 }}
    >
      <Path
        d="M150 35 Q10 400 400 400 "
        fill="#000"
        stroke="#f4f4f4"
        strokeWidth="3.6"
        x="500"
        y="30"
        transform="translate(30,40) rotate(480)"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 85,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  curvedLine: {
    width: "25%",
    height: 100,
    position: "absolute",
    bottom: -25,
    left: "37%",

    borderRadius: 55,
    backgroundColor: "black",
    transform: [{ scaleX: -5 }, { scaleY: 1 }],
  },
});
