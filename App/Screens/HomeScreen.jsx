import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../Components/Header";
import Screen from "../Components/Screen";

//Color Imports
import { COLORS } from "../Config/Colorpallet";

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <Header />
    </Screen>
  );
}

const styles = StyleSheet.create({});
