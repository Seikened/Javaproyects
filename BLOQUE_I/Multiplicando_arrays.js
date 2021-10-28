/*En éste ejercicio se debe escribir una función que reciba dos parámetros.
Por un lado, debe recibir un primer parámetro que debe ser un vector de números. El segundo parámetro ha de ser un número.

La función debe multiplicar todos y cada uno de los números del array por el valor del segundo parámetro, 
haciendo que el array resultante sea un array como el original pero por cada número multiplicado.*/


var colection_of_numbers = [1,2,3,4,5,6,7,8,9,10];
var numero_a_multiplicar= 2;


function multiplicar(colection_of_numbers, numero_a_multiplicar){
    tabla = [];
    for (number of colection_of_numbers){
        tabla.push(numero_a_multiplicar * number);
        result = numero_a_multiplicar * number
        console.log(result);
        
    };
    console.log(tabla);

};



multiplicar(colection_of_numbers, numero_a_multiplicar);