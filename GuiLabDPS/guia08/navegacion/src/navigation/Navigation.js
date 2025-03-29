import React from "react";
import HomeStack from "../navigation/HomeStack";
import AboutStack from "../navigation/AboutStack";
import ContactStack from "../navigation/ContactStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="about"
        component={AboutStack}
        options={{ title: "About" }}
      />
      <Tab.Screen
        name="contact"
        component={ContactStack}
        options={{ title: "Contact" }}
      />
    </Tab.Navigator>
  );
}
