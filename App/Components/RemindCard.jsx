import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IMDBcomponent from "./IMDBcomponent";
import Starcomponent from "./Starcomponent";

export default function RemindCard({ title, img, imdbrating }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View
          style={{
            backgroundColor: "hotpink",
            width: 135,
            height: "100%",
            borderRadius: 15,
          }}
        />
        <View
          style={{
            backgroundColor: "#000",
            width: 200,
            height: "100%",
            borderRadius: 15,
          }}
        >
          <View style={styles.txtcontainer}>
            <Text style={{ fontSize: 20 }}>fast and Furious</Text>
            <View style={styles.ratingswrapper}>
              <Starcomponent votes={imdbrating / 2.0} />
              <IMDBcomponent imdb={imdbrating} />
            </View>
          </View>
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
    justifyContent: "space-between",
    marginTop: 15,
    height: 180,
    borderRadius: 15,
    width: 350,
    backgroundColor: "red",
    alignSelf: "center",
  },
  txtcontainer: {
    padding: 25,
  },
  ratingswrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
