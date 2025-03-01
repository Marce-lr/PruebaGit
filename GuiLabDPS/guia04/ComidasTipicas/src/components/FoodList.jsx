import React from "react";
import { FlatList } from "react-native";
import { FoodCard } from "./FoodCard";
import { data } from "../data";

export const FoodList = () => {
  return (
    <FlatList
      data={data.slice(0, 4)}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <FoodCard food={item} />}
    />
  );
};
