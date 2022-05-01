import React from "react";
import { ThemeProvider } from "styled-components/native";
import  theme  from "./src/styles/theme";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Routes } from "./src/routes";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { FloatBag } from "./src/components/FloatBag";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar translucent style="dark" backgroundColor="" />
      <ThemeProvider theme={theme}>
        <Routes />
        <FloatBag />
      </ThemeProvider>
    </NavigationContainer>
  );
}
