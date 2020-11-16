const tasks = require("./appFunctions");
const { createTask } = require("./appFunctions");
const taskApp = require("./appFunctions");

// creo un process para recibir el parametro ingresado en la terminal. Esto funciona

let action = process.argv[2];
let parameter = process.argv.slice(3); // 


switch (action) {
  case "create":
    if (parameter.length > 0) {
      let task = {
        title: parameter[0],
        description: parameter[1],
        status: parameter[2],
      };
      tasks.createTask(task);
    } else {
      console.log("Ouch! You have to tell what to do");
    }
    break
  case "edit":
    if (parameter.length == 0){
        tasks.selectTask()
    }
    else if (parameter.length > 1){
       tasks.editTaskStatus(parameter);
    }
    else {
        console.log("You have to choose a task to change");
    }
    break
    case "list":
    tasks.listTask();  
    break
    case "delete":
    if (parameter.length > 0){
        tasks.deleteTask(parameter)
    }
    else {
        console.log("You have to choose a task to delete");
    }      
}

  // console.log("You don't have any task. Do you want to create a task? insert: " + "create");


