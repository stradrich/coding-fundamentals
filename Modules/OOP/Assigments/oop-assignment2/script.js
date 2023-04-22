// In this assignment, you are going to build a todo app. 
// Here's a guide on what the app should have:

// User can run the app.
// User can view their todo list.
// User can add a new todo.
// User can edit an existing todo item.
// User can toggle a todo completed status.
// User can delete a todo.
// User can quit the app.




const prompt = require('prompt-sync')();

class TodoApp {
  constructor() {
    this.todos = [];
    this.i = 1;
    // 1. prompt user everytime... show again after user enter their answer
    this.promptMessage = `
      ---------- TODO APP ----------
      What would you like to do?
      ${this.i}. View my todo list
      ${this.i + 1}. Add new todo
      ${this.i + 2}. Edit a todo item
      ${this.i + 3}. Toggle complete a todo
      ${this.i + 4}. Delete a todo
      ${this.i + 5}. Quit app
      Enter (1/2/3/4/5/6):
    `;

    this.color = `
        Black: \x1b[30m
        Red: \x1b[31m
        Green: \x1b[32m
        Yellow: \x1b[33m
        Blue: \x1b[34m
        Magenta: \x1b[35m
        Cyan: \x1b[36m
        White: \x1b[37m`
  }
  
  run() {
    let input = prompt(this.promptMessage);

    switch (parseInt(input)) {
       default:
            console.log("Invalid input. Please try again.",'\x1b[31m'); // turn red
            break;

      case this.i: 
        // View todo list
        // If enter 1 - two scenarios,
        // Empty case: terminal > You have 0 todo!
        console.log(' You have 0 todo!')
        // console.log(this.todos);
        break;

      case this.i + 1: // OPTION 1
        // Add new todo
        // If enter 2 - 
        // terminal > Enter your task:
        // Once entered: terminal > # 1 (next list increment +1 the id) - whatever keyed in [insert X emoji because UNDONE yet]
        let newTodo = prompt("\x1b[33m","Enter new todo: "); // turn yellow
        this.todos.push({task: newTodo, progress: '❌'}); // take input, store into newTodo and push it into todos []
        break;

      case this.i + 2: // OPTION 2
        // Edit a todo item
        // If enter 3 -
        // prompt user: Enter the todo id you want to edit: (#3 example..)
        // prompt user: Change the todo item to: (INPUT then update)
        let indexToEdit = prompt( "\x1b[32m","Enter index of todo to edit: "); // turn green
        let newTask = prompt( "\x1b[32m","Enter new task for todo: "); // turn green
        this.todos[indexToEdit].task = newTask; // access todos [], match inputed index, then access task and rewrite it with new input from newTask
        break;

        case this.i + 3: // OPTION 3
          // Toggle complete a todo
          // If enter 4 -
          // prompt user: Enter the todo id you want to toggle complete: (1 for example)
          // Enter 1 to see list... (emotion change to TICKED)
          let indexToToggle = prompt("\x1b[35m","Enter index of todo to toggle: ");
          let todo = this.todos[indexToToggle];
          if (todo.progress === '✅') { // If the progress status is currently marked as '✅' (which means the task is completed), it will change the progress status to '❌' (which means the task is not completed).
            todo.progress = '❌';
          } else if (todo.progress === '❌') { //  If the progress status is currently marked as '❌' (which means the task is not completed), it will change the progress status to '✅' (which means the task is completed).
            todo.progress = '✅';
          } else {
            console.log('\x1b[31m', "Invalid input. Please try again."); // turn red
          }
          break;

      case this.i + 4: // OPTION 4
        // Delete a todo
        // If enter 5 -
        // prompt user: Which todo id you want to remove?
        // Enter id... then enter 1 to see list.... it should be removed
        let indexToDelete = prompt("Enter index of todo to delete: ");
        this.todos.splice(indexToDelete, 1);
        break;

      case this.i + 5: // OPTION 5
        // Quit app
        // If enter 6 -
        // exit app
        console.log("\x1b[36m","Goodbye!"); // turn cyan
        return;
     
    }

    // Recursively run the app until user quits
    this.run();
  }

  
}


// Running the Todo App  
const TodoApp1 = new TodoApp();
TodoApp1.run();



// "workbench.colorCustomizations": {
//   "terminal.background":"#131212",
//   "terminal.foreground":"#dddad6",
//   "terminal.ansiBlack":"#1D2021",
//   "terminal.ansiBrightBlack":"#665C54",
//   "terminal.ansiBrightBlue":"#0D6678",
//   "terminal.ansiBrightCyan":"#8BA59B",
//   "terminal.ansiBrightGreen":"#237e02",
//   "terminal.ansiBrightMagenta":"#8F4673",
//   "terminal.ansiBrightRed":"#FB543F",
//   "terminal.ansiBrightWhite":"#FDF4C1",
//   "terminal.ansiBrightYellow":"#FAC03B",
//   "terminal.ansiBlue":"#00a1f9",
//   "terminal.ansiCyan":"#8BA59B",
//   "terminal.ansiGreen":"#95C085",
//   "terminal.ansiMagenta":"#8F4673",
//   "terminal.ansiRed":"#FB543F",
//   "terminal.ansiWhite":"#A89984",
//   "terminal.ansiYellow":"#FAC03B"
// },