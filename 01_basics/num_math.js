const balance = new Number(243)
console.log(balance); //[Number: 243]

console.log(balance.toString()); // 243
console.log(balance.toFixed(4))  // 243.0000 
console.log(balance.toString().length); //3

const second = 36.656
console.log(second.toPrecision(2))  // 37
console.log(second.toPrecision(7))  // 36.65600

const hunderds = 100000
console.log(hunderds.toLocaleString);  // [Function: toLocaleString]

console.log(hunderds.toLocaleString('en-us'));


// Maths (by default library) M shouls be capital
console.log(Math.abs(-38))  // 38
console.log(Math.round(4.5));
// MANY FUNCTIONS LIKE ==> 
// .ceil(), floor() , pow() ,min(),max(),

console.log(Math.random());  // random number will be genrated 
console.log(Math.floor(Math.random()*10)+1); 

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1) + min))