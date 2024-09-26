import { Text, View } from "react-native";

export function DatosBebe({ nombre, apellido, fechaNacimiento }) {
  return (
    <View>
      <Text className="font-bold text-xl">Datos del Bebé</Text>
      <Text>Nombre: {nombre}</Text>
      <Text>Apellido: {apellido}</Text>
      <Text>Fecha de Nacimiento: {fechaNacimiento}</Text>
    </View>
  );
}
