1. SumArr - Find the sum of all items in an array, using loops.
````js
// sumArr([1,2,3,4,5]) == 15
// sumArr([1000,2000,44,55,22]) == 3121
// sumArr([123,456,789]) == 1368
````

2. Angry Grandma - You will write a function that takes in a String. The function should return a new sentence where every word is yelled. A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)
````js
// deafGrandma("I have a bad feeling about this") == "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!"
````

3. What Is Missing - Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

````js
// whatIsMissing("abcdefghijklmnopqrstuvwxyz") == undefined
// whatIsMissing("bcdf") == 'e'
// whatIsMissing("abcdefghjklmno") == 'i'
````

// const alphabets = /^[a-zA-Z]+$/; //  * (allow empty spaces) 🔁 + (forbid empty spaces)
 // const capAlphabets = alphabets.toUpperCase();
  // console.log(capAlphabets) // TEST ✅

4. Swap - Do a swap on the sentence using the arguments provided and return the new sentence.
- `First argument` is the sentence to perform the `search` and `replace` on (sentence)
- `Second argument` is the word that you want to `change` (before)
- `Third argument` is what you will be `changing` the second argument with (after)
- `Preserve the case of the first character` in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
  
```
Hint 1: Check first letter case. toUpperCase()
Hint 2: Find the index where before is in the string. indexOf()
Hint 3: .splice()
Hint 4: Make it into arrays first. Easier to manipulate.
```
````js
// swap("His name is Tom", "Tom", "john") == "His name is John".
// swap("Let us get back to more Coding", "Coding", "algorithms") == "Let us get back to more Algorithms".
// swap("This has a spellngi error", "spellngi", "spelling") == "This has a spelling error".
````