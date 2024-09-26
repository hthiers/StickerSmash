export async function ingresaBebe(nombre, apellido, fecha_nacimiento) {
  const url = "http://10.0.2.2:8000/bebes/";

  const bodyData = {
    nombre: nombre,
    apellido: apellido,
    fecha_nacimiento: fecha_nacimiento
  };

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(bodyData)
    });

    if (!response.ok) {
      throw new Error("Error al ingresar los datos del bebé");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
