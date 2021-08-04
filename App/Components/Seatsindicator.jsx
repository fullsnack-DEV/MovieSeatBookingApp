import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTSTYLE } from "../Config/FontStyles";

export default function Seatsindicator() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={[styles.circle, styles.circle1]} />
        <Text style={styles.txt}>Availaible</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={[styles.circle, styles.circle2]} />
        <Text style={styles.txt}>Reserved</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={[styles.circle, styles.circle3]} />
        <Text style={styles.txt}>Selected</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    top: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  txt: {
    ...FONTSTYLE.heading4,
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 50,

    marginHorizontal: 8,
  },
  circle1: {
    backgroundColor: "#303030",
  },
  circle2: {
    backgroundColor: "#fff",
  },
  circle3: {
    backgroundColor: "#E80F0C",
  },
});
