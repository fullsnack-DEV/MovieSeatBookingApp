import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MovieSeat from "../Components/MovieSeatsCom";
import Screen from "../Components/Screen";
import ScreenCom from "../Components/ScreenCom";
import { FONTSTYLE } from "../Config/FontStyles";

export default function CinemaScreen({ route }) {
  //getting the data via routes
  const { name } = route.params;

  return (
    <Screen>
      <View style={styles.titlecontainer}>
        <Text style={styles.headingtxt} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <ScreenCom />
      <MovieSeat />
    </Screen>
  );
}
const styles = StyleSheet.create({
  titlecontainer: {
    alignSelf: "center",
    marginTop: 12,
  },
  headingtxt: {
    ...FONTSTYLE.heading3,
    letterSpacing: 3,
  },
});
