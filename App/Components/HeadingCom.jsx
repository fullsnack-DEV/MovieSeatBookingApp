import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTSTYLE } from "../Config/FontStyles";
import { width, height } from "../Utils/Utils";

export default function HeadingCom({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 15,
  },
  heading: {
    ...FONTSTYLE.heading1,
    color: "#ECEDED",
  },
});
