function vendingMachine(product, payment, productNumber) {
    // 1. Find product that is selected
    const productSelected = product.find((product) => product.number === productNumber)
    // console.log(productSelected);
    
    // If not found
    // Error: Enter a valid product number 
    if (productSelected === undefined) return 'Enter a valid product number'

    const {name: productName, price: productCost } = productSelected
    // console.log(productName, productCost);
     

    // 2. Check if payment lesser than cost
    // Error: Not enough money for this product. 
    if (payment < productCost) return 'Not enough money for this product'

    // 3. Optimise returning balance, amount to return to customer 
    let balance = payment - productCost
    // console.log(balance) 

    // if (balance === 0)  return {product: productName, change: []} // return empty array is nothing to return
   // Casher
   const coins = [500, 200, 100, 50 , 20, 10].filter((coin) => coin <= balance) // available change
    // Customer's change
    let change = [];
    // console.log(coins)

    // Logic 
    // Get data. i.e Product 1, we pay 120... means we need balance of 20 cents
    // what if my balance is 80.... my avaialbe would be anything lesser than 80
    // Balance; 80
    // [50] - Balance: 30 
    // [50, 20] - Balance: 10
    // [50, 20, 10] - Balance; 0, done.
    // for loop, each of the coin: how many times I can return?
    // recalculate the balance

    for (let coin of coins) {
        const coinCount = Math.floor(balance/ coin)
        const coinChange = Array.from({length: coinCount}, () => coin)

        change.push(...coinChange)
        balance = balance % coin 
    }

    return {
        product: productName, change
    }
    
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
    
// Test
// console.log(vendingMachine(products, 120, 1))

    // Test Cases
    console.log(JSON.stringify(vendingMachine(products, 200, 7)) === JSON.stringify({product: 'Crackers', change: [50, 20, 10]}))
    console.log(JSON.stringify(vendingMachine(products, 500, 0)) === JSON.stringify('Enter a valid product number'))
    console.log(JSON.stringify(vendingMachine(products, 90, 1)) === JSON.stringify('Not enough money for this product'))