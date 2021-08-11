import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import { FONTSTYLE } from "../Config/FontStyles";
import AnimatedLoader from "./AnimatedLoader";

const { width, height } = Dimensions.get("window");

export default function ButtnCom({
  onPress,
  title,
  price,
  extrastyle,
  Loading,
}) {
  return (
    <>
      {!price ? (
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={[styles.wrapper, extrastyle]}>
            <Text style={styles.txt}>{title}</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <>
          <TouchableWithoutFeedback onPress={onPress}>
            {Loading ? (
              <AnimatedLoader />
            ) : (
              <View style={[styles.wrapper, styles.wrapper2]}>
                <Text style={styles.txt}>{title}</Text>
                <Text style={styles.gap}>|</Text>
                <Text style={styles.pricetag}>{price}$</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
        </>
      )}
    </>
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
  wrapper2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: width / 1.3,
  },
  txt: {
    ...FONTSTYLE.callToaction,
    padding: 12,
    textAlign: "center",
  },
  gap: {
    color: "#fff",
    fontSize: 15,
  },
  pricetag: {
    ...FONTSTYLE.callToaction,
    fontSize: 15,
    fontWeight: "bold",
  },
});
