function missingLetter(str) {
    // Convert all input into lowercase for easy checking
    let strLC = str.toLowerCase();
    // Create all the input str possibilities 
    const alphabetOrder = "abcdefghijklmonpqrstuvwxyz";
    // Match the initials of input & alphabetOrder
    let strInitial = alphabetOrder.indexOf(strLC[0]);
      

    // From index 0, if smaller than the input....
        for (let i = 0; i < str.length + 1; i++) {
            // Compare and match input index with alphabet index
            if (strLC[i] !== alphabetOrder[strInitial + i]) {
                // Return missing letter (Only one or could be more?)
                return alphabetOrder[strInitial + i];
            }
        }
        return undefined;
    }
    
    console.log(missingLetter("abce")); // d
    console.log(missingLetter("abcdefghjklmno")); // i
    console.log(missingLetter("stvwx")); // u
    console.log(missingLetter("bcdf")); // e
    console.log(missingLetter("abcdefghijklmonpqrstuvwxyz")); // undefined
    console.log(missingLetter("ABCe")); //d
    console.log(missingLetter("aceg")); //b,d,f (Why only return b?)