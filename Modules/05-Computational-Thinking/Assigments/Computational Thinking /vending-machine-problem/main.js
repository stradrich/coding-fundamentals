function vendingMachine(product, payment, productNumber) {
// 1. Check product number 
// 2. Check payment (fail: amount < price, ok: amount - price (return coins)) 
// 3. Efficient ways to calculate % coins (least amount of coins.. if not enough 50cents, return smaller chance)
    const coins = [500, 200, 100, 50 , 20, 10]

}

// Products

const products = [
    {number: 1, price: 100, name: 'Orange juice'},
    {number: 2, price: 200, name: 'Soda'},
    {number: 3, price: 150, name: 'Chocolate snack'},
    {number: 4, price: 250, name: 'Cookies'},
    {number: 5, price: 180, name: 'Gummy bears'},
    {number: 6, price: 520, name: 'Chocolate bar'},
    {number: 7, price: 120, name: 'Crackers'},
    {number: 8, price: 220, name: 'Potato chips'},
    {number: 9, price: 80, name: 'Small snack'}
]

// Test Cases
console.log(JSON.stringify(vendingMachine(products, 200, 7)) === JSON.stringify({product: 'Crackers', change: [50, 20, 10]}))
console.log(JSON.stringify(vendingMachine(products, 500, 0)) === JSON.stringify('Enter a valid product number'))
console.log(JSON.stringify(vendingMachine(products, 90, 1)) === JSON.stringify('Not enough money for this product'))