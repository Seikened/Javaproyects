var array = ["aa", "bb", 3, [1 , 2] ,{nombre: "Fernando", apellido: "Leon"} ]

var objeto = {
    nombre: "Jesus",
    apellido: "Francos",
    edad: 26,
    coches: ["Ferrari","Mustang", "Cupra"],
    direction: {
        calle: "Belen",
        numero: 102,
        colonia: "Las Flores"
    }
}



var item0 = array[0];
var item1 = array[1];

var indices = 4;
var item4 = array[indices].nombre;

var nombreObjeto = objeto.nombre;
var textoCalle = objeto.direction.calle;

console.log(nombreObjeto,textoCalle,item4)

var longitud = array.length;
console.log(longitud);

var isValidPosition = 50  >= 0 &&  50 < array.length; //Verificame que  el indice 50 este dentro de cero (el indice inicial), y que 50 sea menor que la longitud total de el array

console.log(isValidPosition)