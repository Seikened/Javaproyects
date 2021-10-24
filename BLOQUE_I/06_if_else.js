// control de flujo


// condicionales
var condicion = true;
var condicion2 = true;
if (condicion && condicion2) {
    //hago estos
    console.log("Estoy en el if");
} else {
    //hago esto otro si no se cumple
    console.log("Estoy en el else");
}
// continuo ejecutanndo el codigo


// Se puede encadenar
if (condicion1) {
    //entro aqui si se cumple la primera
} else if (condicion2) {
    //hago esto otro si no se cumple la primera
} else if (condicion3) {
    //hago esto otro si no se cumplen las anteriores
} else {
    //todos fueron casos no cumplidos
}

//se puede anidar
if (condicion1) {
    if (condicion2) {
        //hago esto
    }
} else {
        //hago esto 
}

