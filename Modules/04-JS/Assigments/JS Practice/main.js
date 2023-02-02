// const button = document.getElementById("button-f")

// button.addEventListener("click", () => {
//     alert("I'm cumming!")
// })

var items = ["football","socks","t-shirts"]
console.log(items)

let schoolName = "Sigma School"
console.log("I'm studying at" + schoolName)

// JavaScript Basic (Factorial)
function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
         console.log('This is' + " " + i + " " + "multiplying in descending order until it reaches the smallest posstive number in this case 1 and the result should be:");
        result = result * i;
    } return result;
}

factorial(2);

// JavaScript Basic (Sum)

function sum(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    } 
    return document.write(total); 
} 

// odd or even?

function oddOrEven (n) {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};

// odd or even in ternary operator 
function oddOrEven (n) {
   return  n % 2 === 0 ? "even" : "odd";
};

// Possible matches 

const teams = ["Man Utd","Arsenal","Chelsea","Liverpool"];
for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams.length; j++) {
        if (j === i) {
            continue
        } else {
            console.log(teams[i] + " vs " + team[j]);
        }
    }
}

// Multi Multiplcation

function multiplyALL(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        // Help to print out which is which...
        console.log(`Sub-array ${i}: ${arr[i]}`);
        for (let j = 0; j <arr[i].length; j++) {
        // Help to print out which is which...
        console.log(`Element ${j}:${arr[i][j]}`);
        product *= arr[i][j];
    }
    return product;
    }
};



multiplyALL([[1,2],[3,4],[5,6,7]]);

// JavaScript Run Test ?????



// JS Practice 1
function reverseString(string) {
    let reverseString = " " 

    for (let i = string.length -1; i >= 0; i --) {
        reverseString = reverseString + string[i];
    }
        return reverseString;
} 

const helloReverse = reverseString('Hello') 
console.log(helloReverse); 

// JS Practice 2

function fizzBuzz() {
    for (let i = 0; i <=100; i++) {
        if (i % 5 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log(i); 
    }
};

//Word count checker

function checkerXO(str) {
    let strLowerCase = str.toLowerCase();
    let countX = 0;
    let countO = 0;

    for (let i in str) {
        if (str === 'x') {
            conntX++ ;
            
        } else if (str === 'o') {
            countO++ ;
        }
    }
   
    return countX === countO;
    // console.log("Output: " + "x:" + countX + " " + "o:" + countO);
}

function checkXO(string) {
    let lowecaseString = string.toLowerCase();
    let xCount = 0;
    let oCount =0;

    // I don't understand this for loop.... why suddenly we can assign characthers of lowercaseString???)
for (let characthers of lowecaseString) {
    if (characthers === 'x') {
        xCount++ 
    } else if (characthers === 'o') {
        oCount++
    }
}
    return xCount === oCount;
}

// Fibonacci

function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];

    const fib = [0, 1];

    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
