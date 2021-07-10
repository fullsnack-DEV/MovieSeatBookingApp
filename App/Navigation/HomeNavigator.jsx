import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";
const { Navigator, Screen } = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Detail" component={DetailScreen} />
    </Navigator>
  );
}
