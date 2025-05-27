// Primitive => 7 types : string , number , boolean ,null , undefined , symbol

const demo = 36
const demoValue = 36.3

const yesOfNo = true
const OutsideTemp = null
let my_name;

const id = Symbol('123')
const secondId = Symbol('123')

console.log(id===secondId) //false

const BigInt = 345678903121n   //reprsent n in last for bigInt


// refrence (Non primitive) => Array , Objects , Functions

const names = ["hv","r","tg"];

let obj = 
{
  userNmae : "shubhman",
  age: 24
}

// function MyFunction(){
//     console.log("Learning javascript with chai aur javascript ")
// }


const MyFunction = function(){    // Don't give gap between function() 
    console.log("Learning javascript with chai aur javascript ")
}

// check dataype 
console.log(typeof MyFunction); // function
console.log(typeof obj);   // object
console.log(typeof names);  // object

console.log(typeof BigInt);  //bigint

