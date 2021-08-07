import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FONTSTYLE } from "../Config/FontStyles";
import IMDBcomponent from "./IMDBcomponent";
import Starcomponent from "./Starcomponent";

//getting the image
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export default function RemindCard({ title, img, imdbrating }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={{ uri: getBackdropPath(img) }}
          resizeMode="center"
        />
      </View>

      <View style={styles.txtcontainer}>
        <Text numberOfLines={3} style={styles.movietitle}>
          {title}
        </Text>
        <View style={styles.ratingswrapper}>
          <Starcomponent votes={imdbrating / 2.0} />
          <IMDBcomponent imdb={imdbrating} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: "row",

    marginVertical: 20,
    height: 180,
    borderRadius: 20,
    width: 350,
    backgroundColor: "#181818",
    alignSelf: "center",
  },
  txtcontainer: {
    padding: 25,

    width: 200,
    paddingHorizontal: 10,
  },
  ratingswrapper: {
    justifyContent: "space-between",
    flexDirection: "row",

    marginVertical: 20,
  },
  image: {
    width: 120,
    height: "100%",
    borderRadius: 15,
  },
  imagecontainer: {
    padding: 5,
  },
  movietitle: {
    ...FONTSTYLE.heading3,
    fontSize: 20,
  },
});
