// #3

// Import prompt sync to ask for player input
const prompt = require('prompt-sync')()

// const name = prompt('Please enter player 1 name?')
// const name = prompt('Please enter player 1 score?')
// const name = prompt('Please enter player 2 name?')
// const name = prompt('Please enter player 2 score?')
// const name = prompt('Please enter player 3 name?')
// const name = prompt('Please enter player 4 score?')

// console.log(`Hello ${name}`);

let userInput = prompt('Please enter your name: ')
console.log(userInput)

function gameResult() {
    let playerScores = {}
   

    for (let i = 0; i < 3; i++) {
        let inputName = prompt(`Please enter player ${i} name?`)
        let inputScore = prompt(`Please enter player ${i} score?`)

        playerScores[inputName] = inputScore;
    }

}

gameResult();