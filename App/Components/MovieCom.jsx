import React from "react";
import { TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = width * 0.72;

const getposter = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export default function MovieCom({ img, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.img} source={{ uri: getposter(img) }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    height: ITEM_SIZE * 0.89,
    width: ITEM_SIZE * 0.61,
    borderRadius: 20,
    resizeMode: "cover",
    marginHorizontal: 8,
  },
});
