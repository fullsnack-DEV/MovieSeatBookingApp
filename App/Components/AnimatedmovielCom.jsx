import React from "react";
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from "react-native";

import Svg, { Text as BoldText } from "react-native-svg";

const { width, height } = Dimensions.get("screen");

const ITEM_SIZE = width * 0.65;

export default function Animatedmovielist({
  item,
  translateX,
  index,
  onPress,
  Loading,
}) {
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.imagecontainer}>
          <Animated.Image
            style={[
              styles.image,
              {
                transform: [{ rotateZ: translateX }],
                position: "relative",
              },
            ]}
            source={{ uri: getposter(item.poster_path) }}
          />

          <Svg
            style={styles.Svgstyle}
            height="245%"
            width="100%"
            viewBox="0 0 100 100"
          >
            <BoldText
              stroke="#fff"
              strokeWidth="1"
              fill="#000"
              color="#fff"
              fontSize="80"
              fontWeight="bold"
              fontStyle="oblique"
            >
              {index}
            </BoldText>
          </Svg>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  imagecontainer: {
    padding: 10,

    alignItems: "center",
  },
  image: {
    height: ITEM_SIZE * 1.2,
    width: "85%",
    borderColor: "#fff",
    borderWidth: 1,
    resizeMode: "cover",
    borderRadius: 20,
  },
  container: {
    width: ITEM_SIZE,
  },
  Svgstyle: {
    position: "absolute",
    top: 50,

    transform: [{ translateX: -18 }],

    right: 25,
  },
});
