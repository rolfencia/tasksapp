const fs = require("fs");
const path = require("path");

let tasksFile = path.join(__dirname, "tasks.json");

// funcion para leer tareas y convertirlas en arrays.

function readTasks() {
  return JSON.parse(fs.readFileSync(tasksFile, "utf-8"));
}

// funcion para escribir tareas y convertirlas en un archivo json.

function writeTasks(data) {
  return fs.writeFileSync(tasksFile, JSON.stringify(data, null, " "));
}

// funcion para crear tareas y convertirlas en un archivo json y guardarlas en el archivo.

let tasks = {
  createTask(data) {
    let newData = readTasks();
    newData.push(data);
    writeTasks(newData);
  },

  selectTask() {
    let arrayTask = readTasks();
    arrayTask.forEach(function (element, index) {
      console.log(
        "Insert " +
          ' " ' +
          index +
          ' " ' +
          "the new status to change the task: " +
          element.title
      );
    });
  },

  editTaskStatus(data) {
    let editData = readTasks();
    editData.map(function (currentValue, index) {
      if (index == data[0] * 1) {
        return (currentValue.status = data[1]);
      }
    });
    writeTasks(editData);
  },

  listTask() {
    let arrayTask = readTasks();
    if (arrayTask.length > 0){
        arrayTask.forEach(function (element) {
            console.log(" ");
            console.log("* " + "title: " + element.title);
            console.log("- " + "description: " + element.description);
            console.log("> " +"status: " + element.status);
            console.log(" ");
          })
    }
    else {
        console.log("You don't have any task. Do you want to create a task? insert: " + '"create"');
    }
    },

    deleteTask(data){
    let actualData = readTasks();
    actualData.splice( actualData.findIndex(task => task.title === data[0]) , 1);
    writeTasks(actualData);
    }
};

module.exports = tasks;



// let nuevo_array = arr.map(function callback(currentValue, index, array) {
// console.log(writeTasks('haciendo la app de tareas'));
// console.log(createTask('haciendo la app de tareas'));

/* [
 {
    "title": "app de tareas",
    "description": "aprendiendo con amigos",
    "status": "en progreso"
   }
    {
    "title": "lalla",
    "description": "aprendiendo con amigos",
    "status": "en progreso"
   }
  ]
*/