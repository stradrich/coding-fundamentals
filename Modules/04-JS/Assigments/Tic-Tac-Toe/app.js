// Import prompt sync to ask for player input
const prompt = require('prompt-sync')()

// const name = prompt('What is your name?')
// console.log(`Hello ${name}`);

// -------------------------- Player ----------------------------------
// Current player
let currentPlayer = 'X'

// Winner of the game
let winner = 'X';

// Switch the current player after each play
function switchPlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else if (currentPlayer === 'O') {
        currentPlayer = 'X'
    }
}

// console.log(currentPlayer)
switchPlayer()
// console.log(currentPlayer)
// -------------------------- Board ----------------------------------
// Initialize the board
const board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' ',
    // let lineH = "|";
    // let lineV = "_";

    // horizontal lines
    // for (let i = 0; i < 9; i++) {
    //     console.log(lineH);
    // } // vertical lines
    // for (let j = 0; j < 6; j ++) {
    //     console.log(lineV);
    // } 

}

// Get empty positions from the game board
function getEmptyPositions() {
    // urgghhh this part is fucking confusing
    const boardEntries = Object.entries(board)
    entry = ['1',' ']
    const emptryEntries = boardEntries.filter(([_, marker]) => marker === ' ')
    const emptyPositions = emptryEntries.map(([position]) => position)

    // console.log(boardEntries);
    // console.log(emptryEntries)
    return getEmptyPositions
}

// Change board into arrays
getEmptyPositions();

// Validate the position input from player
function validatePosition(position) {
    // URGGGHHH.... this part is frustrating...
    if (position < 1 || position > 9) return false 
    // valid: 1 - 9
    // valid: position is empty
    if (board[position] !== ' ') return false 

    return true
}

// console.log(validatePosition[10]) // should be false
// console.log(validatePosition['5']) // should be false
// console.log(validatePosition[5]) // should be false
// console.log(validatePosition[8]) // should be true

// Display the game board
function displayBoard() {
    console.log(`
    ${board[1]} | ${board[2]} | ${board[3]} 
    -------------
    ${board[4]} | ${board[5]} | ${board[6]}
    -------------
    ${board[7]} | ${board[8]} | ${board[9]} 
    `)
}

displayBoard()

// Mark the board with the current player's marker
function markBoard(boardPosition) {
    const position = parseInt(boardPosition)

    const isValidPosition = validatePosition(position)

    if (!isValidPosition) return console.log('Invalid position')

    board[position] = currentPlayer
    switchPlayer()

    return true
}

// displayBoard()
// markBoard('3')
// displayBoard()

// Check if there is a winner
function checkWin() {
    const winCombos = [
        // horizontal
        [1,2,3],
        [4,5,6],
        [7,8,9],
        //vertical
        [1,4,7],
        [2,5,8],
        [3,6,9],
        //diagonal
        [1,5,9],
        [3,5,7],
    ]
    for (const combo of winCombos) {
            // console.log(combo);
            const [a, b, c] = combo
            
            // 1 + 1 = 2
            // 4/2 = 2
            // hence 1 + 1 = 4/2
            if ((board[a]) !== ' ' && board[a] === board[b] && board[b] === board[c]) {
                return true 
            }
    }
    return false 
}

checkWin()
// console.log(winner)

// Check if there is a tie
function checkTie() {
    const hasWinner = checkWin()

    if (hasWinner) return false 

    const emptyPositions = getEmptyPositions()
    if (emptyPositions.length > 0) return false 

    return true
}

console.log(checkTie())

// -------------------------- Game ----------------------------------
// Play: Start the game if play is true, else stop the game
let isPlaying = false

// Ask the player if they want to play
function askToPlay() {
    // const startGame = [["y"],["n"]];
    const possibleResponses = ['y','n','Y','N']
    const playerResponse = prompt('Would you like to play the game? (y/n)')

    const validResponse = possibleResponses.includes(playerResponse)

    if (!validResponse) return askToPlay()

    isPlaying = ['y', 'Y'].includes(playerResponse) 
    console.log(isPlaying)
}

askToPlay()

// Start the game
function startGame() {
    askToPlay()

    if (!isPlaying) return 
    
    displayBoard()

    while (isPlaying) {
        console.log(`It's ${currentPlayer}'s turn!`)
        const position = prompt(`Please choose 1-9 to place your marker: `)

        markBoard(position)
        displayBoard()

        const hasWinner = checkWin()
        if (hasWinner) {
            console.log(`${winner} has won!`)
            isPlaying = false
        }
    }

        const isTie = checkTie()
        if (isTie) {
            console.log(`It is a tie!`)
            isPlaying = false 
        }
    }

startGame()