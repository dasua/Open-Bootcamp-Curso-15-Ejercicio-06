/*
Crea un archivo JS que contenga las siguientes líneas
- [X] Una variable que contenga la lista de la compra (mínimo 5 elementos)
- [X] Modifica la lista de la compra y añádele "Aceite de Girasol"
- [X] Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- [X] Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- [x] Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- [X] Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- [X] Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- [X] Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- [X] Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
 */

let listaDeLaCompra = ['Manzanas','Huevos','Soja texturizada','Judías','Bonito del norte'];
console.log('Lista de la compra',listaDeLaCompra);

// Añadiendo nuevo elemento al final
listaDeLaCompra.push('Aceite de Girasol');
console.log('Lista de la compra con nuevo elemento',listaDeLaCompra);

// Eliminando el aceite de girasol
listaDeLaCompra.pop();
console.log('Lista de la compra quitando nuevo elemento',listaDeLaCompra);

let listaPeliculas = [
    {
        "titulo": "La lista de Schindler",
        "director": "Steven Spielberg",
        "fecha": new Date(Date.UTC(1993,5,21)),
    },
    {
        "titulo": " Greyhound: Enemigos bajo el mar",
        "director": "Aaron Schneider",
        "fecha": new Date(Date.UTC(2020,0,5)),
    },
    {
        "titulo": "Howard el pato",
        "director": "Willard Huyck",
        "fecha": new Date(Date.UTC(1986,9,24)),
    },
]
console.log('Lista de películas',listaPeliculas);

// Lista de películas recientes
let listaPeliculasRecientes = listaPeliculas.filter(obj => obj.fecha >= new Date(Date.UTC(2020,0,1)));
console.log('Lista de películas recientes',listaPeliculasRecientes);

// Lista de directores
let listaDirectores = listaPeliculas.map((valor) => valor.director);
console.log('Lista de directores', listaDirectores);

// Lista de titulos
let listaTitulos = listaPeliculas.map((valor) => valor.titulo);
console.log('Lista de títulos',listaTitulos);

let listaDirectoresYTitulos = listaDirectores.concat(listaTitulos);
console.log('Lista de directores y títulos',listaDirectoresYTitulos);

let listaDirectoresYTitulos2 = [...listaDirectores,...listaTitulos];
console.log('Lista de directores y títulos 2',listaDirectoresYTitulos2);
