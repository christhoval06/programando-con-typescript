// dia 3

// Secuencias de Control

// Secuencia If

/*
 * Realizar la validación de la edad.
 * Imprimir si es menor de edad.
 **/

let edad: string | null;

edad = prompt("Cual es tu edad?");

// Concatenación
// alert('Tu edad es ' + edad)
// alert(`Tu edad es ${edad}`);

// console.log(typeof edad);

if (Number(edad) < 18) {
  console.log("Eres menor de edad.");
}

// Secuencia if - else

/*
 * Realizar la validación de la edad.
 * Imprimir si es menor de edad.
 * Imprimir si es mayor de edad.
 **/

if (Number(edad) < 18) {
  console.log("Eres menor de edad.");
} else {
  console.log("Eres mayor de edad.");
}

// Secuencia if - if else - else

/*
 * Realizar la validación de la edad para asignar categoria.
 * si el usuario tiene de 0 - 3 años es un bebé
 * si el usuario tiene de 3 - 12 años es un niño
 * si el usuario tiene de 12 - 17 años es un Adolecente
 * si el usuario tiene de 17 - 26 años es un Joven
 * si el usuario tiene de 26 - 60 años es un Adulto
 * si el usuario tiene de 60+ años es un Adulto mayor
 **/

// edad = 30

if (Number(edad) <= 3) {
  console.log("Eres un bebé.");
} else if (Number(edad) <= 12) {
  console.log("Eres un niño.");
} else if (Number(edad) <= 17) {
  console.log("Eres un Adolecente.");
} else if (Number(edad) <= 26) {
  console.log("Eres un Joven.");
} else if (Number(edad) <= 60) {
  console.log("Eres un Adulto.");
} else {
  console.log("Eres un Adulto mayor.");
}

// Secuencia If con cadenas

// Validar las credenciales de un usuario
let usuario: string | null;
let clave: string | null;

usuario = prompt("Nombre de usuario");
clave = prompt("Clave del usuario");

if (usuario === "chris" && clave === "1234") {
  console.log("Bienvenido");
} else {
  console.log("Datos incorrectos.");
}

// Operador ternario
// [condicion] ? [valor cierto] : [valor falso];

const condicion: boolean = usuario === "chris" && clave === "1234";

const mensajeCierto: string = "Bienvenido";
const mensajeFalso: string = "Datos incorrectos.";
const mensaje: string = condicion ? mensajeCierto : mensajeFalso;

console.log(mensaje);

/*
 * Ejemplo Clase 1
 *
 * Calcular el a valor en letras de una calificación universitaria.
 * sabiendo que:
 * A (91 - 100)
 * B (81 - 90)
 * C (71 - 80)
 * D (61 - 70)
 * F (<60)
 * Si el usuario coloca 84 el sistema de debe decir: tu  nota es B
 */

enum Calificacion {
  a = "A",
  b = "B",
  c = "C",
  d = "D",
  f = "F"
}
let nota: string | null;
let calificacion: Calificacion;
nota = prompt("Que puntaje sacaste (0-100)?");

if (Number(nota) >= 91) {
  calificacion = Calificacion.a;
} else if (Number(nota) >= 81) {
  calificacion = Calificacion.b;
} else if (Number(nota) >= 71) {
  calificacion = Calificacion.c;
} else if (Number(nota) >= 61) {
  calificacion = Calificacion.d;
} else {
  calificacion = Calificacion.f;
}

console.log(`tu  nota es ${calificacion}`);

/*
 * Ejemplo Clase 2
 * Convertir el valor de peso de una persona recibiendo como entra el peso y la unidad.
 * sabiendo que 1 kg = 2.2 lbs
 * Si el usuario coloca en el peso 105 y en la unidad kg, entonces el programa me debe decir:
 * tu peso en libras es de 230.
 *
 */

type Unidad = "kg" | "lb" | null;
let peso: string | null;
let unidad: Unidad;
let conversion: number;

peso = prompt("Cual es tu peso?") || "0";
unidad = prompt("Cual es tu peso?") as Unidad;

if (unidad == "kg") {
  conversion = Number(peso) * 2.2;
} else {
  conversion = Number(peso) / 2.2;
}

console.log(
  `tu peso en ${unidad == "kg" ? "libras" : "kilogramos"} es de ${conversion}`
);

// Ciclos o Loops
// for, do while, while

// Ciclo For
// Popular un listado de frutas.

const LIMITE: number = 5;
const frutas: Array<string> = [];

// como definir un for
// j++ ~= j +=1 ~= j = j+1

for (let j: number = 0; j < LIMITE; j++) {
  const fruta: string | null = prompt("Nombre de la fruta.");
  // fruta != '' && fruta != null && fruta != undefined
  if (fruta) {
    frutas.push(fruta as string);
  }
}

console.table(frutas);

/*
 * Ciclo for anidado
 * Almacenar el nombre, la cedula y la edad de los clientes de un juego en linea.
 */

interface Jugador {
  nombre: string;
  cedula: string;
  edad: number;
}

// const LIMITE: number = 3;
const jugadores: Array<Jugador> = [];

for (let i: number = 0; i < LIMITE; i++) {
  const nombre: string = prompt("Nombre") || "Sin Nombre";
  const cedula: string = prompt("Cedula") || "Sin Cedula";
  const edad: number = Number(prompt("Edad") || "0");

  const jugador: Jugador = { nombre, cedula, edad };
  jugadores.push(jugador);
}

console.table(jugadores);
