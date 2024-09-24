export async function getEventos() {
  const EVENTS = "http://miapi.nodoelparque.in/eventos";

  const rawData = await fetch(EVENTS);
  const json = await rawData.json();

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


