const readlineSync = require('readline-sync');

console.log('---------- TODO APP ----------');
const options = ['View my todo list', 'Add new todo', 'Edit a todo item', 'Toggle complete a todo', 'Delete a todo', 'Quit app'];
const index = readlineSync.keyInSelect(options, 'What would you like to do?');
console.log(`You selected "${options[index]}"`);
