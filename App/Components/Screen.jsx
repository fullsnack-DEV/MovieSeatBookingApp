import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";
import { COLORS } from "../Config/Colorpallet";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
      <StatusBar color="#fff" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight * 0.23,

    flex: 1,

    backgroundColor: COLORS.body,
  },
});

//instead of using SafeArea View all the time.
//I' am making the Component of it and now we can use Screen Com in Our All Screens
//to wrap the Content in SafeArea View
