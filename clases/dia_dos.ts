let d: [string, number] = ["monday", 11];
console.log("Tupla 2", d);

//  Tupla 1 - 8
let e: [number, string] = [13, "bat", "spiderman", 2];
console.log("Tupla 3", e);

e[13] = "elephant";
console.log("Posicion 13", e);
e[15] = false; // Error
console.log("Posicion 15", e);

//ENUM
enum Animals {
  cat,
  lion,
  dog,
  cow = 1,
  monkey = "false"
}
let a1: Animals = Animals.cat;
console.log("Enum", Animals[3]); // cow
console.log("Enum", Animals.monkey); // 4

//OBJECT
var hoy = new Date();
var n: Number = new Number(0);
var s: String = new String(0);
console.log({ hoy, n, s });
const n1: number = 10;
const precio: string = "54.99";
const itms: number = Number(precio) * 0.07;

console.log("itms", itms);

// JSON
// key value (KV)
// struct
type Persona = {
  nombre: string;
  edad: number;
  altura: number;
  peso: number;
};
const persona: Persona = {
  nombre: "fulano",
  edad: 12,
  altura: 180,
  peso: 68
};

console.log("persona", persona);

//TYPEOF
var miFuncion = new Function("5+2");
var forma = "redonda";
var tamano = 1;
var hoy = new Date();

console.log(typeof miFuncion);
"function";
console.log(typeof forma);
"string";
console.log(typeof tamano);
"number";
console.log(typeof hoy);
"object";
console.log(typeof noExiste);
"undefined";

// Mega Estructuras

const cursos: Array<string> = ["math", "english", "programming"];

enum Genero {
  m,
  f
}

interface Alumno {
  id: number;
  nombre: string;
  genero?: Genero;
  cursos: Array<string>;
  peso?: number;
  altura?: number;
  cedula: string;
}

const christhoval: Alumno = {
  id: 1,
  nombre: "Christhoval",
  cursos: ["math", "programming"],
  peso: 200,
  cedula: "5-706-1803"
};

interface Geometria {
  lado?: number;
  altura?: number;
}

interface Circulo extends Geometria {
  radio?: number;
  diametro?: number;
}

const circulo: Circulo = {
  radio: 6,
  diametro: 12
};

const cuadrado: Geometria = {
  lado: 5,
  altura: 5
};

const ricardo: Alumno = {
  id: 1,
  genero: Genero.m,
  nombre: "Christhoval",
  cursos: ["math", "programming"],
  peso: 200,
  cedula: "5-706-1803"
};

// Partdo de futbol (Damian)

enum Categoria {
  final,
  semi,
  cuartos
}
interface Equipo {
  nombre: string;
  goles?: number;
  penales?: number;
  tajetas?: number;
}

interface Partido {
  local: Equipo;
  invitado: Equipo;
  ganador: Equipo;
  tiempo: number;
  categoria: Categoria;
}

const barca: Equipo = {
  nombre: "Barcelona",
  goles: 3
};

const juego1: Partido = {
  local: barca,
  invitado: {
    nombre: "Real",
    goles: 1,
    penales: 1,
    tajetas: 2
  },
  ganador: barca,
  tiempo: 70,
  categoria: Categoria.final
};

// Mercado de abastos

const market: Array<[string, number]> = [
  ["milk", 5.99],
  ["met", 6.99],
  ["egg", 12.99]
];
console.table(market);

// Modelar Auto (Angel)

enum Marca {
  Tesla,
  Audi,
  RollRoyce
}

interface Auto {
  puertas: number;
  asientos: number;
  bolsasDeAire: number;
  maletero: number;
  neumaticos: number;
  placa?: string;
  marca: Marca;
}

const teslaModelS: Auto = {
  puertas: 5,
  asientos: 3,
  bolsasDeAire: 4,
  maletero: 2,
  neumaticos: 6,
  marca: Marca.Tesla
};

// Temas para la proxiuma clase
/*

Sentencias de control
- Sentencia if
- Sentencia if else
- Sentencia switch

Cliclos Repetitivos
- Ciclo for (for of, for in)
- Ciclo while
- Ciclo do while

dialogos
- alert
- promt

*/
