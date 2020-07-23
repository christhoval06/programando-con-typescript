// var

// const
// let

let firstName: string = "Christhoval";
const lastName: string = "Barba";

firstName = "Reyd";
// lastName = 'Rivas';

// tipos primitivos
// boolean, string, number
// Boolean, String, Number

enum BloodType {
  A,
  B = 1,
  AB = 2,
  O = 3
}

console.log(BloodType.A);

// interface
interface FullName {
  firstName: string;
  surName?: string;
}

const me: FullName = {
  firstName: "Christhoval"
};

// type

type FullName2 = {
  firstName: string;
  surName?: string;
};

const me2: FullName2 = {
  firstName: "Christhoval"
};

const bread: string = "🍞";
const lettuce: string = "🥬";
const lista: Array<string> = ["🍞", "🥚"];

lista.push("🥩", "🧀", "🧃", "🥬");

console.table(lista);

lista.pop();

console.table(lista);

lista.shift();
console.table(lista);

// make a sandwich
let sandwich: Array<string>;

const [egg, meat, cheese, ...rest] = lista;

const eggsFries: string = "🍳";

sandwich = [bread, eggsFries, lettuce, cheese, meat, lettuce, bread];

console.table(sandwich);
console.log({ rest });
console.log(sandwich.join());

// =======================

/**
 * Sistema para rentar peliculas
 *
 * - listado de peliculas
 * - inventario
 * - busquedas
 * - alquiler
 * - clientes
 */

// types

enum Genres {
  Action,
  Comedy,
  Crime,
  Adventure,
  Drama,
  Fantasy,
  Horror,
  Romance
}

interface Movie {
  id: string;
  title: string;
  year: string;
  genres: Array<Genres>;
  duration?: number;
}

interface Stock {
  [movieId: string]: number;
}

interface Customer {
  id: string;
  name: string;
}

type CustomerID = string;

interface Rental {
  [movieId: string]: Array<CustomerID>;
}

interface BanPelis {
  customers: Array<Customer>;
  movies: Array<Movie>;
  stock: Stock;
  rental: Rental;
}

const movies: Array<Movie> = [
  {
    id: "1",
    title: "Game Night",
    year: "2018",
    genres: [Genres.Action, Genres.Comedy, Genres.Crime],
    duration: 100
  },
  {
    id: "2",
    title: "Area X: Annihilation",
    year: "2018",
    genres: [Genres.Adventure, Genres.Drama, Genres.Fantasy]
  },
  {
    id: "3",
    title: "Hannah",
    year: "2017",
    genres: [Genres.Drama],

    duration: 95
  },
  {
    id: "4",
    title: "The Lodgers",
    year: "2017",
    genres: [Genres.Drama, Genres.Horror, Genres.Romance],

    duration: 92
  },
  {
    id: "5",
    title: "Beast of Burden",
    year: "2018",
    genres: [Genres.Action, Genres.Crime, Genres.Drama]
  }
];

const banPelis: BanPelis = {
  customers: [],
  movies,
  stock: {},
  rental: {}
};

banPelis.stock[banPelis.movies[0].id] = 4;
banPelis.stock[banPelis.movies[1].id] = 3;
banPelis.stock[banPelis.movies[2].id] = 3;

// Buscando una pelicula

const movieToSearch: string = (
  prompt("Que pelicula buscas?") || ""
).toLowerCase();
let movieSearched: Movie | undefined = undefined;

// i = i + 1

console.log({ movieToSearch });
console.time("movieToSearch");
for (let i = 0; i < banPelis.movies.length; i++) {
  const movie: Movie = banPelis.movies[i];
  if (movie.title.toLowerCase().search(movieToSearch) > -1) {
    movieSearched = movie;
    break;
  }
}
console.info("movieSearched", movieSearched);
console.timeEnd("movieToSearch");

function search(movie: Movie): boolean {
  const title: boolean = movie.title.toLowerCase().search(movieToSearch) > -1;
  const duration: boolean = movie.duration === Number(movieToSearch);
  return title || duration;
}
console.time("movieToSearchOptimized");
movieSearched = banPelis.movies.find(search);
console.info("movieSearched", movieSearched);
console.timeEnd("movieToSearchOptimized");

banPelis.customers.push({
  id: "c_1",
  name: "C. Barba"
});

if (movieSearched) {
  banPelis.rental[movieSearched.id] = ["c_1"];
}

console.log("banPelis", banPelis);
