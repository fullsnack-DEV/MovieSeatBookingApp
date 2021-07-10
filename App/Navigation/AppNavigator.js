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

export default function AppNavigator() {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: "#1DA1F2",
        showLabel: false,

        style: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 0,
          height: 50,
          paddingBottom: 10,
          elevation: 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={size * 1.2} color={color} />
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
              size={size * 1.2}
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
            <Foundation name="ticket" size={size * 1.2} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size * 1.2} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

//here we are creating a Nested Navigators.
//So Each Tab have its Own Navigator
