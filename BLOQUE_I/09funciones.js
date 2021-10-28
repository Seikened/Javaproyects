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




//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲ Esto es programación funcional ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲


// Las funciones son un tipo de dato, por lo que podemos utulizarlo como variable
var logicaSaludar = function(nombre){ //esta función NO tiene nombre
    console.log("Hola!, mi nombre es " + nombre); //En esta variable guardate toda esta función
}

// En logicaSaludar tenemos la referencia a la función
// Podemos hacer algo tan loco como pasar una función a otra.
function saludarSuperEducadamente(FuncionPasadaPorParametro, nombre){
    console.log("Disculpe, perdone que le moleste, pero...");
    // Ejecutamos la función que hemos recibidos
    FuncionPasadaPorParametro(nombre); /*Aquí le mando el dato a la variable para que lo procese como función 
    [logicaSaludar=saludaSuperEducadamente=FuncionPasadaPorParametro=FuncionPasadaPorParametro(nombre) =
    = console.log("Hola!, mi nombre es " + nombre);]*/
    console.log("Espero pasar una muy buena velada con usted");
}


//Si lo ejecutamos todo:
saludarSuperEducadamente(logicaSaludar,"Fernando Leon");


/*Segun yo que entiendo de este ejercicio, es que tenemos una
 funcion que se convierte en una variable asi esta nos permite 
 meterla como variable en "Otra función" asi llevando una función
 dentro de otra, al final es un rollo muy interesante pero se llaman 
 de una forma valida pasando de ser una función dentro de una variable, 
 a ser una variable, despues una función que llama a la variable, se le 
 asigna el valor y lo imprime en conjunto*/ 


 