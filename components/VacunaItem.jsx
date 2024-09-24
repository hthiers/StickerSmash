import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated, Pressable } from "react-native";
import { styled } from "nativewind";
import { VaccIcon, HospIcon } from "../components/Icons";

const StyledPressable = styled(Pressable);

export function VacunaItem({ item }) {
  // Convertir la fecha de evento en un objeto Date y obtener el día
  const fechaEvento = new Date(item.fecha_evento);
  const dia = fechaEvento.getDate(); // Obtener solo el día del mes
  const nombreMeses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const mes = nombreMeses[fechaEvento.getMonth()]; // Obtener el nombre del mes

  return (
    <StyledPressable className="mb-3 rounded-xl p-1 bg-verde-fuerte">

      <View className="flex-row gap-4" key={item.id}>
        <View className="justify-center">
          <HospIcon size={42} color={"#fff"} />
        </View>

        <View className="flex-1">
          <Text className="text-gray-400 text-sm font-medium mb-0">
            {dia} {mes} {/* Mostrar el día y el mes juntos */}
          </Text>
          <Text className="mb-0 text-lg font-bold">
            {item.nombre}
          </Text>
          <Text className="text-sm font-light">
            {item.descripcion || "Descripción no disponible"} {/* Mostrar la descripción o un mensaje predeterminado */}
          </Text>
        </View>
      </View>
    </StyledPressable>
  );
}

export function AnimatedVacunaItem({ item, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <VacunaItem item={item} />
    </Animated.View>
  );
}
