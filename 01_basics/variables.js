//const => can not be redeclared or reassigned (has block scope)
const customerId = 100589;
console.log(customerId);

//let => can not be redeclared but can be reassigned (also has block scope)
let age = 24;
age = 25;
console.log(age);

//var => can be redeclared or can be assigned as well (has global scope)
var firstName = "Ankit";
var firstName = "Virat";
console.log(firstName);


 