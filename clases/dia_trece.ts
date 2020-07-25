/**
 * Data Transformations
 *
 * Array.forEach **
 *
 * Array.map
 * Array.reduce
 *
 * */

const escuelas: Array<string> = [
  "Elena Ch. Pinate",
  "Moscote",
  "Richard N.",
  "Maria"
];

console.log(escuelas);

/**
 * Array.map
 */

interface Escuela {
  name: string;
  address: string;
  students: number;
}

const addresses: Array<string> = ["Juan Diaz", "Panamá"];

// function convertidor(name: string, index: number): Escuela {
//   return {
//     name,
//     address: addresses[index % 2],
//     students: Math.ceil(99 * (index + 1) * ((index + 1) / 2))
//   };
// }

const convertidor = (name: string, index: number): Escuela => ({
  name,
  address: addresses[index % 2],
  students: Math.ceil(99 * (index + 1) * ((index + 1) / 2))
});

console.log(escuelas.map(convertidor));
console.log(escuelas);

const base: Array<number> = Array.from(Array(12).keys());

console.table(base);

// const generateMultiply = (base: number, list: Array<number>): Array<number> =>
//   list.map((value: number) => value * base);
// console.log(
//   base.map((_, index: number) => {
//     return index * 12;
//   })
// );

type FuncArray<E> = (list?: Array<E | number>) => Array<E | number>;

const generateMultiply = (multiply: number): FuncArray<number> => (
  list: Array<number> = Array.from(Array(12).keys()) //valor por defecto si no recibe la lista
): Array<number> => list.map((value: number) => value * multiply);

console.log(
  base.map((_, index: number) => {
    return index * 12;
  })
);

console.log(generateMultiply(9)());
console.log(generateMultiply(9)([10, 11, 12, 13, 14, 15]));

/**
 * High order functions
 */

/**
 * Devuelve una funcion que nos saluda.
 * @param mensaje
 */
function Saludo(mensaje: string = "Welcome"): Function {
  return function(name: string): string {
    return `${mensaje} ${name}!!`;
  };
}

console.log(Saludo("Buenas Noches")());

/**
 * Validate performance
 */

type AnyFunc = (...args: Array<any>) => any;
type ReturnFunc<E extends AnyFunc> = (...args: Parameters<E>) => ReturnType<E>;

function performanceChecker<E extends AnyFunc>(func: E): ReturnFunc<E> {
  const funcName: string = func.name;
  return function(...args: Parameters<E>): ReturnType<E> {
    console.time(funcName);
    const results = func(...args);
    console.timeEnd(funcName);
    return results;
  };
}

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarPlusPerformanceChecker = performanceChecker(sumar);

console.log(sumarPlusPerformanceChecker(3, 6));

function base2Multiply(multiply: number, list?: Array<number>): Array<number> {
  list = list || Array.from(Array(12).keys());
  return list.map((value: number) => value * multiply);
}

const base2MultiplyPlusPerformanceChecker = performanceChecker(base2Multiply);

const generateMultiplyPlusPerformanceChecker = performanceChecker(
  generateMultiply
);

console.log(base2MultiplyPlusPerformanceChecker(9));
console.log(generateMultiplyPlusPerformanceChecker(9)());
console.log(
  generateMultiplyPlusPerformanceChecker(9)([10, 11, 12, 13, 14, 15])
);
