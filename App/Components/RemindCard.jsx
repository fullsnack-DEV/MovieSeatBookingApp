import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FONTSTYLE } from "../Config/FontStyles";
import IMDBcomponent from "./IMDBcomponent";
import Starcomponent from "./Starcomponent";
import Swipeable from "react-native-gesture-handler/Swipeable";

//getting the image
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export default function RemindCard({
  title,
  img,
  imdbrating,
  information,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.wrapper}>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={{ uri: getBackdropPath(img) }}
            resizeMode="center"
          />
        </View>

        <View style={styles.txtcontainer}>
          <Text numberOfLines={1} style={styles.movietitle}>
            {title}
          </Text>
          <View style={styles.info}>
            <Text numberOfLines={4} style={styles.info}>
              {information}
            </Text>
          </View>
          <View style={styles.ratingswrapper}>
            <Starcomponent votes={imdbrating / 2.0} />
            <IMDBcomponent imdb={imdbrating} />
          </View>
        </View>
      </View>
    </Swipeable>
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
    padding: 10,
  },
  txtcontainer: {
    justifyContent: "center",
    width: 220,
    paddingHorizontal: 10,
  },
  ratingswrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
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
    fontSize: 15,
  },
  info: {
    ...FONTSTYLE.heading4,
    marginVertical: 4,
    fontSize: 11,
  },
});
