// components/nuevobebe.jsx
import React, { useState } from "react";
import { TextInput, Button, View, Text, Alert } from "react-native";
import { styled } from "nativewind";
import { ingresaBebe } from "../lib/api_app_mama";  // Importar el método

const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

export function NuevoBebe() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  // Manejar el envío del formulario
  const handleSubmit = async () => {
    try {
      const response = await ingresaBebe(nombre, apellido, fechaNacimiento);
      if (response.ok) {
        Alert.alert("Éxito", "Los datos del bebé se han ingresado correctamente.");
      } else {
        Alert.alert("Error", "Hubo un problema al ingresar los datos.");
      }
    } catch (error) {
      console.error("Error al ingresar bebé:", error);
      Alert.alert("Error", "No se pudo conectar con el servidor.");
    }
  };

  return (
    <View>
      <View className="mb-4">
        <Text className="mb-2">Nombre</Text>
        <StyledTextInput
          className="border p-2 rounded"
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      <View className="mb-4">
        <Text className="mb-2">Apellido</Text>
        <StyledTextInput
          className="border p-2 rounded"
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
      </View>

      <View className="mb-4">
        <Text className="mb-2">Fecha de Nacimiento</Text>
        <StyledTextInput
          className="border p-2 rounded"
          placeholder="Fecha de Nacimiento (YYYY-MM-DD)"
          value={fechaNacimiento}
          onChangeText={setFechaNacimiento}
        />
      </View>

      <StyledButton title="Ingresar Datos" onPress={handleSubmit} />
    </View>
  );
}
