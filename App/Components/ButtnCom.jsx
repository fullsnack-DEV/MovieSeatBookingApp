import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { FONTSTYLE } from "../Config/FontStyles";

const { width, height } = Dimensions.get("window");

export default function ButtnCom({ onPress, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.txt}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "red",
    width: width / 1.6,
    alignSelf: "center",
    borderRadius: 15,
    position: "absolute",
    top: height * 0.9,
  },
  txt: {
    ...FONTSTYLE.callToaction,
    padding: 12,
    textAlign: "center",
  },
});
