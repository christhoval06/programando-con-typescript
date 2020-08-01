/**
 * Contar la cantidad de letras en una oracion.
 * Ejemplo:
 * input  = "Contar la cantidad de letras en una oracion."
 * output = {c: 3, o: 3, n: 4, t: 2, a: 7, r: 3 ....}
 *
 *
 */
import { performanceChecker } from "../src/utils/performance";

interface LetterAccumulator {
  [key: string]: number;
}

function _letterCounter(phrase: string): LetterAccumulator {
  phrase = phrase.toLowerCase();

  let accumulator: LetterAccumulator = {};

  for (let counter = 0; counter < phrase.length; counter++) {
    const char: string = phrase[counter];
    // accumulator[char] = (accumulator[char] || 0) + 1; // Pro
    let value: number = accumulator[char]; // Rocky
    if (value) {
      value += 1;
    } else {
      value = 1;
    }
    accumulator[char] = value;
  }

  return accumulator;
}

console.log(
  _letterCounter("Contar la cantidad de letras en una oracion. hola mamá")
);

/**
 * https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci
 * Escribir un algoritmo para la serie de Fibonacci
 * Ejemplo: 0,1,1,2,3,5,8,13,21,34,55,89,144....
 */

function Fibonacci(length: number = 10): string {
  let accumulator: Array<number> = [];
  let prev: number = 0;
  let current: number = 1;
  accumulator.push(prev);
  accumulator.push(current);

  for (let i = 2; i < length; i++) {
    const temp: number = prev + current;
    prev = current;
    current = temp;
    accumulator.push(current);
  }

  return accumulator.join(",");
}

console.log(performanceChecker(Fibonacci)(20));

function FibonacciRecursive(position: number): number {
  if (position <= 1) {
    return position;
  }

  return FibonacciRecursive(position - 1) + FibonacciRecursive(position - 2);
}

function FibonacciRecursiveCall(length: number = 10): string {
  let accumulator: Array<number> = [];
  for (let i = 0; i < Array.from(Array(length).keys()).length; i++) {
    accumulator.push(FibonacciRecursive(i));
  }

  return accumulator.join(",");
}

console.log(FibonacciRecursive(6));
console.log(performanceChecker(FibonacciRecursiveCall)(20));
