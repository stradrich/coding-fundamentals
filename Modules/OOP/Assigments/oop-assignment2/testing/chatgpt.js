class TodoApp {
    TODOS_MENU_VIEW = 1;
    TODOS_MENU_ADD = 2;
    TODOS_MENU_EDIT = 3;
    TODOS_MENU_TOGGLE = 4;
    TODOS_MENU_DELETE = 5;
    TODOS_MENU_QUIT = 6;
  
    constructor() {
      this.todos = [];
    }
  
    run() {
      while (true) {
        const prompt = require('prompt-sync')();
        const promptMessage = `
            ---------- TODO APP ----------
            What would you like to do?
            ${this.TODOS_MENU_VIEW}. View my todo list
            ${this.TODOS_MENU_ADD}. Add new todo
            ${this.TODOS_MENU_EDIT}. Edit a todo item
            ${this.TODOS_MENU_TOGGLE}. Toggle complete a todo
            ${this.TODOS_MENU_DELETE}. Delete a todo
            ${this.TODOS_MENU_QUIT}. Quit app
            Enter (1/2/3/4/5/6): `;
        const choice = prompt(promptMessage);
  
        switch (Number(choice)) {
          case this.TODOS_MENU_VIEW:
            this.viewList();
            break;
          case this.TODOS_MENU_ADD:
            this.addTodo();
            break;
          case this.TODOS_MENU_EDIT:
            this.editTodo();
            break;
          case this.TODOS_MENU_TOGGLE:
            this.toggleCompleteTodo();
            break;
          case this.TODOS_MENU_DELETE:
            this.deleteTodo();
            break;
          case this.TODOS_MENU_QUIT:
            this.quit();
            break;
          default:
            console.log('Invalid option, please try again!');
        }
      }
    }
  
    viewList() {
      if (this.todos.length === 0) {
        console.log('You have 0 todo!');
      } else {
        this.todos.forEach((todo) => {
          console.log(`#${todo.id} ${todo.text} ${todo.completed ? '✅' : '❌'}`);
        });
      }
    }
  
    addTodo() {
        const prompt = require('prompt-sync')();
        const description = prompt('Enter your task: ');
        this.todos.push({
          id: this.nextId++,
          description,
          completed: false,
        });
        console.log(`Added "${description}" to todo list.`);
      }

      editTodo() {
        const prompt = require('prompt-sync')();
        const id = Number(prompt('Enter the todo id you want to edit: '));
        const todo = this.todos.find((todo) => todo.id === id);
        if (!todo) {
          console.log('Invalid todo id.');
        } else {
          const description = prompt(`Change the todo item to (${todo.description}): `);
          todo.description = description;
          console.log(`Updated todo id ${id}.`);
        }
      }

}

const TodoApp1 = new TodoApp();
TodoApp1.run()