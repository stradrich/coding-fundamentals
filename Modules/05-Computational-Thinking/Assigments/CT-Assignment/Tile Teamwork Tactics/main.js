function possibleBonus(A,B) {
const movements = [1,2,3,4,5,6];
let diceA = 0;
let diceB = 0;
// 1. Piece moves according to one dice with 6 possibilities 
// 2. Board game has normal tiles, two opponents, a and b.
// 3. Bonus = same tiles as another player
for (let i = 1; i <= 6; i++) {
    diceA += 1;
    if (diceA === diceB) {
        return true;
    }
    else false;
}




}





console.log(possibleBonus(3.7) === true)
console.log(possibleBonus(1.9) === false)
console.log(possibleBonus(5.3) === false)