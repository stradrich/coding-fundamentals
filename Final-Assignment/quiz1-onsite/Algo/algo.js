// 1. Reverse A String Using Loops.

function reverse(str) {
    // STEP 1: split str without empty space ""
    let newStr = str.split('');
    // console.log(newStr) // TEST

    // STEP 2: reverse splited str
    let reverseStr = newStr.reverse()
    // console.log(reverseStr) // TEST

    // STEP 3: return join reversed split str
    let joinArr = reverseStr.join('') 

    // console.log(joinArr); // TEST
    return joinArr;
}

console.log(reverse('abcde') == 'edcba')
console.log(reverse('hello') == 'olleh')
console.log(reverse('Greetings from The Hacker Collective') == 'evitcelloC rekcaH ehT morf sgniteerG')


// 2. Same Back And Forth - Is a string the same backwards and forwards? Return true if it is, false if it is not.

function sameBackAndForth(str) {
   // split, reverse, join
   let newStr = str.split('').reverse().join('')

   // count length, if not the same, palindrome is false  
   return newStr.length === str.length ? true : false  
}

console.log(sameBackAndForth("abba") === true)
console.log(sameBackAndForth("abcdefg") === false)



// 3. Given an integer, return an integer that is the reverse ordering of numbers.

function reverseInt(num) {
    let newNum;
    if (isNaN) {
       newNum = num.split('').sort().reverse().join('')
       return newNum;
    }
}

console.log(reverseInt(15) === 51)
console.log(reverseInt(981) === 189)
console.log(reverseInt(500) === 5)
console.log(reverseInt(-15) === -51)
console.log(reverseInt(-90) === -9)
