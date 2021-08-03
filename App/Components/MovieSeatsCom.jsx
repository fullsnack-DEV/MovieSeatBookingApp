import React from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export default function MovieSeat() {
  const seats = [...Array(58).keys()];
  const ocuupied = [5, 7, 25, 11, 9];

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.setswrapper}>
          {seats.slice(0, 4).map((seat, index) => {
            return (
              <View>
                <View key={index.toString()} style={styles.seats} />
              </View>
            );
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(4, 12).map((seat, index) => {
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
          {seats.slice(12, 20).map((seat, index) => {
            return <View key={index.toString()} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(20, 28).map((seat, index) => {
            return <View key={index.toString()} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(28, 36).map((seat, index) => {
            return <View key={index.toString()} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(36, 44).map((seat, index) => {
            return <View key={index.toString()} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(44, 52).map((seat, index) => {
            return <View key={index.toString()} style={styles.seats} />;
          })}
        </View>
        <View style={styles.setswrapper}>
          {seats.slice(52, 57).map((seat, index) => {
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
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 8,
    height: 30,
    width: 30,
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
    marginHorizontal: 8,
    borderColor: "#404040",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 8,
    height: 30,
    width: 30,
  },
  occupied: {
    backgroundColor: "#f5f5f5",

    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 8,
    height: 30,
    width: 30,
  },
});

//Todo
//Implement the Seats Layout  ===> done
//Implement the Seat Selection Feature
//Make the Time Selection Flatlist
//Add the Sliding Button and the Modal / Popup
