var booleanoCierto = true;
var booleanoFalso = false;


var a = '10';
var b = 10;

var aMayorQueb = a > b ;



// ><  >=   <=    == ===  !=  !==

//console.log(a == b);

//console.log(a === b);

var rango_inicio = 1;

var rango_final = 100;

var numero_a_comparar = 101;

var mayor_que_inicio = numero_a_comparar > rango_inicio;
var menor_que_final = numero_a_comparar < rango_final;
var dentro_de_rango = mayor_que_inicio && menor_que_final;

//console.log(dentro_de_rango)

/* AND (&&) Tabla de verdad
1 && 1 : 1
1 && 0 : 0
0 && 1 : 0
0 && 0 : 0
*/

/* OR (||) Tabla de verdad
1 || 1 : 1
1 || 0 : 1
0 || 1 : 1
0 || 0 : 0
*/

var ha_hecho_el_trabajo = false;
var nota_examen = 7;
var falta_tecnica = true;
var aprobado = (ha_hecho_el_trabajo || nota_examen>=5 ) && !falta_tecnica ;

console.log(aprobado)