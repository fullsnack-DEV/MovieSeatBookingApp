import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//Importing Navigator
import AppNavigator from "./App/Navigation/AppNavigator";
//Redux provider
import { Provider } from "react-redux";
import Store from "./App/Redux/store";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_800ExtraBold_Italic,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App({ route, navigation }) {
  //Tab bar Rendering on Specofic Screens

  let [fontsloaded, error] = useFonts({
    Nunito_R: Nunito_400Regular,
    Nunito_B: Nunito_700Bold,
    Nunito_I: Nunito_800ExtraBold_Italic,
    Nunito_EB: Nunito_800ExtraBold,
  });

  if (!fontsloaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
