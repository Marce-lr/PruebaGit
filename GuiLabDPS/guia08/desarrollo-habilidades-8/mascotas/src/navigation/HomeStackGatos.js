import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenGatos from "../screens/HomeScreenGatos";

const Stack = createStackNavigator();

export default function HomeStackGatos() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeGatos"
        component={HomeScreenGatos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
