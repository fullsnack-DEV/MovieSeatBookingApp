import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLORS } from "../Config/Colorpallet";
import { FONTSTYLE } from "../Config/FontStyles";

const { width, height } = Dimensions.get("screen");

const ITEM_SIZE = width * 0.72;

console.log(ITEM_SIZE);

export default function CateogryList({ onPress, icon, title }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: ITEM_SIZE * 0.12,

    padding: 10,
    backgroundColor: "#3E424E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    textAlign: "center",

    width: ITEM_SIZE * 0.45,
  },
  icon: {
    fontSize: 17,
    marginHorizontal: 5,
    marginLeft: 0,
  },
  title: {
    ...FONTSTYLE.smalltitle,
    color: "#fff",
  },
});
