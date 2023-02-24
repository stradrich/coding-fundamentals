console.log('Lets build a todo app')

// Select DOM Elements
const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector('#todoList')
const addButton = document.querySelector('#addButton')

// todoInput.value = 'Hello'

// Proving that you've successfully selected all the required DOM element later on 
console.log({
    todoInput,
    todoList,
    addButton,
})

// Event Listener: Add Todo Button
addButton.addEventListener('click', addTodo)


// Feature: Add Todo
function addTodo (e) {
    // TESTING 
    // e.preventDefault()
    // console.log('You are clicking the add todo button')
    console.log(todoInput.value)

    // id 
    const id = todoList.children.length + 1
    

    // value
    const item = todoInput.value 
    if (!item) return;

    const newTodo = `
    <li id = "${id}">
        <span done>${item}</span>
        <button onclick="completeTodo(${id})">Complete</button>
        <button onclick="deleteTodo(${id})">Delete</button>
    </li>
    `

    //append the new todo, at the last of todolist 
    todoList.innerHTML += newTodo

    // clear input
    todoInput.value = '' 
}

function findTodo(id) {
    return todoList.children[id - 1]
}

// Feature: Complete Todo
function completeTodo(id) {
    const todoItem = findTodo(id)

    // console.log(todoItem.firstElementChild)
    const itemSpan = todoItem 
    itemSpan.toggleAttribute('done')

    const completeStatus = itemSpan.getAttribute('done') === null ? false : true
    const completeButton = todoItem.children[1]
    completeButton.innerText = completeStatus ? 'Undo' : 'Complete'

}

// Feature: Delete Todo
function completeTodo() {
    const todoItem = findTodo(id)

    todoItem.classList.add('deleted_todo')
}