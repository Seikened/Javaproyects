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
    for (let i=0; i<taskList.length;i++){
        let tarea =taskList[i]
        if (tarea.done){
            //Tarea realizada
            console.log((i+1)+ ".- [x] "+tarea.description);
        }
        else{
            //Tarea realizada
            console.log((i+1)+ ".- [ ] "+tarea.description);
        }
    }
}


//Primer modo: lextura de tareas necesarias

function mode1(taskList){
    rl.question("Introduce una nueva tarea (fin si terminas) ", function(taskDesc){

        switch(taskDesc){
            case "fin":{
                console.log("Ya no se introducen mas tareas...");
                mode2(taskList);
                break;
            }
            case "exit":{
                rl.close();
                break;
            }
            default:{
                addTask(taskList, taskDesc);
                console.log("Tarea añadida, la lista de tareas actual es: ");
                printTaskList(taskList);
                mode1(taskList);
            }
        }
    });
}


// Sefundo modo: marcar tareas completadas
function markTask(taskList, index){
    if (index >= 0 && index < taskList.length){
    taskList[index].done = true;
    } else {
        console.log("Tarea no encontrada");
    }
}

function checkAllDone(taskList){
    for (let task of taskList)
        if (!task.done)
            return false;
        return true;
        
}


function mode2(taskList){
    printTaskList(taskList);

    rl.question("¿Que atrea has realizado?  (1-N) ", function(taskNumber){
        
        switch(taskNumber){
            case "fin":
            case "exit":
                console.log("Bye bye");
                rl.close();
                break;
            
            default:{
               markTask(taskList, taskNumber - 1);
               //Comprobar si las tareas estan hechas y cerrar el programa
               if(checkAllDone(taskList)){
                    console.log("Todas las tareas estan hechas, felicidades");
                    rl.close();
               }
               else{
                    mode2(taskList);
               }
            }
        }
    });

}




mode1(taskList);






