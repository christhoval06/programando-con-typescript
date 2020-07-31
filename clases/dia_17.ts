/**
 * https://github.com/Mavenic/merchant-guide-to-galaxy
 * merchant guide togalaxy
 You decided to give up on earth after the latest financial collapse left 99.99% of the earth's population with 0.01% of the wealth. 
 Luckily, with the scant sum of money that is left in your account, you are able to afford to rent a spaceship, 
 leave earth, and fly all over the galaxy to sell common metals and dirt (which apparently is worth a lot).Buying and selling over 
 the galaxy requires you to convert numbers and units, and you decided to write a program to help you.The numbers used for 
 intergalactic transactions follows similar convention to the roman numerals and you have painstakingly collected the appropriate translation between them.Roman numerals are based on seven symbols:

SymbolValue

I 1
V 5
X 10
L 50
C 100
D 500
M 1,000
Numbers are formed by combining symbols together and adding the values. 
For example, MMVI is 1000 + 1000 + 5 + 1 = 2006. Generally, symbols are placed in order of value, starting with the largest values. 
When smaller values precede larger values, the smaller values are subtracted from the larger values, 
and the result is added to the total. For example MCMXLIV = 1000 + (1000 - 100) + (50 - 10) + (5 - 1) = 1944. 
The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more. 
(They may appear four times if the third and fourth are separated by a smaller value, such as XXXIX.) "D", "L", and "V" can never be repeated.

"I" can be subtracted from "V" and "X" only. "X" can be subtracted from "L" and "C" only. 
"C" can be subtracted from "D" and "M" only. "V", "L", and "D" can never be subtracted. 
Only one small-value symbol may be subtracted from any large-value symbol.

A number written in Arabic numerals can be broken into digits. 
For example, 1903 is composed of 1, 9, 0, and 3. 
To write the Roman numeral, each of the non-zero digits should be treated separately. 
In the above example, 1,000 = M, 900 = CM, and 3 = III. 
Therefore, 1903 = MCMIII. -- Source: Wikipedia (http://en.wikipedia.org/wiki/Roman_numerals)
Input to your program consists of lines of text detailing your notes on the 
conversion between intergalactic units and roman numerals. 
You are expected to handle invalid queries appropriately.

Test input:

glob is I
prok is V
pish is X
tegj is L
glob glob Silver is 34 Credits
glob prok Gold is 57800 Credits
pish pish Iron is 3910 Credits


how much is pish tegj glob glob ?
how many Credits is glob prok Silver ?
how many Credits is glob prok Gold ?
how many Credits is glob prok Iron ?
how much wood could a woodchuck chuck if a woodchuck could chuck wood ?

Test Output:
pish tegj glob glob is 42
glob prok Silver is 68 Credits
glob prok Gold is 57800 Credits
glob prok Iron is 782 Credits
I have no idea what you are talking about
 */

import { roman2ArabicNumber } from "../src/services/romanNumber";

enum Type {
  QUESTION_HOW_MUCH,
  QUESTION_HOW_MANY,
  NO_MATCH
}

const patternHowMuch: RegExp = /^how much is (([A-Za-z\s])+)\?$/;
const patternHowMany: RegExp = /^how many [c|C]redits is (([A-Za-z\s])+)\?$/;

type LineFilter = [Type, RegExp];
const linefilter: Array<LineFilter> = [
  [Type.QUESTION_HOW_MUCH, patternHowMuch],
  [Type.QUESTION_HOW_MANY, patternHowMany]
];

const metals: Array<string> = ["Iron", "Silver", "Gold"];

// const input: string =
//  prompt("Welcome to GalaxyMerchant!\nPlease provide input below.") || "";

export enum Values {
  I = 1,
  V = 5,
  X = 10,
  L = 50
}

function _getValueForMetal(metal: string): number {
  metal = metal.toLowerCase();

  if (metal === "silver") {
    return 17;
  } else if (metal === "iron") {
    return 195.5;
  } else if (metal === "gold") {
    return 14450;
  }
  return 1;
}

function _getValueFromIntergalacticNumber(letter: string): string | null {
  letter = letter.toLowerCase();

  if (letter === "glob") {
    return "I";
  }
  if (letter === "prok") {
    return "V";
  }
  if (letter === "pish") {
    return "X";
  }
  if (letter === "tegj") {
    return "L";
  }
  return null;
}

function _isIntergalacticValid(value: string): Type {
  let result: Type = Type.NO_MATCH;
  let match: boolean = false;

  for (let i = 0; i < linefilter.length && !match; i++) {
    const [type, pattern] = linefilter[i];
    if (pattern.test(value)) {
      match = true;
      result = type;
    }
  }
  return result;
}

function haveMetal(lastKey: string): boolean {
  return metals.some(metal => metal.toLowerCase() === lastKey.toLowerCase());
}

function process(formatted: string, isCredit: boolean = false): string {
  let romanResult: string = "";
  let metalValue: number = 1;
  let error: string | null = null;

  if (formatted) {
    const keys: Array<string> = formatted.trim().split(/\s+/);

    const lastKey: string = keys[keys.length - 1];

    if (haveMetal(lastKey)) {
      metalValue = _getValueForMetal(lastKey);
      keys.pop();
    }
    for (let i = 0; i < keys.length; i++) {
      const key: string = keys[i];
      const romanValue: string | null = _getValueFromIntergalacticNumber(key);
      if (!romanValue) {
        error = "I have no idea what you are talking about";
        break;
      }
      romanResult += romanValue;
    }
  }

  if (!error) {
    romanResult = roman2ArabicNumber(romanResult);
    return `${formatted} is ${Number(romanResult) * metalValue} ${
      isCredit ? "Credits" : ""
    }`;
  }

  return error || "";
}

function processHowMuchQuestion(value: string): string {
  const [, formatted] = value.match(patternHowMuch) || [];

  return process(formatted);
}

function processHowManyQuestion(value: string): string {
  const [, formatted] = value.match(patternHowMany) || [];
  return process(formatted, true);
}

function validate(value: string): string {
  const type: Type = _isIntergalacticValid(value);

  if (type === Type.QUESTION_HOW_MUCH) {
    return processHowMuchQuestion(value);
  } else if (type === Type.QUESTION_HOW_MANY) {
    return processHowManyQuestion(value);
  }

  return "I have no idea what you are talking about";
}

function decode(value: string): string {
  return validate(value);
}

console.log(decode("how much is pish tegj glob glob ?"));
console.log(decode("how many Credits is glob prok Silver ?"));
console.log(decode("how many Credits is glob prok Gold ?"));
console.log(decode("how many Credits is glob prok Iron ?"));
console.log(
  decode(
    "how much wood could a woodchuck chuck if a woodchuck could chuck wood ?"
  )
);

console.log(decode("how many Credits is glob Iron prok Iron ?"));

console.log(decode("how many Credits is blob vrok Hg ?"));
