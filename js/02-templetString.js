//template - String
const nombre = "fernando";
const apellido = "herrera";
const nombreCompletro = `
 ${nombre}
 ${apellido}
 `;
console.log(nombreCompletro);
const getSaludo = function () {
  return "hola mundo" + nombre;
};
console.log(`este es un texto: ${getSaludo()}`);