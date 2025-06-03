const userEmail = "argmail.com"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user mail");
}

//  falsy value
// false , 0 , -0 ,BigInt 0n , "" ,null,undefined,NaN

// truthy values
//  "0", 'false' , " ", [] , {} , function(){}

if(userEmail.length === 0){
    console.log("Array is empty");   
}

const emptyObj = {}
if(Object.keys(emptyObj).length==0){
  console.log("Object is empty");
  
}
 
//  Nullish Coalescing opreatr (??): null undefined
// less priority to null and undefined capamre to number or value;  
let v1;
v1  = 5 ?? 10;
v2 = null ?? 10;
v3 = undefined ??null;  
v7 = null ?? undefined;
v4 = 3 ?? null ?? undefined
v8 = 3 ?? undefined ?? null
v5 = undefined ?? 5;  

console.log(v1);
console.log(v2);
console.log(v3);
console.log(v7);
console.log(v4);
console.log(v8);
console.log(v5);
// console.log(v7);


// ternary opeator
// condition ? true : false;

const good = 50
console.log( good>=50 ?"Excellent":"Good Keep pushing yourself");