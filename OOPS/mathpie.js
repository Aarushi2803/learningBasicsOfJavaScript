const de =  Object.getOwnPropertyDescriptor(Math,"PI") 
console.log(de);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const tea = {
    stude_id: 123,
    backlog : "no",
}
 console.log(Object.getOwnPropertyDescriptor(tea,"stude_id")); 

Object.defineProperty(tea,'name',{
    writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(tea,"backlog"));

for (let [key,value] of Object.entries(tea)) {
    if(typeof value != 'function'){
      console.log(`${key}:${value}`);
    } 
}