/**
 * Arrays
 */

const lista: Array<number> = [89, 34, 10];

console.log("primero", lista[0]);
console.log("segundo", lista[1]);
console.log("tercero", lista[2]);

console.log("cuarto", lista[4]);

// Sumar todos los elementos.

function sumador(acumulador: number, numero: number): number {
  return acumulador + numero;
}
const sumadorCorto = (acumulador: number, numero: number): number =>
  acumulador + numero;

const suma: number = lista.reduce(sumadorCorto, 0);

console.log("suma", suma);

function multiplicar(a: number): number {
  return a * 10;
}

function sumar(a: number = 3, callback: Function): number {
  return a + callback(a);
}

console.log("sumar", sumar(3, multiplicar));
