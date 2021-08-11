import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MovieSeat from "../Components/MovieSeatsCom";
import Screen from "../Components/Screen";
import ScreenCom from "../Components/ScreenCom";
import { FONTSTYLE } from "../Config/FontStyles";

const { width, height } = Dimensions.get("window");

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
      <MovieSeat title={name} />
    </Screen>
  );
}
const styles = StyleSheet.create({
  titlecontainer: {
    alignSelf: "center",
    top: height * 0.08,
    paddingHorizontal: 15,
  },
  headingtxt: {
    ...FONTSTYLE.heading3,
    letterSpacing: 4,
    fontSize: 23,
  },
});
//Todo
//implement the SVg Arc For the Cinema screen
//Implement the Seat selection Feature
//Add the Animated Time Picker
//Back Button
//Implement the Modal for the Ticket Display
