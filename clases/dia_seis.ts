/**
 * Typescript's Bank
 * Tenemos 100 usuario en la base de datos y queremos hacer cuadre de caja (saber cuanto dinero hemos ganado.)
 * fórmula: ganancias = débitos - créditos
 * Las ganancias de Typescript's Bank son = ?
 */

interface Cliente {
  id: number;
  fullName: string;
  credit: number;
  debit: number;
  disponible?: number;
  saldo?: number;
}

const DB: Array<Cliente> = [
  {
    id: 1,
    fullName: "Ewen Izen",
    credit: 88124.69,
    debit: 57932.62
  },
  {
    id: 2,
    fullName: "Far Sammes",
    credit: 31993.3,
    debit: 44664.6
  },
  {
    id: 3,
    fullName: "Allina Gulliman",
    credit: 47877.19,
    debit: 62108.41
  },
  {
    id: 4,
    fullName: "Cooper MacTague",
    credit: 49989.7,
    debit: 27067.82
  },
  {
    id: 5,
    fullName: "Arlyn Outibridge",
    credit: 54394.09,
    debit: 88999.89
  },
  {
    id: 6,
    fullName: "Sydney Dykas",
    credit: 24744.32,
    debit: 49061.22
  },
  {
    id: 7,
    fullName: "Row Honatsch",
    credit: 83469.69,
    debit: 45946.95
  },
  {
    id: 8,
    fullName: "Karry Dreschler",
    credit: 52928.86,
    debit: 81983.58
  },
  {
    id: 9,
    fullName: "Bette Tildesley",
    credit: 37301.04,
    debit: 24445.76
  },
  {
    id: 10,
    fullName: "Ardra Rumke",
    credit: 6402.39,
    debit: 18174.73
  },
  {
    id: 11,
    fullName: "El Nears",
    credit: 46911.43,
    debit: 12219.98
  },
  {
    id: 12,
    fullName: "Grayce Vallis",
    credit: 19199.26,
    debit: 55500.06
  },
  {
    id: 13,
    fullName: "Glenine De La Cote",
    credit: 38115.97,
    debit: 7739.18
  },
  {
    id: 14,
    fullName: "Alethea Rickett",
    credit: 31136.9,
    debit: 60657.04
  },
  {
    id: 15,
    fullName: "Teodorico Aasaf",
    credit: 28872.35,
    debit: 16753.36
  },
  {
    id: 16,
    fullName: "Iolanthe Galbraith",
    credit: 12541.66,
    debit: 60129.44
  },
  {
    id: 17,
    fullName: "Akim Razzell",
    credit: 16917.31,
    debit: 40826.74
  },
  {
    id: 18,
    fullName: "Grete Kemme",
    credit: 62724.0,
    debit: 58868.15
  },
  {
    id: 19,
    fullName: "Pippy Maffi",
    credit: 7786.5,
    debit: 36901.59
  },
  {
    id: 20,
    fullName: "Hymie Manvelle",
    credit: 87941.89,
    debit: 9303.84
  },
  {
    id: 21,
    fullName: "Byrom Marklew",
    credit: 18038.39,
    debit: 61890.26
  },
  {
    id: 22,
    fullName: "Kristofor Amery",
    credit: 75267.75,
    debit: 31109.07
  },
  {
    id: 23,
    fullName: "Dylan Richards",
    credit: 28879.91,
    debit: 11811.49
  },
  {
    id: 24,
    fullName: "Fonz Jupe",
    credit: 64279.48,
    debit: 5378.17
  },
  {
    id: 25,
    fullName: "Trace Prawle",
    credit: 75824.07,
    debit: 58521.3
  },
  {
    id: 26,
    fullName: "Lacy Doorey",
    credit: 45215.06,
    debit: 60002.73
  },
  {
    id: 27,
    fullName: "Lanette Wethered",
    credit: 82836.08,
    debit: 38068.86
  },
  {
    id: 28,
    fullName: "Dita Freyne",
    credit: 56989.92,
    debit: 8673.83
  },
  {
    id: 29,
    fullName: "Hortensia Benduhn",
    credit: 43049.92,
    debit: 80372.35
  },
  {
    id: 30,
    fullName: "Juliet Golsthorp",
    credit: 41518.38,
    debit: 36007.06
  },
  {
    id: 31,
    fullName: "Vere Streeton",
    credit: 33984.6,
    debit: 21318.19
  },
  {
    id: 32,
    fullName: "Magnum Spring",
    credit: 3081.08,
    debit: 83076.42
  },
  {
    id: 33,
    fullName: "Edyth Wilks",
    credit: 75154.88,
    debit: 11365.09
  },
  {
    id: 34,
    fullName: "Thornie Atterbury",
    credit: 64350.66,
    debit: 1248.7
  },
  {
    id: 35,
    fullName: "Amelia Ricciardo",
    credit: 71221.15,
    debit: 88737.74
  },
  {
    id: 36,
    fullName: "Porty Moses",
    credit: 22903.57,
    debit: 24219.48
  },
  {
    id: 37,
    fullName: "Findley Pile",
    credit: 85734.65,
    debit: 67091.56
  },
  {
    id: 38,
    fullName: "Sabra Iddiens",
    credit: 83962.46,
    debit: 6058.51
  },
  {
    id: 39,
    fullName: "Tansy Littlefair",
    credit: 8816.95,
    debit: 47167.04
  },
  {
    id: 40,
    fullName: "Lemar Moylane",
    credit: 4150.86,
    debit: 45104.33
  },
  {
    id: 41,
    fullName: "Miles Caspell",
    credit: 24881.22,
    debit: 19977.51
  },
  {
    id: 42,
    fullName: "Sabina Maitland",
    credit: 21405.22,
    debit: 56948.99
  },
  {
    id: 43,
    fullName: "Ernestus Mathwin",
    credit: 50602.29,
    debit: 36582.12
  },
  {
    id: 44,
    fullName: "Phebe Danilowicz",
    credit: 52732.71,
    debit: 11208.45
  },
  {
    id: 45,
    fullName: "Zia Barense",
    credit: 21408.39,
    debit: 5047.42
  },
  {
    id: 46,
    fullName: "Nickolas O'Nolan",
    credit: 10876.94,
    debit: 84669.32
  },
  {
    id: 47,
    fullName: "Cassie Edsall",
    credit: 25527.22,
    debit: 26407.61
  },
  {
    id: 48,
    fullName: "Karie Doxey",
    credit: 25310.46,
    debit: 32914.04
  },
  {
    id: 49,
    fullName: "Garik Dabell",
    credit: 2306.09,
    debit: 23028.9
  },
  {
    id: 50,
    fullName: "Emelina Scarlon",
    credit: 48032.69,
    debit: 77027.04
  },
  {
    id: 51,
    fullName: "Meridel Cadge",
    credit: 6941.18,
    debit: 26534.35
  },
  {
    id: 52,
    fullName: "Steve Unger",
    credit: 4715.6,
    debit: 24774.97
  },
  {
    id: 53,
    fullName: "Iver Dally",
    credit: 27559.84,
    debit: 59616.07
  },
  {
    id: 54,
    fullName: "Ewen Thickens",
    credit: 3427.74,
    debit: 72139.13
  },
  {
    id: 55,
    fullName: "Jude Jeduch",
    credit: 41807.87,
    debit: 1027.45
  },
  {
    id: 56,
    fullName: "Doro Kempshall",
    credit: 18389.0,
    debit: 4093.59
  },
  {
    id: 57,
    fullName: "Gardy Storre",
    credit: 36447.39,
    debit: 71892.21
  },
  {
    id: 58,
    fullName: "Kilian Pryell",
    credit: 28081.35,
    debit: 36994.26
  },
  {
    id: 59,
    fullName: "Anni Highnam",
    credit: 68642.37,
    debit: 46712.62
  },
  {
    id: 60,
    fullName: "Karylin Shercliff",
    credit: 76317.77,
    debit: 58421.72
  },
  {
    id: 61,
    fullName: "Ainsley McGarrity",
    credit: 4977.68,
    debit: 35653.29
  },
  {
    id: 62,
    fullName: "Madelene Levis",
    credit: 26649.21,
    debit: 31308.42
  },
  {
    id: 63,
    fullName: "Marita Augie",
    credit: 33647.33,
    debit: 3062.1
  },
  {
    id: 64,
    fullName: "Leisha Muscroft",
    credit: 8107.55,
    debit: 55712.52
  },
  {
    id: 65,
    fullName: "Tiffany Buckston",
    credit: 57084.68,
    debit: 76939.46
  },
  {
    id: 66,
    fullName: "Annora Clemenza",
    credit: 15357.1,
    debit: 47129.58
  },
  {
    id: 67,
    fullName: "Archibold Weal",
    credit: 74764.24,
    debit: 60161.25
  },
  {
    id: 68,
    fullName: "Hi Goudie",
    credit: 74131.84,
    debit: 83831.65
  },
  {
    id: 69,
    fullName: "Fredra Ordelt",
    credit: 34165.52,
    debit: 52257.01
  },
  {
    id: 70,
    fullName: "Tootsie Cordall",
    credit: 11443.23,
    debit: 55399.95
  },
  {
    id: 71,
    fullName: "Hillie Reese",
    credit: 49386.07,
    debit: 20033.96
  },
  {
    id: 72,
    fullName: "Kelsey Slate",
    credit: 25869.28,
    debit: 53803.29
  },
  {
    id: 73,
    fullName: "Kelsey Snelgrove",
    credit: 45455.26,
    debit: 84799.22
  },
  {
    id: 74,
    fullName: "Zara Sammonds",
    credit: 64650.01,
    debit: 43526.37
  },
  {
    id: 75,
    fullName: "Inigo Burgill",
    credit: 16537.47,
    debit: 66841.41
  },
  {
    id: 76,
    fullName: "King London",
    credit: 52181.38,
    debit: 76592.68
  },
  {
    id: 77,
    fullName: "Margret Uzelli",
    credit: 83308.51,
    debit: 80662.59
  },
  {
    id: 78,
    fullName: "Ingram Keysall",
    credit: 20908.78,
    debit: 2483.21
  },
  {
    id: 79,
    fullName: "Kienan Delgardillo",
    credit: 84608.75,
    debit: 66376.36
  },
  {
    id: 80,
    fullName: "Borden Reolfo",
    credit: 34421.56,
    debit: 56272.0
  },
  {
    id: 81,
    fullName: "Elvira Jemmison",
    credit: 75646.29,
    debit: 44943.13
  },
  {
    id: 82,
    fullName: "Carlie Dorn",
    credit: 4892.13,
    debit: 80143.83
  },
  {
    id: 83,
    fullName: "Naoma Lewry",
    credit: 40667.23,
    debit: 68369.78
  },
  {
    id: 84,
    fullName: "Sheff Simmonds",
    credit: 75720.56,
    debit: 52240.99
  },
  {
    id: 85,
    fullName: "Theo Espinha",
    credit: 9563.14,
    debit: 62592.29
  },
  {
    id: 86,
    fullName: "Irena Buckleigh",
    credit: 40050.25,
    debit: 40394.85
  },
  {
    id: 87,
    fullName: "Gannie Tant",
    credit: 59079.99,
    debit: 24030.84
  },
  {
    id: 88,
    fullName: "Corrine Maycock",
    credit: 17498.66,
    debit: 24870.4
  },
  {
    id: 89,
    fullName: "Audrie Dusting",
    credit: 35888.08,
    debit: 83984.62
  },
  {
    id: 90,
    fullName: "Janka Tilling",
    credit: 15001.54,
    debit: 65240.32
  },
  {
    id: 91,
    fullName: "Homere Mannie",
    credit: 3020.65,
    debit: 21518.0
  },
  {
    id: 92,
    fullName: "Frieda Foale",
    credit: 56586.49,
    debit: 28411.14
  },
  {
    id: 93,
    fullName: "Sig Sandars",
    credit: 29698.07,
    debit: 9992.76
  },
  {
    id: 94,
    fullName: "Earlie Mourton",
    credit: 59740.9,
    debit: 60577.93
  },
  {
    id: 95,
    fullName: "Scott Sleite",
    credit: 50187.44,
    debit: 83051.05
  },
  {
    id: 96,
    fullName: "Cilka Burnett",
    credit: 76093.85,
    debit: 65326.84
  },
  {
    id: 97,
    fullName: "Tudor Phipps",
    credit: 54321.54,
    debit: 10215.62
  },
  {
    id: 98,
    fullName: "Lyle Doby",
    credit: 48941.99,
    debit: 69971.23
  },
  {
    id: 99,
    fullName: "Doti Jeanneau",
    credit: 29614.2,
    debit: 85100.34
  },
  {
    id: 100,
    fullName: "Junette Mullarkey",
    credit: 78683.15,
    debit: 81398.74
  }
];

