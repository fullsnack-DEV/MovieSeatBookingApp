import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
//REdux
import { useDispatch, useSelector } from "react-redux";
import { gettime } from "../Redux/Actioncreator";

import Dates from "../Data/DatesData";
import TimeCom from "./TimeCom";

const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.25;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

export default function TimeListCom() {
  //state for items

  const [selecteditem, Setselecteditem] = useState({
    id: 1,
    date: 15,
    day: "Sat",
    Time: "19:30",
  });

  //for dubg
  const data = useSelector((state) => state.time);

  //Dispatcher
  const dispatch = useDispatch();

  const dispatchtime = (item) => {
    //will take the time and dave it to state object

    dispatch(gettime(item.Time));

    Setselecteditem(item);

    //debug;
    console.log(data);
  };

  //creating Animated Refrance

  const CircleScroll = useRef(new Animated.Value(0)).current;
  return (
    <Animated.View style={styles.wrapper}>
      <Animated.FlatList
        data={Dates}
        keyExtractor={(_, index) => index.toString()}
        style={styles.list}
        horizontal
        decelerationRate="fast"
        bounces={false}
        snapToInterval={ITEM_SIZE}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: CircleScroll } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          //interpolation
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,

            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const scale = CircleScroll.interpolate({
            inputRange,
            outputRange: [15, 10, 0, 15, 15],
            extrapolate: "clamp",
          });
          const opacity = CircleScroll.interpolate({
            inputRange,
            outputRange: [0.2, 0.2, 1, 0.2, 0.2],
            extrapolate: "clamp",
          });

          //Rendering the Com
          return (
            <TimeCom
              time={item.Time}
              scale={scale}
              opacity={opacity}
              onPress={() => dispatchtime(item)}
              stylebg={{
                color: selecteditem?.id == item.id ? "#ff726b" : "#fff",
              }}
            />
          );
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    top: 45,
    position: "absolute",
    zIndex: 100,
    height: "100%",
  },
});
