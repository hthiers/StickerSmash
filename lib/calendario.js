export async function getEventos() {
  const EVENTS = "http://10.0.2.2:8000/eventos/";

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

  try {
    const response = await fetch(EVENTS, { 
      method: "GET",
      headers: myHeaders 
    });

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error("Error en la respuesta");
    }

    const json = await response.json();

    // Mapeo de los datos y ordenarlos por fecha_evento
    return json
      .map((item) => {
        const { id, nombre, descripcion, meses, dosis, fecha_evento } = item;

        return {
          id,
          nombre,
          descripcion,
          meses,
          dosis,
          fecha_evento
        };
      })
      .sort((a, b) => new Date(a.fecha_evento) - new Date(b.fecha_evento)); // Ordenar por fecha
  } catch (error) {
    console.error("Error en la obtención de eventos:", error);
    return []; // Retornar un arreglo vacío o un objeto de error según tu lógica
  }
}



export async function getTestProducts() {
  const PRODUCTS = "https://dummyjson.com/products";

  const rawData = await fetch(PRODUCTS);
  const json = await rawData.json();

  const { products } = json;

  return products.map((item) => {
    const { id, title, price } = item;
    
    return {
      id,
      title,
      price
    };
  });
}

export async function dummyTest() {
  const DUMMYTEST = '//dummyjson.com/test';

  const rawData = await fetch(DUMMYTEST);
  const json = await rawData.json();

  const {
    data: { items },
  } = json;

  return items.map((item) => {
    const { status, method } = item;
    
    return {
      status,
      method
    };
  });
}


