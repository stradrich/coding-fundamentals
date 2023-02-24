const addButton = document.createElement("input")
addButton.setAttribute("type","button")
addButton.setAttribute("value","Click Me!")

document.querySelector("body").appendChild(addButton);

// addButton.addEventListener("click", function() {
//     const newButton = document.createElement("input")
//     const newInput = document.createTextNode(addButton.value);
//     newButton.appendChild(newInput)
//     addButton.appendChild(newButton)
// })
