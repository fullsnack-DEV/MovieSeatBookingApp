import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function Screen({ children }) {
  return <SafeAreaView>{children}</SafeAreaView>;
}

//instead of using SafeArea View all the time.
//I' am making the Component of it and now we can use Screen Com in Our All Screens
//to wrap the Content in SafeArea View
