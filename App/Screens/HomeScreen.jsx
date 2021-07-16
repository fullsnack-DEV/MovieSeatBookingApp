import React, { useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { AppLoading } from "expo";
import { getmovies, getnowplaying, getupcoming } from "../api/Endpoints";
import Header from "../Components/Header";
import AnimatedMovieList from "../Components/AnimatedMovielist";
import Screen from "../Components/Screen";
import MovieList from "../Components/MovieList";
import useApi from "../Hooks/useApi";

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <ScrollView style={styles.scrolles}>
        <Header />
        <AnimatedMovieList
          title="Feature Movies"
          endpoint={getmovies}
          navigation={navigation}
        />
        <MovieList title="Now Playing" endpoint={getnowplaying} />
        <MovieList title="Upcoming Movies" endpoint={getupcoming} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrolles: {
    paddingBottom: 20,
  },
});