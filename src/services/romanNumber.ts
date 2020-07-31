/**
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
 */

export const romanRegex: RegExp = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
/**
 * Roman Base Numbers
 */
export enum Roman {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000
}

function _getValueFromRomanNumber(letter: string): number {
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

function _isRomanValid(roman: string): boolean {
  return romanRegex.test(roman);
}

function _romanCheck(
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

function _romanDecode(roman: string): string {
  let decimal: number = 0;
  let lastNumber: number = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const letter: string = roman.substr(i, 1);
    const letterValue: number = _getValueFromRomanNumber(letter);
    decimal = _romanCheck(letterValue, lastNumber, decimal);
    lastNumber = letterValue;
  }

  return decimal.toString();
}

export function roman2ArabicNumber(roman: string): string {
  if (!_isRomanValid(roman)) {
    return "";
  }

  return _romanDecode(roman);
}
