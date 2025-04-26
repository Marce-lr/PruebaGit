import React from "react";
import HomeStackPerros from "../navigation/HomeStackPerros";
import HomeStackGatos from "../navigation/HomeStackGatos";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homePerros"
        component={HomeStackPerros}
        options={{ title: "Perros" }}
      />
      <Tab.Screen
        name="homeGatos"
        component={HomeStackGatos}
        options={{ title: "Gatos" }}
      />
    </Tab.Navigator>
  );
}
