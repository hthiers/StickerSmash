import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";
import { getEventos } from "../lib/calendario";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedVacunaItem } from "./VacunaItem";
import { Screen } from "./Screen";

export function Eventos() {
  const [items, setEventos] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getEventos().then((events) => {
      // Agrupar eventos por mes y año
      const groupedItems = groupByMonthAndYear(events);
      setEventos(createFlatListData(groupedItems));
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  // Función para agrupar los eventos por mes y año
  const groupByMonthAndYear = (events) => {
    const grouped = {};

    events.forEach((item) => {
      const fecha = new Date(item.fecha_evento);
      const year = fecha.getFullYear();
      const month = fecha.getMonth(); // Mes en número (0 = Enero)
      const monthYear = `${month + 1}-${year}`; // Formato "mes-año"

      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }

      grouped[monthYear].push(item);
    });

    return grouped;
  };

  // Crear una lista plana a partir del objeto agrupado
  const createFlatListData = (groupedItems) => {
    const flatListData = [];

    Object.keys(groupedItems).forEach((group) => {
      const [month, year] = group.split("-");
      flatListData.push({
        title: `${getMonthName(month)} ${year}`, // Mes y año como título
        data: groupedItems[group],
      });
    });

    return flatListData;
  };

  // Obtener el nombre del mes
  const getMonthName = (month) => {
    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return monthNames[month - 1];
  };

  return (
    <Screen>
      {items.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <>
              {/* Título del mes y año */}
              <Text className="text-center" style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
                {item.title}
              </Text>
              {/* Renderizar los eventos solo si data existe */}
              {item.data && item.data.map((event, index) => (
                <AnimatedVacunaItem key={event.id} item={event} index={index} />
              ))}
            </>
          )}
        />
      )}
    </Screen>
  );
}
