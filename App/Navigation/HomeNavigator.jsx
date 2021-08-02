import React, { useEffect } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "../Screens/HomeScreen";
import DetailScreen from "../Screens/DetailScreen";
import CinemaScreen from "../Screens/CinemaScreen";
const { Navigator, Screen } = createStackNavigator();

export default function HomeNavigator({ route, navigation }) {
  //rendering the tab bar only on the
  const routename = getFocusedRouteNameFromRoute(route) ?? "Home";

  useEffect(() => {
    //Setting the options on a NAvigation
    navigation.setOptions({
      tabBarVisible: ["Home"].includes(routename),
    });
  }, [navigation, routename]);
  return (
    <Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{ ...TransitionPresets.RevealFromBottomAndroid }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Detail" component={DetailScreen} />
      <Screen name="Cinema" component={CinemaScreen} />
    </Navigator>
  );
}
