import { performanceChecker } from "../src/utils/performance";

import { bank, Customer } from "../src/data/bank";
/**
 * Data Transformations
 *
 * Array.forEach **
 *
 * Array.map
 * Array.reduce
 *
 * */

const escuelas: Array<string> = [
  "Elena Ch. Pinate",
  "Moscote",
  "Richard N.",
  "Maria"
];

console.log(escuelas);

/**
 * Array.reduce
 */

/**
 * Array.join
 */

console.log(
  escuelas.reduce<string>(function(
    prev: string,
    escuela: string,
    index: number,
    lista: Array<string>
  ): string {
    const isLast: boolean = lista.length - 1 === index;
    return `${prev}${escuela}${!isLast ? "," : ""}`;
  },
  "")
);

console.log(escuelas.join(","));

// performanceChecker

function userJoin(array: Array<string>, separator: string = ",") {
  return array.reduce<string>(function(
    prev: string,
    escuela: string,
    index: number,
    lista: Array<string>
  ): string {
    const isLast: boolean = lista.length - 1 === index;
    return `${prev}${escuela}${!isLast ? separator : ""}`;
  },
  "");
}

function Join(array: Array<string>, separator: string = ",") {
  return array.join(separator);
}

performanceChecker(userJoin)(escuelas);
performanceChecker(Join)(escuelas);

const FEMALE: string = "Female";
const MALE: string = "Male";

/**
 * This function count specific gender in list.
 * @param list
 * @param gender
 *
 * @returns number
 */
function countGender(list: Array<Customer>, gender: string = FEMALE): number {
  const counter = function(accumulator: number, customer: Customer): number {
    let count: number = 0;
    if (customer.gender === gender) {
      count = 1;
    }

    return accumulator + count;
  };
  return list.reduce<number>(counter, 0);
}

console.log(
  "Females with bank's account",
  performanceChecker(countGender)(bank)
);
console.log(
  "Males with bank's account",
  performanceChecker(countGender)(bank, MALE)
);

/**
 * Obtener total de dinero en el banco.
 */

/**
 * This function count all the money in the bank's accounts
 * @param list
 *
 * @returns number
 */
function countMoney(list: Array<Customer>): number {
  const counter = function(accumulator: number, customer: Customer): number {
    return accumulator + customer.debits;
  };
  return list.reduce<number>(counter, 0);
}

console.log("Money in bank's account", performanceChecker(countMoney)(bank));

/**
 * Obtener el total de creditos y debitos del banco.
 * Usando reduce
 */

interface ReportT {
  debits: number;
  credits: number;
  netMoney: number;
}

function reportT(list: Array<Customer>): ReportT {
  const counter = function(accumulator: ReportT, customer: Customer): ReportT {
    return {
      debits: accumulator.debits + customer.debits,
      credits: accumulator.credits + customer.credits,
      netMoney: customer.debits - customer.credits
      // netMoney: debits - credits
    };
  };
  return list.reduce<ReportT>(counter, { debits: 0, credits: 0, netMoney: 0 });
}

console.log("Money in bank's account", performanceChecker(reportT)(bank));
