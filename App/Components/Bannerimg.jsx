import React, { useState, useEffect } from "react";
//import redux
import { useDispatch, useSelector } from "react-redux";
//importing actioncreatos
import { addtoremind, removeremind } from "../Redux/Actioncreator";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IMDBcomponent from "./IMDBcomponent";
import Starcomponent from "./Starcomponent";
import { FontAwesome } from "@expo/vector-icons";

//FonstStyles
import { FONTSTYLE } from "../Config/FontStyles";

//Dimensions
const { width, height } = Dimensions.get("screen");

export default function Bannerimg({ item }) {
  //Dispatch
  const dispatch = useDispatch();

  //selector
  const fav = useSelector((state) => state.fav);

  //state for the bell color

  const [color, Setcolor] = useState(false);

  //How to make the notify icon selected even after revisting the particular movie
  //getting the id of the movie

  //Running the effect
  useEffect(() => {
    //we will check if the movie present in a fav state of reducer or not
    const { id } = item;
    //for debug
    // console.log(id);
    const ispresent = fav.some((item) => item.id === id);

    if (ispresent && color === false) {
      Setcolor(true);
    }
  }, [item]);

  const changebellcolor = (title, img, id, imdbrating, information) => {
    if (!color) {
      // console.log(information);
      //Ading the dispatcher
      dispatch(addtoremind(title, img, id, imdbrating, information));
    } else {
      dispatch(removeremind(id));
    }

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
          <Starcomponent votes={item.vote_average / 2.0} />
          <IMDBcomponent imdb={item.vote_average} />
        </View>
        <View style={styles.info}>
          <Text numberOfLines={8} style={styles.para}>
            {item.overview}
            {item.overview}
          </Text>
        </View>
        <View style={styles.reminder}>
          <Text style={styles.bell}>Remind Later!</Text>
          <Pressable
            onPress={() =>
              changebellcolor(
                item.title,
                item.backdrop_path,
                item.id,
                item.vote_average,
                item.overview
              )
            }
          >
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

  rating: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },

  lineargrad: { width: 800, height: "180%", position: "absolute", bottom: 0 },

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

//add the dispatcher on notify button
