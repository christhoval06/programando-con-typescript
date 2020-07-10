//ARRAY
let a: number[] = [1, 12, 93, 5];
console.log("Arreglo 1", a);
let b: Array<string> = ["a", "apricot", "mango"];
console.log("Arreglo 2", b);

//TUPLE
let c: [number, string] = [11, "monday"];
console.log("Tupla 1", c);

let d: [number, string] = ["monday", 11]; 
console.log("Tupla 2", d);

let e: [number, string] = [13, "bat", "spiderman", 2];
console.log("Tupla 3", e);

e[13] = "elephant";
console.log("Posicion 13", e);
e[15] = false; // Error
console.log("Posicion 15", e);

//ENUM
enum Animals {cat, lion, dog, cow, monkey}
let a1: Animals = Animals.cat;
console.log("Enum", Animals[3]); // cow
console.log("Enum", Animals.monkey); // 4

enum Animal { cat = 1, lion, dog = 11, cow, monkey }
let b1: Animals = Animals.cat; 
console.log(Animal[3]); // undefined
console.log(Animal.monkey); // 13

//OBJECT
var hoy = new Date()

//JSON
miObjeto = JSON.parse(json_datos);


//TYPEOF
var miFuncion = new Function("5+2")
var forma = "redonda"
var tamano = 1
var hoy = new Date()

console.log(typeof miFuncion);'function'  
console.log(typeof forma);'string'
console.log(typeof tamano);'number'
console.log(typeof hoy); 'object'
console.log(typeof noExiste);'undefined'