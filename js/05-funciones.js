//funciones
// const saludar = function (nombre) {
//   return `hola, ${nombre}`;
// };
// console.log(saludar)
const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
  };
  const saludar3 = (nombre) => `hola, ${nombre}`;
  const saludar4 = () => `hola mundo`;
  
  console.log(saludar2("vegueta"));
  console.log(saludar3("goku"));
  console.log(saludar4());
  
  const getUser = () => ({
    uid: "ABCD1234",
    username: "elKakas123",
  });
  
  console.log(getUser());
  //1- Tranformar a una funcion de flecha.
  //2- Tiene que retornanr un objeto implicito
  //3- Pruebas
  const getUserActivo = (nombre) => ({
    uid: 72653728,
    username: nombre,
  });
  const usuarioActivo = getUserActivo("fernando");
  console.log(usuarioActivo);
  