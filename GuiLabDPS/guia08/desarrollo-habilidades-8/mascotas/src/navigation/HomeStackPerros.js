import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenPerros from "../screens/HomeScreenPerros";

const Stack = createStackNavigator();

export default function HomeStackPerros() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homePerros"
        component={HomeScreenPerros}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
