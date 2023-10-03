// Solicitar al usuario ingresar un número y almacenarlo en una variable
let numero = parseFloat(prompt("Por favor, ingresa un número:"));

// Verificar si el número es positivo, negativo o igual a cero
if (numero > 0) {
  console.log("El número ingresado es positivo.");
} else if (numero < 0) {
  console.log("El número ingresado es negativo.");
} else {
  console.log("El número ingresado es igual a cero.");
}
