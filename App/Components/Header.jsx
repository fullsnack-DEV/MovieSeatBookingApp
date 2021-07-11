import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import UserLogo from "../../assets/UesrIcon.png";
import { COLORS } from "../Config/Colorpallet";

import { WIDTH } from "../Utils/Utils";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>
          <Text style={styles.headingspan}>Hello</Text> Peter!
        </Text>
        <Text style={styles.headingsub}>Book Your Favorite Movies</Text>
      </View>
      <Image style={styles.img} source={UserLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    flex: 0.08,
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    color: COLORS.primary,

    letterSpacing: 1,
  },
  headingsub: {
    fontSize: 13,
    marginVertical: 3,
    color: COLORS.secondary,
    letterSpacing: 1,
  },
  headingspan: {
    fontWeight: "bold",
    color: "orangered",
  },
  img: {
    height: 60,
    width: 80,
    resizeMode: "center",
    marginBottom: 8,
  },
});
