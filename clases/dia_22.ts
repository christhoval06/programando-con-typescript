/**
 * 3. Write a JavaScript program to find the number of elements which presents in both of the given arrays.
 * Example:
 * input => [1,2,3,4,5] and [1,2,3,1]
 *       => 1 == 1, 2 == 2, 3 == 3, 4 == 5 (x)
 * output => 3 elements
 * 1 2 3 4 5   1 5 3 7 8 9
 */

function CountSameElements(a: Array<number>, b: Array<number>): string {
  let count: number = 0;
  const length: number = Math.max(a.length, b.length);
  for (let i = 0; i < length; i++) {
    if (a[i] === b[i]) {
      count += 1;
    }
  }

  return `${count} element${count > 1 ? "s" : ""}`;
}

console.log(
  "CountSameElements([1,2,3,4,5], [1,2,3,1])",
  CountSameElements([1, 2, 3, 4, 5], [0, 1, 3, 7, 8, 9])
);

/**
 * 4. Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character
 * Example:
 * input => 'p3yth0n'
 * output => 'p$yth0n'
 */

function replaceFirstDigit(s: string): string {
  const regex: RegExp = /([0-9])/;
  return s.replace(regex, "$");
}

console.log("replaceFirstDigit('h8l4mund8')", replaceFirstDigit("h8l4mund8"));
