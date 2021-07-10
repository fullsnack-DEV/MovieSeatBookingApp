import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//Importing Navigator
import AppNavigator from "./App/Navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
