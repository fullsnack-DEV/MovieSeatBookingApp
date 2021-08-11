import React from "react";
import {
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Pressable,
} from "react-native";
import { COLORS } from "../Config/Colorpallet";

const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.25;

export default function TimeCom({ time, scale, opacity, onPress, stylebg }) {
  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={[
          styles.wrapper,

          {
            opacity,
            transform: [
              {
                translateY: scale,
              },
            ],
          },
        ]}
      >
        <Text style={[styles.txt, stylebg]}>{time}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: ITEM_SIZE,

    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  txt: {
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
    marginVertical: 12,
    letterSpacing: 5,
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
