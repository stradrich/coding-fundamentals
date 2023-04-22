// 1. SumArr - Find the sum of all items in an array, using loops.
// ````js
// // sumArr([1,2,3,4,5]) == 15
// // sumArr([1000,2000,44,55,22]) == 3121
// // sumArr([123,456,789]) == 1368
// ````

function sumArr(numArr) {
    let result = 0;

    for (let i = 0; i < numArr.length; i++) {
        result = result + numArr[i]
        // console.log(result) 
        
    }
   
    return result;    
}

console.log(sumArr([1,2,3,4,5]) == 15)
console.log(sumArr([1000,2000,44,55,22]) == 3121)
console.log(sumArr([123,456,789]) == 1368)

