import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

function Vista1() {
  return (
    <View>
      <Image
        style={{ height: 200, width: 200 }}
        source={require("./assets/splash.png")}
      />

      <Image
        style={{ height: 200, width: 200 }}
        source={{
          uri: "https://drive.google.com/uc?export=view&id=136hBemaBg3HcyvXh0XcsVXujbsGhJ2JC",
        }}
      />

      <Button
        title="CLick Aqui"
        color="red"
        onPress={() => Alert.alert("HOla desde el Boton")}
      />

      <TouchableOpacity
        style={estilos.boton}
        onPress={() => console.log("HOla desde otro Boton")}
      >
        <Text style={estilos.Letra}> Boton </Text>
      </TouchableOpacity>

      <Text style={estilos.Letra}> Hola desde vista 1 </Text>
      <Image
        style={estilos.TamanoImg}
        source={require("./assets/splash.png")}
      />

      <Text>Hola desde vista 1</Text>
    </View>
  );
}

let estilos = StyleSheet.create({
  TamanoImg: {
    height: 200,
    width: 200,
  },
  Letra: {
    fontSize: 30,
    color: "Black",
    fontWeight: "bold",
  },
  boton: {
    height: 30,
    backgroundColor: "red",
    color: "black",
    border: "1px solid black",
    marginTop: 10,
  },
});

export default Vista1;
