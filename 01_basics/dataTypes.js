// let num = 20;
let num = "20";
// console.log(typeof num);
let stringToNum = Number(num); //changing string into number
console.log(typeof stringToNum);



let anotherNum = 21;
let numToString = String(anotherNum);//changing number into string
console.log(typeof numToString);



//while changing a string into number we might face a problem
let secNum = '12abc';
let stringToNum2 = Number(secNum);
console.log(typeof stringToNum2); //it will log number in the console

/*ut if just console log the stringToNum2 ,it will give NaN(Not a Number) because abc is also there with 
12
*/
console.log(stringToNum2);

//whenever we try to convert any string into number it will give us NaN, for example
let nameTwo = 'Ankit';
let convName = Number(nameTwo);
console.log(nameTwo);   //Ankit
console.log(convName); //NaN




