let score = "36rg"
console.log(typeof(score))  //number
console.log(typeof score);  //number

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber)  //NaN (not a number)  

let check = null
let some = undefined
let s = true
let g = false

console.log(typeof check); // null is // object
console.log(typeof some);  //undefined
console.log( typeof s);    // boolean
console.log(typeof g)      // boolean

// "22" => 33
// "33hbhd" => NaN
// true => 1; false => 0
  
// In a boolean value if u are writing a "" empty string so it will be False

let someNum = 46
let stringToNum = String(someNum)
console.log(typeof stringToNum)

// node 01_basics\conversionOpreation.js