import { performanceChecker } from "../src/utils/performance";

import { bank, Customer } from "../src/data/bank";

/**
 * Data Transformations
 *
 * Array.reduce
 *
 * */

/**
 * Obtener el total de creditos y debitos del banco.
 * Usando reduce
 */

interface ReportT {
  debits: number;
  credits: number;
  cash: number;
}

/**
 * Esta funcion genera un  reporte T
 * @param @requires list
 *
 * @returns ReportT
 */
function reportT(list: Array<Customer>): ReportT {
  const initialValue: ReportT = { debits: 0, credits: 0, cash: 0 };
  const counter = function(accumulator: ReportT, customer: Customer): ReportT {
    return {
      debits: accumulator.debits + customer.debits,
      credits: accumulator.credits + customer.credits,
      cash: accumulator.cash + (customer.debits - customer.credits)
    };
  };
  return list.reduce<ReportT>(counter, initialValue);
}

console.log("Money in bank's account", performanceChecker(reportT)(bank));

/**
 * Find max credit amount customer
 * @param @requires list
 *
 * @returns Customer
 */
function findMaxCredit(list: Array<Customer>): Customer {
  const initialValue: Customer = list[0];
  const find = function(accumulator: Customer, customer: Customer): Customer {
    if (customer.credits > accumulator.credits) {
      return customer;
    }
    return accumulator;
  };
  return list.reduce<Customer>(find, initialValue);
}

console.log(
  "Max credit amount customer",
  performanceChecker(findMaxCredit)(bank)
);

/**
 * Find min credit amount customer
 * @param @requires list
 *
 * @returns Customer
 */
function findMinCredit(list: Array<Customer>): Customer {
  const initialValue: Customer = list[0];
  function find(accumulator: Customer, customer: Customer): Customer {
    if (customer.credits < accumulator.credits) {
      return customer;
    }
    return accumulator;
  }
  return list.reduce<Customer>(find, initialValue);
}

console.log(
  "Min credit amount customer",
  performanceChecker(findMinCredit)(bank)
);

interface Debits {
  max: Customer;
  min: Customer;
}

/**
 * Find max & min debit amount customers
 * @param @requires list
 *
 * @returns Debits
 */
function findDebits(list: Array<Customer>): Debits {
  const initialValue: Debits = { max: list[0], min: list[0] };
  function find(accumulator: Debits, customer: Customer): Debits {
    let min: Customer = accumulator.min;
    if (customer.debits < min.debits) {
      min = customer;
    }

    let max: Customer = accumulator.max;
    if (customer.debits > max.debits) {
      max = customer;
    }

    return {
      min,
      max
    };
  }
  return list.reduce<Debits>(find, initialValue);
}

console.log(
  "Max & min debit amount customers",
  performanceChecker(findDebits)(bank)
);

interface MinMax {
  max: Customer;
  min: Customer;
}

interface MinMaxAmount {
  debit: MinMax;
  credit: MinMax;
}

/**
 * Find max & min debit, credits amount customers
 * @param @requires list
 *
 * @returns MinMaxAmount
 */
function findMinMaxAmount(list: Array<Customer>): MinMaxAmount {
  const minMax: MinMax = { max: list[0], min: list[0] };
  const initialValue: MinMaxAmount = { credit: minMax, debit: minMax };

  function find(accumulator: MinMaxAmount, customer: Customer): MinMaxAmount {
    const debit: MinMax = accumulator.debit;
    let minDebit: Customer = debit.min;
    if (customer.debits < minDebit.debits) {
      minDebit = customer;
    }

    let maxDebit: Customer = debit.max;
    if (customer.debits > maxDebit.debits) {
      maxDebit = customer;
    }

    return {
      credit: {
        min:
          customer.credits < accumulator.credit.min.credits
            ? customer
            : accumulator.credit.min,
        max:
          customer.credits > accumulator.credit.max.credits
            ? customer
            : accumulator.credit.max
      },
      debit: {
        min: minDebit,
        max: maxDebit
      }
    };
  }
  return list.reduce<MinMaxAmount>(find, initialValue);
}

console.log(
  "Max & min debit, credits amount customers",
  performanceChecker(findMinMaxAmount)(bank)
);
