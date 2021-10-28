/*
var contador =0;
var N = 50;

while (contador < N+1) {
    console.log("Contador: " + contador);
    contador++;
}


do {

} while (contador)




for (var i = 0; i < N; ++i) {
    console.log("Contador: " + i);
}
*/


var array = [10, 20, 30, 40]
var estudiantes = [
    {
        nombre: "Juan",
        nota:5
    },
    {
        nombre: "Pedro",
        nota:8
    },
    {
        nombre: "Maria",
        nota:10
    },
    {
        nombre: "Ana",
        nota:1
    }
]

for (var i = 0; i<estudiantes.length; ++i) {
    console.log('Esto es un FOR',estudiantes[i].nombre,estudiantes[i].nota);
}



//Iterar sobre vectores y objetos
for (let estudiante of estudiantes) {
    console.log(estudiante.nombre,estudiante.nota);
}


var estudianteAuxuliar = {
    nombre: "Juan",
    nota:5
}

for(let key in estudianteAuxuliar) {
    console.log(key, estudianteAuxuliar[key]);
}
