// Inmutabilidad

interface Color {
  title: string;
  color: string;
  rating: number;
}

const color: Color = {
  title: "black",
  color: "#000",
  rating: 0
};

// function rateColor(color: Color, rating: number): Color {
//     return Object.assign({}, color, {rating});
// }

const rateColor = (color: Color, rating: number): Color => ({
  ...color,
  rating
});

console.log(rateColor(color, 5).rating);
console.log(color.rating);

const lista: Array<number> = [1, 2, 3, 4];

// const addNumber = function (
//     toAdd: number,
//     numbers: Array<number>
// ): Array<number> {
//     numbers.push(toAdd);
//     return numbers;
// }

// const addNumber = (toAdd: number, numbers: Array<number>): Array<number> =>
//   numbers.concat(toAdd);

const addNumber = (toAdd: number, numbers: Array<number>): Array<number> => [
  ...numbers,
  toAdd
];

console.log(addNumber(0, lista).length);
console.log(lista.length);

//// Funciones Puras.

interface Permission {
  name: string;
  canRead: boolean;
  canWrite: boolean;
}

const adonis: Permission = {
  name: "Adonis P.",
  canRead: true,
  canWrite: true
};

// function selfEducate() {
//   adonis.canRead=false
//   adonis.canWrite=false
// }

// selfEducate()

// const selfEducate = (person: Permission): Permission => {
//   person.canRead = false;
//   person.canWrite = false;
//   return person;
// };

const selfEducate = (person: Permission): Permission => ({
  ...person,
  canRead: false,
  canWrite: false
});

console.log(selfEducate(adonis));
console.log(adonis);

// Data Transformations
/**
 * Arrays
 * Array.map
 * Array.reduce
 * Array.join
 * Array.filter
 */

const escuelas: Array<string> = [
  "Elena Ch. Pinate",
  "Moscote",
  "Richard N.",
  "Maria"
];

console.log(escuelas.join(","));

const MEscuelas = escuelas.filter((escuela: string) => escuela[0] === "M");

console.log(MEscuelas);

const borrarEscuela = (borrar: string, lista: Array<string>): Array<string> =>
  lista.filter((escuela: string) => escuela !== borrar);

console.log(borrarEscuela("Moscote", escuelas).join(", "));
console.log(borrarEscuela("Maria", escuelas).join(", "));
console.log(
  borrarEscuela("Maria", borrarEscuela("Moscote", escuelas)).join(", ")
);
