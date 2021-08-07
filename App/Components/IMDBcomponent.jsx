import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTSTYLE } from "../Config/FontStyles";

export default function IMDBcomponent({ imdb }) {
  return (
    <View style={styles.imdb}>
      <Text style={styles.imdbtext}> IMDB {imdb}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imdb: {
    backgroundColor: "yellow",
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
    marginHorizontal: 10,
    alignSelf: "flex-start",
  },
  imdbtext: {
    ...FONTSTYLE.ratings,
    letterSpacing: 0.6,
    fontSize: 14,

    color: "#000",
  },
});
