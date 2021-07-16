import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//Importing Navigator
import AppNavigator from "./App/Navigation/AppNavigator";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold_Italic,
  Nunito_600SemiBold,
  Nunito_800ExtraBold_Italic,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {
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
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
