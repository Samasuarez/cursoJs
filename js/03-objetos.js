//objetos literas
const persona = {
    nombre: "Tony",
    apellido: "Herrera",
    edad: 45,
    direccion: {
      ciudad: "new york",
      zip: 837483784,
      lat: 1273839,
      lng: 837339,
    },
  };
  
  // console.log({
  //     persona
  // });
  const persona2 = { ...persona };
  persona2.nombre = 'peter'