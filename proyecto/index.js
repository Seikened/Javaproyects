const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





/*Tarea: indicar de hecha o no la tarea 
-valor booleano y descripcion lo que nos da en resultado un "objeto"
*/
let taskList =[]

function addTask(taskList, taskDescription){
    taskList.push({done: false, description: taskDescription});

}



function printTaskList(taskList){
    // [] Comprar pan
    // [x] Comprar leche
    for (tarea of taskList){
        if (tarea.done){
            //Tarea realizada
            console.log("[x] "+tarea.description);
        }
        else{
            //Tarea realizada
            console.log("[ ] "+tarea.description);
        }
    }
}


//Primer modo: lextura de tareas necesarias

function ask_for_tasks(taskList){
    rl.question("Introduce una nueva tarea (fin si terminas) ", function(taskDesc){
        if(taskDesc == "fin"){
            console.log("Ya no se introducen mas tareas...");
            rl.close();
        }
        else{
            addTask(taskList, taskDesc);
            console.log("Tarea añadida, la lista de tareas actual es: ");
            printTaskList(taskList);
            ask_for_tasks(taskList);
        }
    });
}


ask_for_tasks(taskList);




// Sefundo modo: marcar tareas completadas


