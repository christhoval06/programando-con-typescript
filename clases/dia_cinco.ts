/**
 * Ejemplo #1
 * Imprimir los numeros del 1 al 100 usando un ciclo while.
 */

const HASTA: number = 100;
// // creando un variable
let contador: number = 1;

// // crear el  ciclo while

while (contador <= HASTA) {
  // console.log(contador);
  contador++;
}

for (contador = 1; contador <= HASTA; contador++) {
  // console.log(contador);
}

contador = 1;

do {
  // console.log(contador);
  contador++;
} while (contador <= HASTA);

/**
 * Ejemplo #2
 * Programar el patron.
 * Entrada = [2, 3, 4]
 * Salida = [4, 9, 16]
 */
const entrada: Array<number> = [2, 3, 4, 9];
const salida: Array<number> = [];

for (let j = 0; j < entrada.length; j++) {
  salida.push(entrada[j] * entrada[j]);
}

console.table(salida);

/**
 * Ejemplo #3
 * Programar el patron.
 * Entrada = [[3, 8], [3, 1], [0, 99]]
 * Salida = [8, 3, 99]
 */

const entrada: Array<Array<number>> = [[3, 8], [3, 1], [0, 99]];
const salida: Array<number> = [];

for (let j = 0; j < entrada.length; j++) {
  const lista: Array<number> = entrada[j];
  let max: number = lista[0];
  for (let i = 0; i <= lista.length; i++) {
    if (lista[i] > max) {
      max = lista[i];
    }
  }
  salida.push(max);
}
console.table(salida);

/**
 * Ejemplo #4
 * Programar el patron.
 * Entrada = [5, 7, 2]
 * Salida = [1, 1, 0]
 */

const entrada: Array<number> = [5, 7, 2];
const salida: Array<number> = [];
for (let i = 0; i < entrada.length; i++) {
  const numero: number = entrada[i];
  const residuo: number = numero - Math.floor(numero / 2) * 2;
  salida.push(residuo);
}
console.table(salida);

// /**
//  * Ejemplo #5
//  * Programar el patron.
//  * Entrada = ['cat', 'kayak', 'bob']
//  * Salida = [false, true, true]
//  */

const entrada: Array<string> = [
  "cat",
  "kayak",
  "bob",
  "romaamor",
  "zorraarroz",
  "amadaladama",
  "papa"
];
const salida: Array<boolean> = [];

const reversa: Array<string> = [];
for (let i = 0; i < entrada.length; i++) {
  const palabra: string = entrada[i];
  let rpalabra: string = "";
  for (let c = palabra.length - 1; c >= 0; c--) {
    rpalabra += palabra[c];
  }
  reversa.push(rpalabra);
}

console.table(reversa);

for (let i = 0; i < entrada.length; i++) {
  const palabra: string = entrada[i];
  const rpalabra: string = reversa[i];
  salida.push(palabra === rpalabra);
}

console.table(salida);

/**
 * Ejemplo #6
 * Programar el patron.
 * Entrada = 'papa'
 * Salida = {p: 2, a: 2}
 */
interface Counter {
  [key: string]: number;
}
const entrada: string = "papa";
const salida: Counter = {};

for (let i = 0; i < entrada.length; i++) {
  const letra: string = entrada[i];
  if (salida[letra]) {
    salida[letra] += 1;
  } else {
    salida[letra] = 1;
  }
  salida[letra] = salida[letra] ? salida[letra] + 1 : 1;
}
console.log(salida);

//
