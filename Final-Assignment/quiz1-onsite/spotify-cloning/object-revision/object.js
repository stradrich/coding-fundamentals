// let person = {
//     name: '',
//     age: 0,
//     address: {
//         street: '',
//         city: '',
//         state: '',
//         zipcode: ''
//     }
// }

let person = {};

person.name = 'John'
person.age = 30
person.address = {};
person.address.street = '123 Main St'
person.address.city = 'Anytown'
person.address.state = 'CA'
person.address.zipcode = '12345'



person.address.city = 'Newtown'
delete person.address.zipcode;
console.log(person)






// let age = '30'
// console.log(`This person is ${30/2}`)


