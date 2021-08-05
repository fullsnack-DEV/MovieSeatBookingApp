import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importing Icons
import {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Foundation,
} from "@expo/vector-icons";

//importing Navigators
import HomeNavigator from "./HomeNavigator";
import FavNavigator from "./FavNavigator";
import ProfileNavigator from "./ProfileNavigator";
import TicketNavigator from "./TicketNavigator";
import { color } from "react-native-reanimated";
//Creating Tabs

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppNavigator({ route, navigation }) {
  return (
    <Navigator
      sceneContainerStyle={{ backgroundColor: "#000" }}
      tabBarOptions={{
        activeTintColor: "#42C0FB",
        showLabel: false,

        style: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          position: "absolute",
          marginHorizontal: 20,
          borderRadius: 10,
          height: 45,
          bottom: 2,
          alignSelf: "center",

          elevation: 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size * 1.1} color={color} />
          ),
        }}
      />
      <Screen
        name="Fav"
        component={FavNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="favorite-border"
              size={size * 1.1}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Ticket"
        component={TicketNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Foundation name="ticket" size={size * 1.1} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size * 1.1} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

//here we are creating a Nested Navigators.
//So Each Tab have its Own Navigator
