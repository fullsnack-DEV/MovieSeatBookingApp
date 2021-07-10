import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../Screens/ProfileScreen";

const { Navigator, Screen } = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Navigator headerMode="none">
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
}
