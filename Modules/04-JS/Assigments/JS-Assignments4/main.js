function tetra(n) {
    return (n * (n+1) * (n+2) /6)
}

console.log(tetra(2) === 4)
console.log(tetra(5) === 35)
console.log(tetra(6) === 56)



// 2 - 4
// 3 - x (4 + n = x) 4 + 5 = 9
// 4 - y (x + n = y)  9 + 10 = 19
// 5 - 35 (y + n = 35) 19 + 15 = 34
// 6 - 56 (35 + n = z) 34 + 20 = 54 


// 1, 4, 10, 20, 35, 56, 84, 120, 165, 220
//...3, 6, 10, 15, 21, 28, 36, 45, 55.....

// formula Tn = (n * (n+1) * (n+ 2) / 6)