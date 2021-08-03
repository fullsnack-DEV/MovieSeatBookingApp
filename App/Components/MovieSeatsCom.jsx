import React from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function MovieSeat() {
  const seats = [...Array(52).keys()];
  const ocuupied = [2, 3];

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.setswrapper}>
          {seats.slice(0, 4).map((seat, index) => {
            const isincluded = seats.includes(seat);
            const isocupied = ocuupied.includes(seat);
            return (
              <View>
                <View
                  key={index.toString()}
                  style={
                    (styles.seats, [isocupied ? styles.occupied : styles.bgB])
                  }
                />
              </View>
            );
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(4, 13).map((seat, index) => {
            const isincluded = seats.includes(seat);
            const isocupied = ocuupied.includes(seat);
            return (
              <View
                key={index.toString()}
                style={
                  (styles.seats, [isocupied ? styles.occupied : styles.bgB])
                }
              />
            );
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(14, 23).map((seat, index) => {
            return <View key={index.toString()} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(24, 33).map((seat, index) => {
            return <View key={index.toString()} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(34, 43).map((seat, index) => {
            return <View key={index.toString()} style={styles.seats} />;
          })}
        </View>

        <View style={styles.setswrapper}>
          {seats.slice(44, 50).map((seat, index) => {
            return (
              <View key={index.toString()}>
                <View style={styles.seats} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    top: height * 0.1,
    borderWidth: 2,
    borderColor: "red",
  },
  seats: {
    backgroundColor: "#303030",
    borderColor: "#404040",
    marginHorizontal: 5,
    marginVertical: 12,
    borderRadius: 8,
    height: 25,
    width: 25,
    borderWidth: 1,
  },
  setswrapper: {
    width,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bgB: {
    backgroundColor: "#303030",
    marginHorizontal: 5,
    borderColor: "#404040",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 8,
    height: 25,
    width: 25,
  },
  occupied: {
    backgroundColor: "#f5f5f5",

    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 8,
    height: 25,
    width: 25,
  },
});

//Todo
//Implement the Seats Layout  ===> done
//Implement the Seat Selection Feature
//Make the Time Selection Flatlist
//Add the Sliding Button and the Modal / Popup
