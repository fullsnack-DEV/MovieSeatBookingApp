import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
import { getmovies } from "../api/Endpoints";
import { Categories } from "../Data/Categories";

//Custom Hooks
import useApi from "../Hooks/useApi";
import Animatedmovielist from "./AnimatedmovielCom";
import CateogryList from "./CateogryList";

//Component Import
import HeadingCom from "./HeadingCom";

const { width, height } = Dimensions.get("screen");

const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function AnimatedMovieList({ endpoint, title }) {
  const Xsscroll = useRef(new Animated.Value(0)).current;
  const { data: Movies, Loding, Error, Request: LoadMovies } = useApi(endpoint);

  useEffect(() => {
    LoadMovies();
    console.log("I am rendering 3");
  }, []);

  const movies = Movies.splice(0, 10);

  const Moviedata = [{ key: "left-s" }, ...movies, { key: "right-s" }];

  return (
    <View style={styles.listcontainer}>
      <HeadingCom title={title} />
      <View style={styles.cateogries}>
        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ marginLeft: 25 }}
          snapToAlignment="start"
          ListFooterComponent={<View style={{ width: 30 }} />}
          renderItem={({ item }) => {
            return (
              <CateogryList item={item} icon={item.icon} title={item.name} />
            );
          }}
        />
      </View>
      <View style={styles.movielist}>
        <Animated.FlatList
          style={styles.flatlist}
          keyExtractor={(_, index) => index.toString()}
          data={Moviedata}
          snapToInterval={ITEM_SIZE}
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          removeClippedSubviews={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: Xsscroll } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            if (!item.poster_path) {
              return <View style={{ width: SPACER_ITEM_SIZE }} />;
            }

            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];
            const outputRange = ["8deg", "0deg", "-8deg"];
            const translateX = Xsscroll.interpolate({
              inputRange,
              outputRange,
            });

            return (
              <Animatedmovielist
                item={item}
                translateX={translateX}
                index={index}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listcontainer: {
    flex: 0.84,

    marginTop: "10%",
  },
  cateogries: {
    marginVertical: 20,
  },
  movielist: {
    flex: 1.2,
  },
  flatList: {
    flexGrow: 0,
  },
});
