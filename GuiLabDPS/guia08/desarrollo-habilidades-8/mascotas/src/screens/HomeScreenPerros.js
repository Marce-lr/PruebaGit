import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreenPerros(props) {
  const { navigation } = props;
  return (
    <View>
      <Text>Estamos en la sección de Perros</Text>

      <Button
        title="Ir a Gatos"
        onPress={() => navigation.navigate("homeGatos")}
      />
    </View>
  );
}
