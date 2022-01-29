const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

//TODO: Revisar porque el output muestra los números 85,39,25 y 77. 
//Solo se deben mostrar los siguientes números primos: 3,71,67,17,29,19,13,23.

console.log("Ejercicio 1, los siguientes son números primos:");
for (let index = 0; index < ejercicio1.length; index++) {

  if (ejercicio1[index] % 2 != 0) {
    console.log(ejercicio1[index]);
  }
}


const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

console.log("Ejercicio 2, invitados a la fiesta de ramón:");
for (let i = 0; i < ejercicio2.length; i++) {

  if (ejercicio2[i].edad >= 18 && ejercicio2[i].esFamiliar == true) {
    console.log(ejercicio2[i].nombre);
  }
}

console.log("Ejercicio 3, Sucesión de Fibonacci:");
//TODO: Imprimir el primer 1
  let a = 0;
  let b = 1;
  let c;
  let s = 1;

for (let i = 1; i <= 50; i++) {
  c = a + b;
  console.log("Número " + i + " = " + c);
  s = s + c;
  a = b;
  b = c;

  }
