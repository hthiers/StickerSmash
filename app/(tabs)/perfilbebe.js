import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Screen } from "../../components/Screen";
import { DatosBebe } from "../../components/DatosBebe";
import { NuevoBebe } from "../../components/NuevoBebe";
import { getBebes } from "../../lib/api_app_mama";  // Asumiendo que esta función ya existe

export default function PerfilBebe() {
  const [bebeData, setBebeData] = useState(null);

  useEffect(() => {
    const fetchBebeData = async () => {
      try {
        const data = await getBebes();
        setBebeData(data.length > 0 ? data[0] : null);
      } catch (error) {
        console.error("Error al obtener datos del bebé:", error);
      }
    };
    fetchBebeData();
  }, []);

  return (
    <Screen>
      <ScrollView>
        {bebeData ? (
          <DatosBebe 
            nombre={bebeData.nombre}
            apellido={bebeData.apellido}
            fechaNacimiento={bebeData.fecha_nacimiento}
          />
        ) : (
          <NuevoBebe />
        )}
      </ScrollView>
    </Screen>
  );
}
