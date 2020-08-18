/**
 *
 * Phone Letter Combinations
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations
 * that the number could represent. A mapping of digit to letters (just like on the telephone buttons)
 * is given below. Note that 1 does not map to any letters.
 * https://edabit.com/challenge/npLurjMJofmFRCJwx
 * https://www.geeksforgeeks.org/backtracking-algorithms/
 * input  ➞   '23'
 * output ➞ ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 *
 */

type letterCombination = string;
function letterCombinations(digits: string): Array<letterCombination> {
  const combinations: Array<string> = [];

  const NUM_PAD: Array<string> = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz"
  ];

  function backtrack(combination: string, nextDigits: string) {
    if (nextDigits.length === 0) {
      combinations.push(combination);
    } else {
      const digit: string = nextDigits.substr(0, 1);
      const letters: Array<string> = Array.from(NUM_PAD[Number(digit)]);

      for (const letter of letters) {
        backtrack(combination + letter, nextDigits.substr(1));
      }
    }
  }

  backtrack("", digits);
  return combinations;
}

console.log(letterCombinations("235"));

// 22|2|7777|22|2
// ABCDEF...XYZ
// HOLA -> IPMB(1)
// HOLA -> JQNC(2)
