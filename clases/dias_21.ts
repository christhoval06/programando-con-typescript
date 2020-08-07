/**
 * 1. Write a JavaScript program to compute the sum of all digits that occur in a given string.
 * Example:
 * input => 'abcd12efg9'
 *       => 1+2+9
 * output => 12
 */
function SumDigits(s: string): number {
  const regex: RegExp = /([0-9])/g;
  const numbers: Array<string> = Array.from(s.match(regex) || []);
  function sum(accumulator: number, n: string) {
    return accumulator + Number(n);
  }
  return numbers.reduce<number>(sum, 0);
}

console.log("SumDigits('abcd12efg9')", SumDigits("abcd12efg9"));
console.log("SumDigits('h8l4mund8')", SumDigits("h8l4mund8"));

/**
 * 2. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer
 * Example:
 * input => 4
 *       => 1^3 + 2^3 + 3^3 + 4^3
 * output => 100
 */

function CubeFactorial(n: number): number {
  if (n === 1) {
    return Math.pow(1, 3);
  }

  return Math.pow(n, 3) + CubeFactorial(n - 1);
}

console.log("CubeFactorial(4)", CubeFactorial(4));
console.log("CubeFactorial(4)", CubeFactorial(6));
