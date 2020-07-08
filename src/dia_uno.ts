// Tipos de Datos
/*
 * Datos Primitivos
 */

// string = cadena
// number = número
// boolean = cierto o falso

// Creando un variable
/*
 * Tipo de  variable
 * const = constante
 * let = variable
 *
 * [Tipo de variable] [nombre de la variable] : [tipo de dato]   = [valor];
 */

// nomenclatura de variables
// lowerCammelCase
// Elemplos : miNombre, colorFavorito, fechaNacimiento

// numerico
const edad: number = 30;
console.log("edad", typeof edad);
const decimal: number = 30;

// bases numericas
const hex: number = 0xc;
const octal: number = 0o747;
const bin: number = 0b1010;

const dolares: number = 99.99;

// cadenas
// se define con ", ' o `
const nombre: string = "Christhoval";
const apellido: string = "Barba";
// plantillas de cadenas
const nombreCompleto: string = `${nombre} ${apellido}`;

// imprimir
console.log("nombre", nombreCompleto, "edad", edad);

// boleanos
const esEstudiante: boolean = false;

// reasignacion variable

let miEdad: number = 40;
console.log("miEdad", miEdad);
miEdad += 1; // miEdad = miEdad + 1;
console.log("miEdad", miEdad);
miEdad -= 1; // miEdad = miEdad - 1;
console.log("miEdad", miEdad);
miEdad *= 1; // miEdad = miEdad * 1;
console.log("miEdad", miEdad);
miEdad /= 1; // miEdad = miEdad / 1;
console.log("miEdad", miEdad);

// convirtiendo a boleano (operadores lógicos)
// > : mayor
// < : menor
// == : igual
// != : distinto
// >= : mayor igual
// <= : mayor igual

const soyLegal: boolean = miEdad >= 18;
const adultoJoven: boolean = miEdad <= 35;

console.log({ soyLegal, adultoJoven });

// Operando de manera lógica
// && = y
// || = o
// ! = no

const joven: boolean = soyLegal || adultoJoven;
console.log("joven", joven);

const nota: string = "hola";

const esVacio: boolean = !nota;
console.log("esVacio", esVacio);

// nulo o indefinido

let contador: string | undefined | null = undefined;

console.log("contador", typeof contador);
