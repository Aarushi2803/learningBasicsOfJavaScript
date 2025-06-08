const mynum = [1,2,3,4,5,6]
const newnum = mynum.map( (num) => { return num +10})
// console.log(newnum);

const num1 = mynum.
map( (num) => num *10)
.map( (num) => num+2)
.filter( (num) => num<=36) 
// console.log(num1);

//  reduce method
// Genral syntax
// arrName.reduce(function(accumulator,currentValue) {
//     console.log("// logic to update accumulator");
// } , initialValue);
    
re = [1,2,3,4,5,6,7,8,9]
const reFun = mynum.reduce(function(acc, currval) {
    // console.log(`acc => ${acc} and currval ${currval}`);
    return acc + currval
} , 3)
// console.log(reFun); 

// by arrowFunction
const arrowFunction = mynum.reduce( (acc,currval)=> acc + currval , 0)

const colleges = [
     {
      newShl : "sst",
      fees :  2500
     } , 
     {
      newShl : "nst",
      fees :  2300
     } ,
     {
      newShl : "pw-ioi",
      fees :  1600
     },
     {
      newShl : "pst",
      fees :  2600
     }
]

const payement = colleges.reduce( (acc ,item) => acc + item.fees , 0)
console.log(payement); 