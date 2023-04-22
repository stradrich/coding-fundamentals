// In this assignment, you are going to build a todo app. 
// Here's a guide on what the app should have:

// User can run the app.
// User can view their todo list.
// User can add a new todo.
// User can edit an existing todo item.
// User can toggle a todo completed status.
// User can delete a todo.
// User can quit the app.

// 1. prompt user everytime... show again after user enter their answer
// ---------- TODO APP ----------
// What would you like to do?
// 1. View my todo list
// 2. Add new todo
// 3. Edit a todo item
// 4. Toggle complete a todo
// 5. Delete a todo
// 6. Quit app
// Enter (1/2/3/4/5/6):

// If enter 1 - two scenarios,
// Empty case: terminal > You have 0 todo!

// If enter 2 - 
// terminal > Enter your task:
// Once entered: terminal > # 1 (next list increment +1 the id) - whatever keyed in [insert X emoji because UNDONE yet]

// If enter 3 -
// prompt user: Enter the todo id you want to edit: (#3 example..)
// prompt user: Change the todo item to: (INPUT then update)

// If enter 4 -
// prompt user: Enter the todo id you want to toggle complete: (1 for example)
// Enter 1 to see list... (emotion change to TICKED)

// If enter 5 -
// prompt user: Which todo id you want to remove?
// Enter id... then enter 1 to see list.... it should be removed

// If enter 6 -
// exit app


// class TodoApp {
//     constructor() {
//       this.todos = [];
//       this.i =+ 1;
//       this.prompt = require('prompt-sync')()
//       this.promptMessage = prompt(`
//       ---------- TODO APP ----------
//       What would you like to do?
//       ${this.i}. View my todo list
//       ${this.i}. Add new todo
//       ${this.i}. Edit a todo item
//       ${this.i}. Toggle complete a todo
//       ${this.i}. Delete a todo
//       ${this.i}. Quit app
//       Enter (1/2/3/4/5/6):
//       `)
//     prompt(promptMessage)
//     prompt()

//     }
  
//     class run extends TodoApp {
      
      
    
//     if (i != Number && i ==='' &&  i < 0 && i > 5) {
//       return 'Invalid Option, please try again!'
//     }

//     if (i === 1) {
//       return TodoApp.viewList
      
//     }
//     if (i === 2) {
//       return TodoApp.addTodo
//     }
//     if (i === 3) {
//       return TodoApp.editTodo
//     }
//     if (i === 4) {
//       return TodoApp.toggleTodo
//     }
//     if (i === 5) {
//       return TodoApp.deleteTodo
//     }
//     if (i === 6) {
//       return TodoApp.quit
//     }

//     }
  
//     viewList() {
//       this.todos = [1];
//       if (i === "0") {
//         return "You have 0 todo!"
//       } else if (input === true) {
//         return input 
//       }
//     }
  
//     addTodo() {
//       this.todos = [2];
//       if (input === "") {
//         return 'Please enter a goal'
//       } else {
//         return input // with ❌
//       }
//     }
  
//     editTodo() {
//       this.todos = [3];
//       const editMessage = prompt('Enter the todo id you want to edit:')
//       if (input === number < 6  && input > 0) {
//         let newInput = appened(input[i]).splice(); // store input into new input
//         return newInput
//       } else {
//         return 'Please enter a valid number'
//       } 
//     }

//     toggleCompleteTodo() {
//       this.todos = [4];
//       if (input === number < 6  && input > 0) {
//         return input.append(`${[i]} ✅`) 
//       } else {
//         return input // with ❌
//       }
//     }
    
  
//     deleteTodo() {
//       this.todos = [5];
//       if (input === number < 6  && input > 0) {
//         input[i].pop(); // store input into new input
//         return newInput
//       } else {
//         return 'Please enter a valid number'
//       } 
//     }
  
//     quit() {
//       this.todos = [6];
//       return TodoApp1
//     }

//   }

// // Running the Todo App  
// const TodoApp1 = new TodoApp();
// TodoApp1.run()
  

