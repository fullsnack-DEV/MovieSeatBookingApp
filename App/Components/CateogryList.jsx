import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { FONTSTYLE } from "../Config/FontStyles";

const { width, height } = Dimensions.get("screen");

const ITEM_SIZE = width * 0.72;

export default function CateogryList({ onPress, icon, title, stylebg }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.wrapper, stylebg]}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={[styles.title, stylebg]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: ITEM_SIZE * 0.12,

    backgroundColor: "#3E424E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    textAlign: "center",

    width: ITEM_SIZE * 0.47,
  },
  icon: {
    fontSize: 17,
    marginHorizontal: 5,
    marginLeft: 0,
  },
  title: {
    ...FONTSTYLE.smalltitle,
    color: "#fff",
    letterSpacing: 1.9,
    fontFamily: "Nunito_B",
    marginHorizontal: "3%",
  },
});
