const prompt = require('prompt-sync')() 

// const name = prompt('what is your name?')

// console.log(`Hello, ${name}`)

class guessingGame {
    constructor() {
        this.randomNumber = Math.floor(Math.random() * 101)
        this.numberGuessed = false
        this.guessesLeft = 5

    }

    guessNumber() {
        while (!this.numberGuessed) {
            if (this.guessesLeft === 0) {
                console.log('You have no guesses left, you have lost the game')
                break
            }

            console.log('')
            console.log(`You have ${this.guessesLeft} guess left.`)

            const userGuess = Number(prompt('Guess a number from 1 to 100: '))

            if (userGuess === this.randomNumber) {
                console.log(`You have guessed correctly! This number is ${this.randomNumber}`)
                this.randomNumber = true
                break
            } else if (userGuess < this.randomNumber) {
                console.log('Not quite, pick a bigger number!')
                this.guessesLeft -= 1
                continue
            } else if (userGuess > this.randomNumber) {
                console.log('Not quite, pick a smaller number!')
                this.guessesLeft -= 1
                continue
            }

            // If lost, reveal the real number?
        }
    }

    start() {
        console.log(this.randomNumber)
        // 1. Check if the user guessed the number
        while (!this.numberGuessed) {
            console.log('')
            console.log('------NUMBER GUESSING GAME------')
            console.log('What would you like to do?')
            console.log('1. Guess a number')
            console.log('2. Quit app')
            console.log('')


            // 2. Ask user for input (Guess the number? Quit game?)
            const option = prompt('Please enter your option (1/2): ')

             // 3. Run the task
             if (option === '1') this.guessNumber()
             if (option === '2') break
        }
       
       
    }
}

const game = new guessingGame()
console.log(game.randomNumber)
console.log(game.start())