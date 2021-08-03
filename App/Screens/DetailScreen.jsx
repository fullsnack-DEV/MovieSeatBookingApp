import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Bannerimg from "../Components/Bannerimg";
import DatesCom from "../Components/DatesCom";
import DatesListCom from "../Components/datesListCom";
import Screen from "../Components/Screen";
import ButtnCom from "../Components/ButtnCom";

export default function DetailScreen({ route, navigation }) {
  //hiding the Tab bar on the Detail Screen

  //getting the Item
  const { item } = route.params;

  return (
    <Screen>
      <Bannerimg item={item} />
      <DatesListCom />
      <ButtnCom
        title="Book Seats!"
        onPress={() => navigation.navigate("Cinema", { name: item.title })}
      />
    </Screen>
  );
}

//Todo Detail Screen

//1 > To Render the Liner Gradient ==Done
//2 > To Display the Name and Info ==Done
// 3 > Make the Animated Date Picker === done
//Create a Dates Design == done
//To add the Buttons == Done
