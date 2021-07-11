import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getmovies, getnowplaying, getupcoming } from "../api/Endpoints";
import Header from "../Components/Header";
import AnimatedMovieList from "../Components/AnimatedMovielist";
import Screen from "../Components/Screen";
import MovieList from "../Components/MovieList";

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <ScrollView>
        <Header />
        <AnimatedMovieList title="Premiering This Week" endpoint={getmovies} />
        <MovieList title="Now Playing" endpoint={getnowplaying} />
        <MovieList title="Upcoming Movies" endpoint={getupcoming} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
