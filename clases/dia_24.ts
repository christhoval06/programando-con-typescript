import { performanceChecker } from "../src/utils/performance";

/**
 * https://edabit.com/challenge/r4hycBjiBNMs6AAjq
 * 10. Create a function that finds the word "bomb" in the given string.
 * If there is a bomb, return "Duck!!!" otherwise return "There is no bomb, relax.".
 * Example:
 * input ➞ "There is a bomb."
 * output ➞ "Duck!!!"
 */

// BombFinder is a pure function
function BombFinder(s: string): string {
  const regex: RegExp = /\sbomb[\s.,]?/i;
  if (!regex.test(s)) {
    return "There is no bomb, relax.";
  }
  return "Duck!!!";
}

console.log(BombFinder("There is a bomb."));

/**
 * https://edabit.com/challenge/3kcrnpHk7krNZdnKK
 * 11. Create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number.
 * To convert is simple: ((2) means base 2 and (10) means base 10) 010101001(2) = 1 + 8 + 32 + 128.
 * Example:
 * input ➞ 10
 * output ➞ "1010"
 */

/**
 * Decinal to Binany (paper write example)
 * number = 103
 * Round 0: 103 is an odd number so we write a 1
 * Round 1: 103/2 = 51.5  using interger round 51 is an odd number so we write a 1.
 * Round 2: 51/2 = 25.5 using interger round 25 is an odd number so we write a 1.
 * Round 3: 25/2 = 12.5 using interger round 12 is a even number so we write a 0.
 * Round 4: 12/2 = 6 then 6 is a even number so we write a 0.
 * Round 5: 6/2 = 3 then 3 is a odd number so we write a 1.
 * Round 6: 3/2 = 1.5 ~ 1 then 1 is a odd number so we write a 1.
 * Output = 1100111
 */

function Decimal2Binary(n: number): string {
  if (n === 0) {
    return "0";
  }

  let binary: string = "";
  let temp: number = n;

  while (temp > 0) {
    if (temp % 2 === 0) {
      binary = "0" + binary;
    } else {
      binary = "1" + binary;
    }
    temp = Math.floor(temp / 2);
  }

  return binary;
}

console.log(Decimal2Binary(28));
console.log(Decimal2Binary(10));
console.log(Decimal2Binary(72));
console.log(Decimal2Binary(103));

function Decimal2BinaryRecursive(n: number): string {
  if (n === 0) {
    return String(0);
  }
  return String(
    (n % 2) + 10 * Number(Decimal2BinaryRecursive(Math.floor(n / 2)))
  );
}

console.log(Decimal2BinaryRecursive(28));
console.log(Decimal2BinaryRecursive(10));
console.log(Decimal2BinaryRecursive(72));
console.log(Decimal2BinaryRecursive(103));
console.log(Decimal2BinaryRecursive(16));

/**
 *Factorial simple
 */

function Factorial(n: number): number {
  let r: number = 1;
  while (n > 0) {
    r = r * n;
    n = n - 1;
  }
  return r;
}

console.log(Factorial(7));

/**
 * Factorial recursive
 * @param n number
 */
function FactorialRecursive(n: number): number {
  if (n === 0) return 1;

  return n * Factorial(n - 1);
}

console.log(FactorialRecursive(7));

/**
 * https://edabit.com/challenge/3kcrnpHk7krNZdnKK
 * 12. Create a function that returns a base 10 (decimal) representation of a base 2 (binary)  string number.
 * Example:
 * input ➞ "010101001"
 * output ➞ 169
 */

/**
 * Binary to Decimal
 * number = '10000'
 * Round 0: 0 * 2^0 = 0
 * Round 1: 0 * 2^1 = 0
 * Round 2: 0 * 2^2 = 0
 * Round 3: 0 * 2^3 = 0
 * Round 4: 1 * 2^4 = 16
 */

function Binary2Decimal(s: string): number {
  return Array.from(s)
    .reverse()
    .reduce(function (accum, n, i) {
      return accum + Number(n) * Math.pow(2, i);
    }, 0);
}
console.log(Binary2Decimal("1010"));
console.log(performanceChecker(Binary2Decimal)("1001000"));
console.log(performanceChecker(Binary2Decimal)("1010"));

/* Fuente: https://stackoverflow.com/questions/10258828/how-to-convert-binary-string-to-decimal*/

function Binary2DecimalRecursive(n: number, count: number = 0): number {
  if (n < 10) return n * Math.pow(2, count);

  return (
    (n % 10) * Math.pow(2, count) +
    Binary2DecimalRecursive(Math.floor(n / 10), count + 1)
  );
}

console.log(Binary2DecimalRecursive(1101001));
console.log(performanceChecker(Binary2DecimalRecursive)(1001000));
console.log(performanceChecker(Binary2DecimalRecursive)(1010));
console.log(Binary2DecimalRecursive(100001));

/**
 * Testeando
 */
