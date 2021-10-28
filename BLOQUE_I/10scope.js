//El scope es el contexto donde una variable es visible para
// existen 2 scopes principales: global y local



//Scope Global: Toda variable que está fuera de una función es global
var variableGlobal = 1;

function global(){
    console.log(variableGlobal);
}

global();
console.log(variableGlobal);



// Scope Local: solo visible dentro de una función es local
var variableLocal = 4;

function local(){
    var variableLocal = 2;
    console.log(variableLocal);
}

local();

console.log(variableLocal);  

//En javascript moderno (>2015) existe let
// let define scope de bloque
// un scope de bloque es todo lo que se encuentra entre { y }
/*
if (true){
    //Esto es un bloque
    let variable = 0;
}

while (true){
    //Esto es otro bloque
    let variable = 0;

}


for (let i = 0; i < 10; i++){
    //Esto es otro bloque
    let variable = 0;
}

*/






var condision1 = true;
if (condision1){
    //Esto es un bloque
    let a = 100;
    console.log(a);
}
 
/* 
console.log(a);  Esto no se puede ejecutar porque
"a" no está definida dentro del scope de condicion1
*/


const variableConstante = 5;
const PI = 3.141592653589793238462643383;

