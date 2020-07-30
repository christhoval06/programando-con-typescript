/**
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

const romanRegex: RegExp = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
/**
 * Roman Base Numbers
 */
enum Roman {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000
}

function getValueFromRomanNumber(letter: string): number {
  letter = letter.toUpperCase();

  if (letter === "I") {
    return Roman.I;
  }
  if (letter === "V") {
    return Roman.V;
  }
  if (letter === "X") {
    return Roman.X;
  }
  if (letter === "L") {
    return Roman.L;
  }
  if (letter === "C") {
    return Roman.C;
  }
  if (letter === "D") {
    return Roman.D;
  }
  if (letter === "M") {
    return Roman.M;
  }
  return -1;
}

console.log(getValueFromRomanNumber("c"));

function isRomanValid(roman: string): boolean {
  return romanRegex.test(roman);
}

console.log(isRomanValid("VVVVVVV"));
console.log(isRomanValid("MCMXC"));

function romanCheck(
  letterValue: number,
  lastLetterValue: number,
  total: number
): number {
  if (lastLetterValue > letterValue) {
    return total - letterValue;
  } else {
    return total + letterValue;
  }
}

function romanDecode(roman: string): string {
  let decimal: number = 0;
  let lastNumber: number = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const letter: string = roman.substr(i, 1);
    const letterValue: number = getValueFromRomanNumber(letter);
    decimal = romanCheck(letterValue, lastNumber, decimal);
    lastNumber = letterValue;
  }

  return decimal.toString();
}

console.log(romanDecode("MCMXC"));

function roman2ArabicNumber(roman: string): string {
  if (!isRomanValid(roman)) {
    return "";
  }

  return romanDecode(roman);
}

console.log(roman2ArabicNumber("XVIII"));
