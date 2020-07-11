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
 74   10   49   91   60   18   99   23   14   21
 56   33   90   55    6    5   89    1   85   59
 54   13   69   84   24   78   25   26   76   58
 61   28   62   29   98  100   75   45   12   97
  4   41   87   40   68   15   32   44   73   93
 94   82   79   64   38   70   83   11   52   80
 86   16    8   31   43    2   51   20   92   47
 65   77   88    9   81   53   71   67   50   22
 35    7   72   37    3   17   95   39   42   36
 30   46   66   57   27   48   19   96   34   63
 */
