// BRACKET NOTATION VS DOT NOTATION

// #1
let person = {}
person.name = 'name'
person.address = {}
person.address.city = 'Anytown'

// console.log(person)

// #2
let user = {}
user['username'] = 'John'
user['useraddress'] = {}
user['useraddress']['city'] = 'Anytown'

console.log(user)

