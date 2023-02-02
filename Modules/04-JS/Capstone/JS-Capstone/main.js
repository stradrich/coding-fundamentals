function missingLetter(str) {
const alphabetOrder = 'abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let newOrder = alphabetOrder.split('')
let newStr = str.toLowerCase().split('');

//

if (newOrder === newStr) {
    for (let i = 0; i <= newStr.length; i++) {
        console.log(newStr[i].sort().join(''));
    }
}
    return newStr;
}

missingLetter("abce"); // d
missingLetter("abcdefghjklmno"); // i
missingLetter("stvwx"); // u
missingLetter("bcdf"); // e
missingLetter("abcdefghijklmonpqrstuvwxyz"); // undefined


// Step1: define alphabets order, sort()
// Step2: split str to lower case
// Step3: count length of str, match the initials with alphabet orders, use the same length as str,
// proceed with the alphabetic order check. Use LOOP.
// Step 4: if order not the same, print out the missing alphabets
// Step 5: If all the same, joint alphabets and return undefined.

