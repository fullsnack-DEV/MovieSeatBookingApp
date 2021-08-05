import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Foundation,
} from "@expo/vector-icons";

//FonstStyles
import { FONTSTYLE } from "../Config/FontStyles";
import ButtnCom from "./ButtnCom";

//Dimensions
const { width, height } = Dimensions.get("screen");

export default function Bannerimg({ item }) {
  //state for the bell color

  const [color, Setcolor] = useState(false);

  const changebellcolor = () => {
    Setcolor(!color);
  };

  //getImage Method

  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  const getBackdropPath = (path) =>
    `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={{ uri: getBackdropPath(item.backdrop_path) }}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "#000"]}
          style={styles.lineargrad}
        />
      </View>

      <View style={styles.infocontainer}>
        <Text style={styles.heading} numberOfLines={1}>
          {item.title}
        </Text>

        <View style={styles.rating}>
          <View style={styles.star}>
            <AntDesign name="star" size={22} color="yellow" />
            <Text style={styles.ratetext}>{item.vote_average / 2.0}</Text>
          </View>
          <View style={styles.imdb}>
            <Text style={styles.imdbtext}> IMDB {item.vote_average}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text numberOfLines={8} style={styles.para}>
            {item.overview}
            {item.overview}
          </Text>
        </View>
        <View style={styles.reminder}>
          <Text style={styles.bell}>Remind Later!</Text>
          <Pressable onPress={() => changebellcolor()}>
            <View style={styles.iconview}>
              <FontAwesome
                style={{ top: 5 }}
                name={color ? "bell" : "bell-o"}
                size={22}
                color={color ? "red" : "white"}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignContent: "center",
  },
  imgcontainer: {
    height: height * 0.55,
    width: width,
  },

  infocontainer: {
    height: height * 0.4,
    width: width / 1.16,
    position: "absolute",

    top: height * 0.2,
  },
  heading: {
    ...FONTSTYLE.heading2,
  },
  star: {
    flexDirection: "row",
    marginVertical: 12,
  },
  rating: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  ratetext: {
    ...FONTSTYLE.ratings,

    color: "yellow",

    marginHorizontal: 10,
  },
  imdb: {
    backgroundColor: "yellow",
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
    marginHorizontal: 10,
    alignSelf: "flex-start",
  },
  lineargrad: { width: 800, height: "180%", position: "absolute", bottom: 0 },

  imdbtext: {
    ...FONTSTYLE.ratings,
    letterSpacing: 0.6,
    fontSize: 14,

    color: "#000",
  },
  para: {
    ...FONTSTYLE.para,
  },
  remindbtn: {
    top: height * 0.55,
    position: "absolute",
    backgroundColor: "#fff",
  },
  bell: {
    ...FONTSTYLE.heading3,
    marginTop: 15,
    fontSize: 15,
    color: "red",

    marginRight: 15,
  },
  reminder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconview: {
    backgroundColor: "transparent",
    height: 40,
    width: 80,
    right: 20,
    top: 10,
    alignItems: "center",
  },
});
