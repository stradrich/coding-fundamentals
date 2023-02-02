function sum(numbersArray) {
    let total = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        total = total + numbersArray[i];
    }
    return total;
}

console.log(sum([1,2,3,4]) === 10) // output: 10
console.log(sum([-3,5,19,-6]) === 15) // output: 15

console.log(sum([1,2,3,4])) // output: 10
console.log(sum([-3,5,19,-6]))// output: 15

console.log(sum([1,2,3,4,5,6,7,8])) 