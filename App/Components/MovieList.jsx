import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import MovieCom from "./MovieCom";
import useApi from "../Hooks/useApi";
import HeadingCom from "./HeadingCom";
import AnimatedLoader from "./AnimatedLoader";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function MovieList({ endpoint, title, navigation, reverse }) {
  const { data: Movies, Error } = useApi(endpoint);

  let movies = Movies.splice(0, 10);

  {
    reverse ? movies.reverse() : null;
  }

  const Moviesdata = [{ key: "left-s" }, ...movies, { key: "right-s" }];

  return (
    <View style={styles.container}>
      <HeadingCom title={title} />

      <FlatList
        data={Moviesdata}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        snapToInterval={ITEM_SIZE * 0.63}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          if (!item.poster_path) {
            return <View style={{ width: SPACER_ITEM_SIZE }} />;
          }

          return (
            <MovieCom
              img={item.poster_path}
              onPress={() =>
                navigation.navigate("Detail", {
                  item,
                })
              }
            />
          );
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
