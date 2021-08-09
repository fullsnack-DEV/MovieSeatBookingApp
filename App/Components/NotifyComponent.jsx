import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NotifyComponent() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.txt}> Please Select the Dates </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
});
