/**
 * Calcular el factorial de n
 * Ejemplo: 4!
 * n  =  4
 * output = 1 * 2 * 3 * 4 = 24
 *
 */

function range(n: number): Array<number> {
  return Array.from(Array(n).keys());
}

function factorial(base: number): number {
  function _factorial(accum: number, n: number): number {
    return accum * (n + 1);
  }
  return range(base).reduce(_factorial, 1);
}

console.log("factorial(4)", factorial(4));
console.log("factorial(10)", factorial(18));

function factorialRecursive(n: number): number {
  if (n === 0) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}

console.log("factorialRecursive(4)", factorialRecursive(4));
console.log("factorialRecursive(10)", factorialRecursive(18));
console.log("factorialRecursive(100)", factorialRecursive(170));

/**
 * Validar si una palabra o frace es un palíndromo
 * Ejemplo: Somos o no somos
 * output = Somos o no somos es un palíndromo
 * Ejemplo: Sobores de mi tierra
 * output = Sobores de mi tierra no es un palíndromo
 */

function palindrome(text: string): boolean {
  text = text
    .trim()
    .replace(/\s/g, "")
    .toLowerCase();
  return (
    text ===
    text
      .split("")
      .reverse()
      .join("")
  );
}

console.log("palindrome", palindrome("Somos o no somos"));
