import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTSTYLE } from "../Config/FontStyles";
import { AntDesign } from "@expo/vector-icons";

export default function Starcomponent({ votes }) {
  return (
    <View style={styles.star}>
      <AntDesign name="star" size={22} color="yellow" />
      <Text style={styles.ratetext}>{votes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    flexDirection: "row",
    marginVertical: 12,
  },
  ratetext: {
    ...FONTSTYLE.ratings,

    color: "yellow",

    marginHorizontal: 10,
  },
});
