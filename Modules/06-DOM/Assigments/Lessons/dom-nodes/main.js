// From this code, remove the "Wonders from Antiquity" 
// section (h2, p and the ul) and add a button at the bottom of the body.


document.querySelector('#content h2').remove()
document.querySelector('#content p').remove()
document.querySelector('#ancients').remove()

// Create button

const createButton = document.querySelector('input')
createButton.setAttribute('type', 'button')
createButton.setAttribute('value','This is a button!')

const body = document.querySelector('body')
body.appendChild(createButton);