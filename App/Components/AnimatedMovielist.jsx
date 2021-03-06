import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";

import { Categories } from "../Data/Categories";
//Component Import
import HeadingCom from "./HeadingCom";
import Animatedmovielist from "./AnimatedmovielCom";
import CateogryList from "./CateogryList";

const { width, height } = Dimensions.get("screen");

//Custom Hooks
import useApi from "../Hooks/useApi";
import AnimatedLoader from "./AnimatedLoader";

//Width and Sizes
const ITEM_SIZE = width * 0.65;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

//MainFuntion

export default function AnimatedMovieList({ endpoint, title, navigation }) {
  //Ref for Sliding the Flatlist
  const flatList = useRef();

  //Animations
  const Xsscroll = useRef(new Animated.Value(0)).current;

  // API Hooks
  const { data: Movies, Loading, Error } = useApi(endpoint);

  //State for Movies
  const [newData, SetnewData] = useState([...Movies]);

  useEffect(() => {
    SetnewData([{ key: "left-s" }, ...Movies, { key: "right-s" }]);
  }, [Movies]);

  //Ref

  //State for Cateogries
  const [Selected, SetSelected] = useState();

  //Setting Cateogries
  const getcat = (cateogry) => {
    const newcat = Movies.filter((m) => m.genre_ids.includes(cateogry.genres));

    SetnewData([{ key: "left-s" }, ...newcat, { key: "right-s" }]);

    SetSelected(cateogry);
  };

  const flatref = () => {
    flatList.current.scrollToIndex({ index: 0 });
  };

  //MainReturn
  return (
    <View style={styles.listcontainer}>
      <HeadingCom title={title} />
      <View style={styles.cateogries}>
        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{ marginLeft: 25 }}
          snapToAlignment="start"
          ListFooterComponent={<View style={{ width: 30 }} />}
          renderItem={({ item }) => {
            return (
              <CateogryList
                onPress={() => getcat(item)}
                icon={item.icon}
                title={item.name}
                stylebg={{
                  backgroundColor:
                    Selected?.id == item.id ? "#DFEEEA" : "#3E424E",
                  color: Selected?.id == item.id ? "#000" : "#fff",
                }}
              />
            );
          }}
        />
      </View>

      {Loading ? (
        <AnimatedLoader />
      ) : (
        <View style={styles.movielist}>
          <Animated.FlatList
            style={styles.flatlist}
            ref={flatList}
            initialNumToRender={10}
            windowSize={50}
            maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={30}
            onEndReachedThreshold={0.1}
            keyExtractor={(_, index) => index.toString()}
            extraData={Selected}
            data={newData}
            onContentSizeChange={() => flatref()}
            snapToInterval={ITEM_SIZE}
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            removeClippedSubviews={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: Xsscroll } } }],
              { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
              if (!item.poster_path) {
                return <View style={{ width: SPACER_ITEM_SIZE }} />;
              }

              const inputRange = [
                (index - 2) * ITEM_SIZE,
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
              ];
              const outputRange = ["8deg", "0deg", "-8deg"];
              const translateX = Xsscroll.interpolate({
                inputRange,
                outputRange,
              });

              return (
                <Animatedmovielist
                  item={item}
                  translateX={translateX}
                  index={index}
                  Loading={Loading}
                  onPress={() =>
                    navigation.navigate("Detail", {
                      item,
                    })
                  }
                />
              );
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listcontainer: {
    flex: 0.84,

    marginTop: "3%",
  },
  cateogries: {
    marginVertical: 20,

    marginTop: "2%",
  },
  movielist: {
    flex: 1.2,
  },
  flatList: {
    flexGrow: 0,
  },
});
