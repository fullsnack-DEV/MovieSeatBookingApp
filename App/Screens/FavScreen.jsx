import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import RemindCard from "../Components/RemindCard";
import Screen from "../Components/Screen";
import { FONTSTYLE } from "../Config/FontStyles";
//redux selector

export default function FavScreen() {
  //getting the data of Fav  from the Store
  const Fav = useSelector((state) => state.fav);

  return (
    <Screen>
      {Fav[0] ? (
        <Text style={styles.remindtext}>Your Reminders</Text>
      ) : (
        <Text style={styles.remindtext}> No Reminders</Text>
      )}

      <FlatList
        data={Fav}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ marginVertical: 15 }}
        renderItem={({ item }) => {
          return (
            <RemindCard
              title={item.title}
              img={item.img}
              imdbrating={item.imdbrating}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  remindtext: {
    ...FONTSTYLE.heading3,
    textAlign: "center",
    marginTop: 15,
  },
});
