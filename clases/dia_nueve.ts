/**
 * Arrays
 */

const lista: Array<number> = [89, 34, 10];

/**
 * agregar elementos al final
 * push(...n)
 * */

lista.push(67);
lista.push(23, 34, 45);

console.log(lista);

/**
 * agregar elementos al inicio de la lista
 * unshift(...n)
 * */

lista.unshift(987);
lista.unshift(563, 234, 143);

/**
 * agregar elementos (propagación)
 * [e, ...a, e]
 * */

const lista1: Array<number> = [23, 45, ...lista];
console.log(lista1);

/**
 * remover elementos
 * pop
 * Array LIFO (ultimo en entrar, primero en salir)
 * */

console.log(...lista1);
lista1.pop();
console.log(...lista1);
lista1.pop();
console.log(...lista1);
lista1.pop();
console.log(...lista1);
lista1.pop();
console.log(...lista1);

/**
 * remover elementos
 * shift
 * Array FIFO (primero en entrar, primero en salir)
 * */

console.log(...lista1);
lista1.shift();
console.log(...lista1);
lista1.shift();
console.log(...lista1);
lista1.shift();
console.log(...lista1);

/**
 * remover elementos especificos usando el indice [0...n]
 * splice
 * puede borrar desde [0...n] o [-1...-n]
 * -n ... 987 34 10 | 234 143 987 34 10
 * */

lista1.splice(3, 1);
console.log(...lista1);

/**
 * encuentra el indice de un elemento
 * indexOf
 * */

lista1.indexOf(10);
const paraBorrar: number = lista1.indexOf(34);
console.log(paraBorrar);
if (paraBorrar > -1) {
  lista1.splice(paraBorrar, 3);
  console.log(...lista1);
}

/**
 * reemplazar elementos especificos usando el indice [0...n]
 * splice
 * */

lista1.push(3, 1, 7, 9, 0);
console.log(...lista1);
lista1.splice(4, 1, lista1[4] * 10);
console.log(...lista1);

/**
 * extraer una seccion del arreglo.
 * slice
 * */

console.log(...lista1.slice(3, 6));

/**
 * retorna true si algun elemento cumple con la condicion
 * some
 * */
console.log(lista1.some(e => e > 200));

/**
 * retorna true si todos  los elementos cumplen con la condicion
 * every
 * */
console.log(lista1.every(e => e > -1));

/**
 * ordena una lista
 * sort
 * */
lista1.sort();
lista1.sort((a: number, b: number) => {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
console.log(...lista1);

/**
 * invierete una lista
 * reverse
 * */
lista1.reverse();
console.log(...lista1);

console.log(Array.from("234567"));
console.log(Array.of(1, 2, 3, 4));

console.log(Array.isArray(1));
console.log(Array.isArray([1]));
console.log(Array.isArray("we"));
console.log(Array.isArray({}));
