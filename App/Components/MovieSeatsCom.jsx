import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import Seatsindicator from "./Seatsindicator";

const { width, height } = Dimensions.get("screen");

export default function MovieSeat() {
  //creating a state array to store the Selected Seats
  //intializing it with some dummy seats
  const [selectedseats, Setselectedseats] = useState([]);

  const seats = [...Array(52).keys()];

  const occupied = [3, 10, 5, 9, 23, 80, 14, 28, 31];

  //building the habdker to Set the Selected Seats
  const Selecteseathandle = (seat) => {
    const isSelected = selectedseats.includes(seat);
    //why we are checking it beause when we first select the seat on ui
    //i.e doing a onClick event isselected becomes false and then wean set the state of seats
    //but when user reclick on the same seat the isselect will be true and we will filter the seats and return the new seat state

    //to debug

    // console.log(isSelected);

    if (isSelected) {
      const finalseat = selectedseats.filter(
        (selectedseat) => selectedseat !== seat
      );

      Setselectedseats(finalseat);
    } else {
      Setselectedseats([...selectedseats, seat]);
    }
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.setswrapper}>
            {seats.slice(0, 4).map((seat, index) => {
              const isselected = selectedseats.includes(seat);
              const isocupied = occupied.includes(seat);
              return (
                <Pressable
                  onPress={isocupied ? null : () => Selecteseathandle(seat)}
                  key={`${index}`}
                >
                  <View
                    style={[
                      styles.seats,
                      isselected && styles.selected,
                      isocupied && styles.occupied,
                    ]}
                  />
                </Pressable>
              );
            })}
          </View>
          <View style={styles.setswrapper}>
            {seats.slice(4, 13).map((seat, index) => {
              const isselected = selectedseats.includes(seat);
              const isocupied = occupied.includes(seat);
              return (
                <Pressable
                  onPress={isocupied ? null : () => Selecteseathandle(seat)}
                  key={`${index}`}
                >
                  <View
                    style={[
                      styles.seats,
                      isselected && styles.selected,
                      isocupied && styles.occupied,
                    ]}
                  />
                </Pressable>
              );
            })}
          </View>
          <View style={styles.setswrapper}>
            {seats.slice(14, 23).map((seat, index) => {
              const isselected = selectedseats.includes(seat);
              const isocupied = occupied.includes(seat);
              return (
                <Pressable
                  onPress={isocupied ? null : () => Selecteseathandle(seat)}
                  key={`${index}`}
                >
                  <View
                    style={[
                      styles.seats,
                      isselected && styles.selected,
                      isocupied && styles.occupied,
                    ]}
                  />
                </Pressable>
              );
            })}
          </View>
          <View style={styles.setswrapper}>
            {seats.slice(24, 33).map((seat, index) => {
              const isselected = selectedseats.includes(seat);
              const isocupied = occupied.includes(seat);
              return (
                <Pressable
                  onPress={isocupied ? null : () => Selecteseathandle(seat)}
                  key={`${index}`}
                >
                  <View
                    style={[
                      styles.seats,
                      isselected && styles.selected,
                      isocupied && styles.occupied,
                    ]}
                  />
                </Pressable>
              );
            })}
          </View>
          <View style={styles.setswrapper}>
            {seats.slice(34, 43).map((seat, index) => {
              const isselected = selectedseats.includes(seat);
              const isocupied = occupied.includes(seat);
              return (
                <Pressable
                  onPress={isocupied ? null : () => Selecteseathandle(seat)}
                  key={`${index}`}
                >
                  <View
                    style={[
                      styles.seats,
                      isselected && styles.selected,
                      isocupied && styles.occupied,
                    ]}
                  />
                </Pressable>
              );
            })}
          </View>

          <View style={styles.setswrapper}>
            {seats.slice(44, 50).map((seat, index) => {
              const isselected = selectedseats.includes(seat);
              const isocupied = occupied.includes(seat);
              return (
                <Pressable
                  onPress={isocupied ? null : () => Selecteseathandle(seat)}
                  key={`${index}`}
                >
                  <View
                    style={[
                      styles.seats,
                      isselected && styles.selected,
                      isocupied && styles.occupied,
                    ]}
                  />
                </Pressable>
              );
            })}
          </View>
        </View>
        <Text style={{ color: "#fff" }}>{selectedseats.length}</Text>
      </View>
      <Seatsindicator />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    top: height * 0.06,
    borderWidth: 2,
  },
  seats: {
    backgroundColor: "#303030",
    borderColor: "#404040",
    marginHorizontal: 4,
    marginVertical: 13,
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
  occupied: {
    backgroundColor: "#fff",
    marginHorizontal: 4,

    marginVertical: 13,
    borderRadius: 8,
    height: 25,
    width: 25,
  },
  selected: {
    backgroundColor: "#DC143C",

    marginHorizontal: 4,
    marginVertical: 13,
    borderRadius: 8,
    height: 25,
    width: 25,
    borderWidth: 0,
  },
});

//Todo
//Implement the Seats Layout  ===> done
//Implement the Seat Selection Feature
//Make the Time Selection Flatlist
//Add the Sliding Button and the Modal / Popup
