import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import MovieCom from "./MovieCom";
import useApi from "../Hooks/useApi";
import HeadingCom from "./HeadingCom";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function MovieList({ endpoint, title }) {
  const { data: Movies, Loding, Error, Request: LoadMovies } = useApi(endpoint);

  useEffect(() => {
    LoadMovies();
  }, []);

  const movies = Movies.splice(0, 10);

  const Moviesdata = [{ key: "left-s" }, ...movies, { key: "right-s" }];

  return (
    <View style={styles.container}>
      <HeadingCom title={title} />

      <FlatList
        data={Moviesdata}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          if (!item.poster_path) {
            return <View style={{ width: SPACER_ITEM_SIZE }} />;
          }

          return <MovieCom img={item.poster_path} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
