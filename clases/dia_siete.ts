/**
 * Bubble Sort
 *
 * First Pass:
 * ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
 * ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
 * ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
 * ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
 *
 * Second Pass:
 * ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
 * ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
 * ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 * ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
 * Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.
 *
 * Third Pass:
 * ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 * ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 * ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 * ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
 */

const lista: Array<number> = [90, 5, 1, 4, 2, 8];

console.log("before", lista);

for (let i = 0; i < lista.length; i++) {
  let intercambiar: boolean = false;
  for (let j = 0; j < lista.length - i - 1; j++) {
    if (lista[j] > lista[j + 1]) {
      const temp: number = lista[j];
      lista[j] = lista[j + 1];
      lista[j + 1] = temp;
      intercambiar = true;
    }
    console.log("inside", lista);
  }
  if (!intercambiar) {
    break;
  }
  console.log("outside", lista);
}

console.log("after", lista);

/**
 * Selection Sort
 * 
 * arr[] = 64 25 12 22 11

 * Find the minimum element in arr[0...4]
 * and place it at beginning
 * 11 25 12 22 64
 * 
 * Find the minimum element in arr[1...4]
 * and place it at beginning of arr[1...4]
 * 11 12 25 22 64
 * 
 * Find the minimum element in arr[2...4]
 * and place it at beginning of arr[2...4]
 * 11 12 22 25 64
 * 
 * Find the minimum element in arr[3...4]
 * and place it at beginning of arr[3...4]
 * 11 12 22 25 64 
 * 
 */

console.time("selection");

for (let i = 0; i < lista.length; i++) {
  let menorIndice: number = i;
  for (let j = i + 1; j < lista.length; j++) {
    if (lista[j] < lista[menorIndice]) {
      menorIndice = j;
    }
  }
  const temp: number = lista[menorIndice];
  lista[menorIndice] = lista[i];
  lista[i] = temp;
}

console.log("after", lista);
console.timeEnd("selection");

console.time("bubble");

for (let i = 0; i < lista.length; i++) {
  let intercambiar: boolean = false;
  for (let j = 0; j < lista.length - i - 1; j++) {
    if (lista[j] > lista[j + 1]) {
      const temp: number = lista[j];
      lista[j] = lista[j + 1];
      lista[j + 1] = temp;
      intercambiar = true;
    }
  }
  if (!intercambiar) {
    break;
  }
}

console.log("after", lista);
console.timeEnd("bubble");
