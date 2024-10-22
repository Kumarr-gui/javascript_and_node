//const => can not be redeclared or reassigned (has block scope)
const customerId = 100589; //number


//let => can not be redeclared but can be reassigned (also has block scope)
let age = '24'; //string
age = '25';


//var => can be redeclared or can be assigned as well (has global scope)
var firstName = "Ankit"; //string
var firstName = "Virat";

let firstCompanyName; //undefined

console.log(customerId,age,firstName,firstCompanyName);//just log the output at console

console.table([customerId,age,firstName,firstCompanyName]); //shows the output in tabular form


