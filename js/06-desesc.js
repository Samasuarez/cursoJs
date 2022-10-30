//desestructuracion
//asignacion desestructurante

const persona = {
    nombre: "tony",
    edad: "45",
    clave: "ironman",
  };
  const { nombre } = persona;
  // console.log(persona)
  const useContext = ({ clave, nombre, edad, rango }) => {
    console.log(nombre, edad, (rango = "capitan"));
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.456,
        lng: -12.345,
      },
    };
  };
  const{ nombreClave, anios,latlng:{lat, lng}} = useContext (persona);
  
  console.log(nombreClave, anios);
  console.log(lat, lng)