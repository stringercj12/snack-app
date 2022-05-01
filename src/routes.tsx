import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Cart: undefined;
};
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
