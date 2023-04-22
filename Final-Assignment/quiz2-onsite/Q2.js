// 2. Angry Grandma - You will write a function that takes in a String. The function should return a new sentence where every word is yelled. 
// A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)
// ````js
// deafGrandma("I have a bad feeling about this") == "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!"
// ````

function deafGrandma(str) {
    // STEP 1:
    // split str by empty spaces, then store inside newStr
    let newStr = str.split(' ')
    console.log(newStr)  // TEST ✅

    // STEP 2:
    // join newStr with '!! and one empty space, extra 3 length' and convert newStr to uppercase 
    let loudStr = newStr.join('!! ')
    console.log(loudStr.toUpperCase()) // TEST ✅

    // STEP 3:
    // check str and newStr if they've matching alphabets
    if (str != newStr) {
    console.log(str != newStr) // TEST ✅
    return false 
    }
  
}

deafGrandma("I have a bad feeling about this") == "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!"
// console.log(deafGrandma('Phark the herold angel sing!'))
