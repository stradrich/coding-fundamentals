function factorial(anyNumber) {
// 0! and 1! both equals to 1 (Not sure why 0! = 1, must be some mathematical stuff)
if (anyNumber === 0 || anyNumber === 1) 
return 1;

// We need a reverse iteration so that it takes that particular INT as the highest value and multiply 
// backwards until it reaches the lowest positive INT
for (let i = anyNumber - 1; i >= 1; i--) {
    anyNumber *= [i];
}
    return anyNumber;
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)

factorial(6);
