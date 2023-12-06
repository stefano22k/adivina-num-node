const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  
  const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado === numeroSecreto) {
      console.log("¡Felicitaciones! ¡Adivinaste el num secreto!");
    } else if (numeroAdivinado > numeroSecreto) {
      console.log("El num secreto es menor. ¡Sigue intentando!");
    } else {
      console.log("El num secreto es mayor. ¡Sigue intentando!");
    }
  };
  
  module.exports = { 
    generarNumeroAleatorio, 
    verificarAdivinanza 
  };
