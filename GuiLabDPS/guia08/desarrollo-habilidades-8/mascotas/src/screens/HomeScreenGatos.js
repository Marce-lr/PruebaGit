import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreenGatos(props) {
  const { navigation } = props;
  return (
    <View>
      <Text>Estamos en la sección de Gatos</Text>

      <Button
        title="Ir a Perros"
        onPress={() => navigation.navigate("homePerros")}
      />
    </View>
  );
}
