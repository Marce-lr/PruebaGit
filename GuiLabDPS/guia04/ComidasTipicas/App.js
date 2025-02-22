import React from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import { Header } from "./src/components/Header";
import { FoodList } from "./src/components/FoodList";
import { data } from "./src/data";

export default function App() {
  const [foods, setFoods] = React.useState(data);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.listContainer}>
          <FoodList foods={foods} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
