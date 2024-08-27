
// ALGORITMO CON CONDICIONAL
let numero = parseFloat(prompt("Introduce tu edad:"));

if (numero >= 18) {
    console.log("Puedes ingresar a este sitio.");
} else if (numero < 18) {
    console.log("No puedes ingresar a este sitio.");
} else {
    console.log("El numero es incorrecto.");
}


// ALGORITMO CON CICLO

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i;
}

console.log("La suma de los números del 1 al 100 es: " + suma);

//  SIMULADOR INTERACTIVO

let nombreSimpson = prompt("Cual es el nombre del protagonista principal de la serie Simpsons")

switch (nombreSimpson) {
    case "Bart":
      console.log("El nombre no es Bart");
      break;
    case "Marge":
      console.log("El nombre no es Marge");
      break;
    case "Homero":
      console.log("El nombre es correcto");
      break;
    default:
      console.log("El nombre no es correcto");
      break;
  }