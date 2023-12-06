const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");

const obtenerNumeroUsuario = () => {
  const input = readlineSync.question("Ingresa un num: ");
  return parseInt(input, 10); // Convierte la entrada a un número entero
};

const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();
  let numeroAdivinado = 0;
  console.log("¡Bienvenido a Adivina el num secreto!");
  console.log("Intenta adivinar el num del 1 al 100.\n");
  while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumeroUsuario();
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
  }
};

juegoAdivinanza();
