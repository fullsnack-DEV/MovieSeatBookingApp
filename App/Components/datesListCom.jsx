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
import { getdates } from "../Redux/Actioncreator";
//component imports
import { COLORS } from "../Config/Colorpallet";
import Dates from "../Data/DatesData";
import ButtnCom from "./ButtnCom";
import DatesCom from "./DatesCom";
import HeadingCom from "./HeadingCom";
const { width, height } = Dimensions.get("window");
const ITEM_SIZE = width * 0.17;
const ITEM_SIZE2 = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

//Todo
//to add the Animation of the Dates
export default function DatesListCom({ title }) {
  //console.log("title from datelist", title);
  //state for the dates data
  const [Selecteditem, setSelecteditem] = useState({
    id: 4,
    date: 14,
    day: "Tue",
  });

  //Pulling the data
  //debug

  const data = useSelector((state) => state.dates);

  //Dispatcher
  const dispatch = useDispatch();

  const dispatchdates = (item, title) => {
    //console.log("title from dispacher", title);
    //will take the dates and dispatch
    dispatch(getdates(item.date, item.day, title));

    //
    setSelecteditem(item);

    //debug
    console.log(data);
  };

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
          style={{ flexGrow: 0 }}
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

            return (
              <DatesCom
                Date={item.date}
                onPress={() => dispatchdates(item, title)}
                Day={item.day}
                opacity={opacity}
                scale={scale}
                stylebg={{
                  backgroundColor:
                    Selecteditem?.id == item.id ? "#f5f5f5" : "#ff443a",
                }}
                styletxt={{
                  color: Selecteditem?.id == item.id ? "#000" : "#fff",
                }}
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
    top: height * 0.63,
    position: "absolute",
  },
  container: {
    top: -35,
  },
  heading: {
    color: COLORS.primary,
    marginTop: 0,
  },
});
