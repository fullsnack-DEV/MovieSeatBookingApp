import React, { useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { getmovies, getnowplaying, getupcoming } from "../api/Endpoints";
import Header from "../Components/Header";

import AnimatedMovieList from "../Components/AnimatedMovielist";
import Screen from "../Components/Screen";
import MovieList from "../Components/MovieList";

export default function HomeScreen({ route, navigation }) {
  return (
    <Screen>
      <ScrollView style={styles.scrolles}>
        <Header />
        <AnimatedMovieList
          title="Feature Movies"
          endpoint={getmovies}
          navigation={navigation}
        />
        <MovieList
          title="Now Playing"
          endpoint={getnowplaying}
          navigation={navigation}
        />
        <MovieList
          title="Upcoming Movies"
          endpoint={getupcoming}
          navigation={navigation}
        />
        <MovieList
          title="Upcoming Movies"
          endpoint={getupcoming}
          navigation={navigation}
          reverse={true}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrolles: { flex: 1 },
});