let creditos: number = 0;
let debitos: number = 0;
let disponibles: number = 0;
let saldos: number = 0;

let clienteCreditos: Cliente = DB[0];
let clienteDebitos: Cliente = DB[0];
let clienteDisponibles: Cliente = DB[0];
let clienteSaldos: Cliente = DB[0];

for (let i = 0; i < DB.length; i++) {
  const cliente: Cliente = DB[i];

  const monto: number = Number((cliente.debit - cliente.credit).toFixed(2));

  if (monto > 0) {
    cliente.disponible = monto;
    disponibles += monto;
  } else {
    cliente.saldo = monto;
    saldos += monto;
  }

  if (cliente.credit > clienteCreditos.credit) {
    clienteCreditos = cliente;
  }

  if (cliente.debit > clienteDebitos.debit) {
    clienteDebitos = cliente;
  }

  if ((cliente.disponible || 0) > (clienteDisponibles.disponible || 0)) {
    clienteDisponibles = cliente;
  }

  if ((cliente.saldo || 0) * -1 > (clienteSaldos.saldo || 0) * -1) {
    clienteSaldos = cliente;
  }

  creditos += cliente.credit;
  debitos += cliente.debit;
}

DB.push({
  id: 101,
  fullName: "Typescript's Bank",
  credit: Number(creditos.toFixed(2)),
  debit: Number(debitos.toFixed(2)),
  disponible: Number(disponibles.toFixed(2)),
  saldo: Number(saldos.toFixed(2))
});
console.log(
  `Las ganancias de Typescript's Bank son = ${(debitos - creditos).toFixed(2)}`
);
console.table(DB);
console.log({
  clienteCreditos,
  clienteDebitos,
  clienteSaldos,
  clienteDisponibles
});
