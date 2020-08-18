/**
 * Resolve 2 examples from https://edabit.com/challenges
 */

/**
 *
 * This challenge will help you interpret mathematical relationships both algebraically and geometrically.
 * https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
 * matchHouses(1) ➞ 6
 * matchHouses(4) ➞ 21
 * matchHouses(87) ➞ 436
 *
 */

const matchHouse = (step: number): number => (step > 0 ? step * 5 + 1 : 0);

console.log(matchHouse(87));

/**
 * Luke Skywalker has family and friends. Help him remind them who is who.
 * Given a string with a name, return the relation of that person to Luke.
 *
 * relationToLuke("Darth Vader") ➞ "Luke, I am your father."
 * relationToLuke("Leia") ➞ "Luke, I am your sister."
 * relationToLuke("Han") ➞ "Luke, I am your brother in law."
 *https://edabit.com/challenge/Ac8GiJBAzEJYmcqyF
 */

function relationToLuke(name: string): string {
  let s = String(name);
  if (s.localeCompare("Darth Vader") === 0) {
    return "Luke, I am your father.";
  } else if (s.localeCompare("Leia") === 0) {
    return "Luke, I am your sister.";
  } else if (s.localeCompare("Han") === 0) {
    return "Luke, I am your brother in law.";
  } else if (s.localeCompare("R2D2") === 0) {
    return "Luke, I am your droid.";
  }
}

console.log(relationToLuke("Leia"));

type Relation = string;

interface Relationships {
  [name: string]: Relation;
}

const relationships: Relationships = {
  "darth vader": "Luke, I am your father.",
  leia: "Luke, I am your sister.",
  han: "Luke, I am your brother in law.",
  r2d2: "Luke, I am your droid."
};

function relationToLuke2(name: string): string {
  return relationships[name.toLowerCase()] || "Luke, I don't known you.";
}

console.log(relationToLuke2("Leia"));
console.log(relationToLuke2("Leia2"));

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
