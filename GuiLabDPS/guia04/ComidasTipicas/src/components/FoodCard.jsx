import React from "react";
import { Card } from "react-native-elements";
import { Text, Image, StyleSheet, View } from "react-native";

export const FoodCard = ({ food }) => {
  return (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.title}>{food.title}</Card.Title>
      <Card.Divider />
      <View style={styles.content}>
        <Image source={{ uri: food.urlImage }} style={styles.image} />
        <Text style={styles.text}>Calorías: {food.calories}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
});
