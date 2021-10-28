// Formas de agrupar lógica
function proceso1(){
    console.log("Hago una cosa");
    console.log("luego hago otra cosa");
}



// Las podemos llamar
proceso1();
// Repetidamente
proceso1();

// hey



function ganerateFullName(nombre,apellido){

    console.log(nombre + " " + apellido);

}



ganerateFullName("Juan","Perez");


ganerateFullName("Fernando","Leon");



//Nos devuelve un valor
function calculateMidPoint(num1,num2){
    if (num1 == 0) {
        return 9
    } else {
        return (num1 + num2)/2;
    }
}

/*
Un ejemplode como un return rompe con un ciclo while seria asi:

function calculateMidPoint(num1,num2){
    var i = 0;
    while (true){
        return i;
    }
}
*/



var firstNumber = 0;
var secondNumber = 4;

var midPoint  = calculateMidPoint(firstNumber,secondNumber); /*Se le esta asigando el valor de un resultado matematico de una función llamada */
var puntomedio = calculateMidPoint(firstNumber,secondNumber); // Aquí pongo un ejemplo tonto de como llamar a una función y asi aprovechar el proceso

console.log("La media de " + firstNumber + " y " + secondNumber + " es " + midPoint);









