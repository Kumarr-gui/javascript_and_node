//conversions

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
console.log(typeof convName); //number

let isPlaced = "";
let abcBoolean = Boolean(isPlaced); //converting 
console.log(abcBoolean); //false
console.log(typeof abcBoolean); //boolean

/*
1 => true
0 => false
"" => false
"any value" => true
*/

/********************operations******************************/
// console.log(1+2);
// console.log(5-6);
// console.log(2*8);
// console.log(12/2);
// console.log(1%3);
// console.log(2**3);



console.log(1+"2"); //12
console.log("1"+2); //12

console.log("1"+2+2); //122
console.log(1+2+"2"); //32

// correct way for writing above code
console.log(((2+3)*4)/5); //4 #using brackets is a correct way

//postfix  and,  

let a = 10;
let b = a++;
console.log(a,b)

//prefix
let c = 10;
let d = ++c;
console.log(c,d)




