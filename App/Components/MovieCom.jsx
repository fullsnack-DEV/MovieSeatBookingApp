import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = width * 0.72;

const getposter = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export default function MovieCom({ img }) {
  return (
    <TouchableOpacity>
      <View style={styles.imgcontainer}>
        <Image style={styles.img} source={{ uri: getposter(img) }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    padding: 10,
    width: ITEM_SIZE,
    alignItems: "center",
  },
  img: {
    height: ITEM_SIZE * 1.2,
    width: "85%",
    borderColor: "#fff",
    borderWidth: 0.3,
    resizeMode: "cover",
    borderRadius: 20,
  },
});
