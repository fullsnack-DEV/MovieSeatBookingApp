import React from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import { COLORS } from "../Config/Colorpallet";

const { width, height } = Dimensions.get("window");

const ITEM_SIZE = width * 0.17;

export default function DatesCom({
  Date,
  Day,
  opacity,
  scale,
  scaleY,
  backgroundColor,
}) {
  return (
    <Animated.View>
      <Animated.View
        style={[
          styles.container,

          {
            opacity,
            transform: [
              {
                scale,
                translateY: scale,
              },
            ],
          },
        ]}
      >
        <Text style={styles.daytxt}>{Day}</Text>
        <Text style={styles.datetxt}>{Date}</Text>
        <View style={styles.holes} />
        <View style={styles.holes2} />
        <View style={styles.holes3} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff443a",
    width: width * 0.17,
    height: ITEM_SIZE * 1.5,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
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
  daytxt: {
    color: COLORS.primary,
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    letterSpacing: 1.6,
    fontWeight: "bold",
  },
  datetxt: {
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1.6,
    fontSize: 30,
  },
});
