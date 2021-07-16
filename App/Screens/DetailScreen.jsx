import React from "react";
import { View, Text } from "react-native";
import Bannerimg from "../Components/Bannerimg";
import DatesCom from "../Components/DatesCom";
import Screen from "../Components/Screen";

export default function DetailScreen({ route }) {
  //getting the Item
  const { item } = route.params;

  return (
    <Screen>
      <Bannerimg item={item} />
      <DatesCom />
    </Screen>
  );
}

//Todo Detail Screen

//1 > To Render the Liner Gradient ==Done
//2 > To Display the Name and Info ==Done
// 3 > Make the Animated Date Picker ===
//Create a Dates Design
