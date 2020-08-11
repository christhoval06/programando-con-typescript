import { performanceChecker } from "../src/utils/performance";
import { range } from "../src/utils/arrays";
/**
 * 5. Write a program that takes the base and height of a triangle and return its area.
 * Formula --> A=(height*base)/2
 * Example:
 * input => base = 3, height = 2
 *      => (2 * 3)/2
 *      => 6/2
 *      => 3
 * output => Triangle's area is 3
 *
 * https://edabit.com/challenges/javascript
 *
 */

function TriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}
// console.log("Triangle's area is", TriangleArea(3, 2));

console.log("Triangle's area is", performanceChecker(TriangleArea)(3, 2));

const TriangleArea2 = (b: number, h: number): number => (b * h) / 2;
console.log("Triangle's area is", TriangleArea2(3, 2));

/**
 * 6. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
 * The farmer breeds three species:
 * chickens = 2 legs
 * cows = 4 legs
 * pigs = 4 legs
 * The farmer has counted his animals and he gives you a subtotal for each species.
 * You have to implement a program that returns the total number of legs of all the animals.
 * Example:
 * input => chickens = 2, cows = 3, pigs = 5
 *      => (2 * 2) + (3 * 4) + (5 * 4)
 * output => 36 legs
 * PD: Use an Enum.
 */

enum Legs {
  chicken = 2,
  cow = 4,
  pig = 4
}

function countAnimalsLegs(
  chickens: number,
  cows: number,
  pigs: number
): number {
  return chickens * Legs.chicken + cows * Legs.cow + pigs * Legs.pig;
}
console.log(countAnimalsLegs(2, 3, 5), "legs");

const countLegAnimal2 = (
  countChicken: number,
  countCows: number,
  countPigs: number
): number =>
  countChicken * Legs.chicken + countCows * Legs.cow + countPigs * Legs.pig;

console.log(countLegAnimal2(2, 3, 5), "legs");

/**
 * 7. Create a function that takes a string and returns a string in which each character is repeated once.
 * difficulty: Easy
 * Example:
 * input => 'String'
 * output => 'SSttrriinngg'
 */

function RepeatChar(s: string, times: number = 1): string {
  const chars: Array<string> = Array.from(s);

  function repeat(accum: string, char: string): string {
    const _chars: string = range(times + 1)
      .map(() => char)
      .join("");
    return `${accum}${_chars}`;
  }

  return chars.reduce<string>(repeat, "");
}

console.log(performanceChecker(RepeatChar)("String", 4));

/**
 * 8. Create a function which returns the number of true values there are in an array.
 * difficulty: Easy
 * Example:
 * input => [true, false, false, true, false]
 * output => 2
 */

const CountTrueValues = (list: Array<boolean>): number => {
  return list.reduce((accum: number, v: boolean) => accum + (v ? 1 : 0), 0);
};

const CountTrueValuesWithPerformance = performanceChecker(CountTrueValues);

console.log(CountTrueValuesWithPerformance([true, false, false, true, false]));
console.log(CountTrueValuesWithPerformance([]));

/**
 * https://edabit.com/challenge/YT2kXSMEtACPPk35R
 * 8. Create a function which validates whether a number n is exclusively within the bounds of lower and upper. Return false if n is not an integer.
 * Example:
 * input ➞ [3, 1, 9]
 * output ➞ true
 */

type LowerBounds = number;
type UpperBounds = number;
type NBounds = [number, LowerBounds, UpperBounds];

function ValidateIntBounds(params: NBounds): boolean {
  const [n, lower, upper] = params;

  if (!Number.isInteger(n)) {
    return false;
  }

  return n > lower && n < upper;
}

const ValidateIntBoundsWithPerformance = performanceChecker(ValidateIntBounds);

console.log(ValidateIntBoundsWithPerformance([3.5, 1, 9]));

/**
 * https://edabit.com/challenge/YT2kXSMEtACPPk35R
 * 9. Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
 * Example:
 * input ➞ num= 7, length= 5
 * output ➞ [7, 14, 21, 28, 35]
 */

function MultyTable(num: number, length: number): Array<number> {
  return range(length).map((n: number) => num * (n + 1));
}

const MultyTableWithPerformance = performanceChecker(MultyTable);

console.log(MultyTableWithPerformance(7, 5));
