import React, { useState, useRef, useMemo, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Pressable,
} from "react-native";
//Bottom Sheet
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

//redux
import { useDispatch, useSelector } from "react-redux";

import { getseat } from "../Redux/Actioncreator";
//Component import

import { FONTSTYLE } from "../Config/FontStyles";
import ButtnCom from "./ButtnCom";
import Seatsindicator from "./Seatsindicator";
import TicketdisplayCom from "./TicketdisplayCom";

const { width, height } = Dimensions.get("screen");

export default function MovieSeat() {
  //Ref for the bottom sheet

  const bottomSheetModalRef = useRef(null);

  //var for botton Sheet
  const snapPoints = useMemo(() => ["25%", "75%"], []);

  //To open the BottomSheet
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  //To habdle the Seat Changes
  const handleSheetChanges = useCallback((index) => {
    //console.log("handleSheetChanges", index);
  }, []);

  //creating a state array to store the Selected Seats
  //intializing it with some dummy seats

  const [selectedseats, Setselectedseats] = useState([]);

  const seats = [...Array(52).keys()];

  const occupied = [3, 10, 5, 9, 23, 80, 14, 28, 31];

  //Dispatcher Redux

  const dispatch = useDispatch();

  //for debug
  const seatdata = useSelector((state) => state.seat);
  const datesdata = useSelector((state) => state.dates);
  const timedata = useSelector((state) => state.time);

  const time = timedata[0];

  const date = datesdata[0];
  const seat = seatdata[0];

  const getseatandprice = (seat) => {
    //Dispatcher
    dispatch(getseat(seat));
    //debug
    console.log("this is time prop Data", time);
    //console.log(seatdata);
    handlePresentModalPress();
  };

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

  //seats
  let seatslength = selectedseats.length;

  //pricecalculate
  let price = 0;
  price = selectedseats.length * 25;

  return (
    <>
      <BottomSheetModalProvider>
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
        </View>
        <Seatsindicator />
        <View style={styles.seattxt}>
          <Text style={styles.txt}>
            You have selected{" "}
            <Text style={styles.txtinside}>{selectedseats.length} </Text>
            seats.
          </Text>
        </View>

        <ButtnCom
          title="Buy ticket"
          price={price}
          onPress={() => getseatandprice(seatslength, price)}
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={{ backgroundColor: "#000", flex: 1 }}>
            <TicketdisplayCom
              style={styles.ticketstyles}
              title={date.title}
              Date={date.date}
              Day={date.day}
              Time={time.time}
            />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
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
  seattxt: {
    top: height * 0.12,
  },
  txt: {
    textAlign: "center",
    color: "#fff",
    ...FONTSTYLE.heading4,
    fontSize: 13,
  },
  txtinside: {
    color: "#DC143C",
    fontSize: 15,
    fontWeight: "bold",
  },
  ticketstyles: {
    marginTop: 15,
  },
});

//Todo
//Implement the Seats Layout  ===> done
//Implement the Seat Selection Feature
//Make the Time Selection Flatlist
//Add the Sliding Button and the Modal / Popup
