// 3. What Is Missing - Find the missing letter in the passed letter range and return it. 
// If all letters are present in the range, return undefined.

// ````js
// whatIsMissing("abcdefghijklmnopqrstuvwxyz") == undefined
// whatIsMissing("bcdf") == 'e'
// whatIsMissing("abcdefghjklmno") == 'i'
// ````


function whatIsMissing(str) {
    const alphabets = /^[a-zA-Z]+$/; //  * (allow empty spaces) 🔁 + (forbid empty spaces)
    // console.log(alphabets) // TEST ✅
   
   
    // STEP 1: Loop through str, check if it's the same length as alphabets
    for (let i = 0; i < str.length; i++) {
        if (str[i].length == alphabets.length) {
            return undefined;
    // STEP 2: Match alphabets.length so that its length will be the same as str.length  
        } else {
            // let newStr = str.match(alphabets)
            // console.log(newStr)
        }
    } 
    // STEP 3: Then check alphabetic order, store the missing alphabet into missingStr = str.split([i])

    
   
    
}

// whatIsMissing("abcdefghijklmnopqrstuvwxyz")
// console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz") == undefined)
console.log(whatIsMissing("bcdf") == 'e')
// console.log(whatIsMissing("abcdefghjklmno") == 'i')






