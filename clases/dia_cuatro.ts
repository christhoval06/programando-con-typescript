// Retroalimentación
// Buscar el número mayor dentro de una lista.

const lista: Array<number> = [
  84,
  30,
  85,
  33,
  92,
  52,
  34,
  53,
  72,
  21,
  59,
  26,
  18,
  7,
  64,
  49,
  42,
  74,
  35,
  88
];

let mayor: number = lista[0];
for (let i: number = 1; i < lista.length; i++) {
  if (lista[i] >= mayor) {
    mayor = lista[i];
  }
}

console.log("El número mayor es ", mayor);

// Indentificar si un producto existe en un carrito de compra
// usar prompt para introducir el nombre del producto.
// si la fruta existe en el carrito, mostrar `fruta - precio * cantidad`
// si no existe, mostrar que no existe

type Producto = [string, number, number];
const carrito: Array<Producto> = [
  ["manzanas", 3, 0.5], // 0
  ["mangos", 2, 0.99], // 1
  ["bananas", 6, 0.25], // 2
  ["piñas", 1, 1.0], // 3
  ["fresas", 2, 4.0] // 4
];

let producto: Producto | undefined = undefined;
const busqueda: string = prompt("Que deseas buscar?") || "bananas";

for (let i: number = 0; i < carrito.length; i++) {
  const [nombre] = carrito[i];

  console.log({ nombre });

  if (nombre.toLowerCase() == busqueda.toLowerCase()) {
    producto = carrito[i];
  }
}

if (producto) {
  const [nombre, cantidad, precio] = producto;
  console.log({ nombre });
  console.log(`${nombre} - ${cantidad * precio}`);
  console.log(nombre + " - " + cantidad * precio);
} else {
  console.log(`${busqueda} no existe`);
}

/**
 * Buscar el mayor, el menor, promedio y la distancia de una de las siguente listas
 * 
 [
 [74,   10, ,  49 ,  91,   60  , 18  , 99 ,  23 ,  14  , 21],
 [56  , 33  , 90 ,  55  ,  6  ,  5  , 89   , 1  , 85 ,  59],
 [54  , 13  , 69 ,  84  , 24  , 78   25  , 26  , 76  , 58],
 [61  , 28  , 62 ,  29  , 98 , 100  , 75 ,  45 ,  12 ,  97],
  [4 ,  41 ,  87 ,  40  , 68  , 15 ,  32 ,  44 ,  73 ,  93],
 [94 ,  82 ,  79 ,  64  , 38  , 70 ,  83 ,  11  , 52 ,  80],
 [86 ,  16  ,  8 ,  31  , 43 ,   2 ,  51 ,  20  , 92 ,  47],
 [65 ,  77  , 88 ,   9  , 81 ,  53 ,  71 ,  67  , 50  , 22],
 [35 ,   7 ,  72 ,  37 ,   3 ,  17 ,  95 ,  39 ,  42  , 36],
 [30 ,  46 ,  66 ,  57 ,  27 ,  48 ,  19 ,  96 ,  34 ,  63],
 ]
 */

// type Result = [number, number, number, number];

const matrix: Array<Array<number>> = [
  [74, 10, 49, 91, 60, 18, 99, 23, 14, 21],
  [56, 33, 90, 55, 6, 5, 89, 1, 85, 59],
  [54, 13, 69, 84, 24, 78, 25, 26, 76, 58],
  [61, 28, 62, 29, 98, 100, 75, 45, 12, 97],
  [4, 41, 87, 40, 68, 15, 32, 44, 73, 93],
  [94, 82, 79, 64, 38, 70, 83, 11, 52, 80],
  [86, 16, 8, 31, 43, 2, 51, 20, 92, 47],
  [65, 77, 88, 9, 81, 53, 71, 67, 50, 22],
  [35, 7, 72, 37, 3, 17, 95, 39, 42, 36],
  [30, 46, 66, 57, 27, 48, 19, 96, 34, 63]
];

// const resultados: Array<Result> = [];

// for (let i = 0; i < matrix.length; i++) {
//     let min: number = matrix[i][0];
//     let max: number = matrix[i][0];
//     let promedio: number = 0;
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] >= max) {
//             max = matrix[i][j];
//         }
//         if (matrix[i][j] <= min) {
//             min = matrix[i][j];
//         }
//         promedio += matrix[i][j];
//     }

//     const distancia: number = max - min;

//     promedio /= matrix[i].length;
//     resultados.push([max, min, distancia, promedio]);
// }

// console.table(resultados);

interface Result {
  max: number;
  min: number;
  distancia: number;
  promedio: number;
}

const resultados: Array<Result> = [];

for (let i = 0; i < matrix.length; i++) {
  const resultado: Result = {
    min: matrix[i][0],
    max: matrix[i][0],
    promedio: 0,
    distancia: 0
  };

  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] >= resultado.max) {
      resultado.max = matrix[i][j];
    }
    if (matrix[i][j] <= resultado.min) {
      resultado.min = matrix[i][j];
    }
    resultado.promedio += matrix[i][j];
  }

  resultado.distancia = resultado.max - resultado.min;

  resultado.promedio /= matrix[i].length;

  resultados.push(resultado);
}

console.table(resultados);

// Modelando un juego de Fulbol (Interfaces)

enum Posicion {
  delantero = "delantero",
  defenza = "defenza",
  medio = "medio",
  portero = "portero"
}

interface Personal {
  nombre: string;
  edad: number;
}

interface Entrenador extends Personal {
  trofeos: number;
}

interface Doctor extends Personal {
  especialidad?: string;
}

interface Jugador extends Personal {
  posicion: Posicion;
}

interface Equipo {
  nombre: string;
  jugadores: Array<Jugador>;
  personal?: Array<Jugador | Entrenador | Doctor>;
  goles?: number;
  penales?: number;
  rojas?: number;
  amarillas?: number;
}

interface Partido {
  local: Equipo;
  visitante: Equipo;
  ganador?: Equipo;
  fecha: string;
  cancha: string;
  clasificacion: string;
}

// Jugadores

const messi: Jugador = {
  nombre: "Leonel Messi",
  edad: 33,
  posicion: Posicion.delantero
};

const ronaldo: Jugador = {
  nombre: "Cristiano Ronaldo",
  edad: 34,
  posicion: Posicion.medio
};

const local: Equipo = {
  nombre: "Barcelona",
  jugadores: [messi]
};

const visitante: Equipo = {
  nombre: "Juventus",
  jugadores: [ronaldo]
};

const partido: Partido = {
  local,
  visitante,
  fecha: "hoy",
  cancha: "Santigo",
  clasificacion: "final"
};

console.log(partido.local.nombre, "vs", partido.visitante.nombre);
console.log("Jugadores", partido.local.nombre);
console.table(partido.local.jugadores, ["nombre", "edad"]);
