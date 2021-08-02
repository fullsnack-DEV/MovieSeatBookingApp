import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
import { COLORS } from "../Config/Colorpallet";
import Dates from "../Data/DatesData";
import DatesCom from "./DatesCom";
import HeadingCom from "./HeadingCom";
const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.17;
const ITEM_SIZE2 = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

//Todo
//to add the Animation of the Dates
export default function DatesListCom() {
  //state for the dates data

  //creating a animatd Refrance
  const Yscroll = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.wrapper}>
      <HeadingCom title="Select Date" style={styles.heading} />

      <Animated.View style={styles.container}>
        <Animated.FlatList
          initialScrollIndex="3"
          data={Dates}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: ITEM_SPACING,
          }}
          bounces={false}
          snapToInterval={ITEM_SIZE}
          style={{ flexGrow: 0, height: "100%" }}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: Yscroll } } }],
            { useNativeDriver: true }
          )}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,

              index * ITEM_SIZE,
              (index + 1) * ITEM_SIZE,
              (index + 1) * ITEM_SIZE,
            ];

            const opacity = Yscroll.interpolate({
              inputRange,
              outputRange: [0.3, 0.3, 1, 0.3, 0.3],
            });
            const scale = Yscroll.interpolate({
              inputRange,
              outputRange: [0.75, 0.75, 1, 0.75, 0.75],
            });

            const scaleY = Yscroll.interpolate({
              inputRange,
              outputRange: [5, 5, -20, 5, 5],
            });

            return (
              <DatesCom
                Date={item.date}
                Day={item.day}
                opacity={opacity}
                scale={scale}
                scaleY={scaleY}
              />
            );
          }}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    top: height * 0.6,
    position: "absolute",
  },
  container: {
    top: -35,
  },
  heading: {
    color: COLORS.primary,
  },
});
