import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FavScreen from "../Screens/FavScreen";

const { Navigator, Screen } = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Navigator headerMode="none">
      <Screen name="Fav" component={FavScreen} />
    </Navigator>
  );
}
