import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
//icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Deleteitemcom({ onPress }) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={StyleSheet.container}>
        <MaterialCommunityIcons
          name="delete-circle"
          size={45}
          color={"white"}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    alignItems: "center",
    borderRadius: 50,

    justifyContent: "center",

    right: 18,
  },
  wrapper: {
    marginRight: 35,
    top: 80,
  },
});
