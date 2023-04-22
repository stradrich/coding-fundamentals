class Calculator {
 constructor() {
    // this.add = Math.floor(Math.random() + Math.random)
    // this.subtract = Math.floor(Math.random() - Math.random)
    // this.multiply = Math.floor(Math.random() * Math.random)
    // this.divide = Math.floor(Math.random() / Math.random)

    this.value = 0; // naming it value is more versatile, add, subract, divide, multiple can fit in
 }

 add(num) {
    // this.sum = a + b WHY NOT THIS???
   //  this.value = value + num is used to update an existing 
   //  property with the result of an addition operation, while this.sum = a + b is
   //  used to create a new property and assign it the result of an addition operation.
    this.value += num
    return this
 }

 subtract(num) {
    this.value -= num
    return this
 }

 multiply(num) {
    this.value *= num
    return this
 }

 divide(num) {
    this.value /= num
    return this
 }
}

const calculator = new Calculator() // Must store calculator in a new variable
Calculator().add(5).subtract(2).multiply(5).divide(3) // TypeError: Class constructor Calculator cannot be invoked without 'new'
calculator.add(5).subtract(2).multiply(5).divide(3) 
console.log(calculator.value)

