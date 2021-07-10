import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TicketScreen from "../Screens/TicketScreen";

const { Navigator, Screen } = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={TicketScreen} />
    </Navigator>
  );
}
