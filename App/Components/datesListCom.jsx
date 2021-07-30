import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
import Dates from "../Data/DatesData";
import DatesCom from "./DatesCom";
const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = width * 0.17;

//Todo
//to add the Animation of the Dates
export default function DatesListCom() {
  //creating a animatd Refrance
  const Yscroll = useRef(new Animated.Value(0)).current;
  return (
    <Animated.View style={styles.container}>
      <Animated.FlatList
        data={Dates}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ marginLeft: 80 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: Yscroll } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const outputRange = [0, 0, 0];

          const translateY = Yscroll.interpolate({
            inputRange,
            outputRange,
          });

          return (
            <DatesCom Date={item.date} Day={item.day} translateY={translateY} />
          );
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
});
