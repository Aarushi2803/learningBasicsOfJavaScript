// arrays, strings, maps, and sets  

// for of 
  const arr = [1,2,3,"aarushi",5,6]
  for (const num of arr) {
    // console.log(num); 
  }
const char = "Hello world!!"

for (const ch of char) {
    // console.log(`Each char is ${ch}`); 
}



//  Maps is object , all unique values , contain key values
const map = new Map()
map.set('IN',"India")
map.set('US',"United State of America")
map.set('Fr',"France");
map.set('Fr',"France")
// console.log(map);
 
for (const [key ,value] of map) {
    // console.log(key);  
    console.log(key ,':-', value);
}


// for in (objects)
const mYobj ={
    'name' : "aarus",
    'mycode':123,
    'pswd' : "aaru3@gamil.com" 
}

for (const key in mYobj) {
   console.log(`${key}`);
}

for (const key in map) {
 console.log(key);
}  // will not give any output 


//  for each
const programming = ['js','html','css','c','cpp','java','python']

programming.forEach( function (item) {
  // console.log(programming);
})

programming.forEach( (item) => {
  // console.log(item);
})

function printMe(item){
   console.log(item);
}
programming.forEach( (item,index,arr) => {
console.log(item,index,arr);
})


const codeing = [
  {
   'lang' : "py",
   'version': 12.0 
  },
  {
   'lang' : "py",
   'version': 12
  },
  {
   'lang' : "py",
   'version': 12.0545
  }
]
// console.log(codeing);
codeing.forEach((item) => {
  console.log(item.version);
  
})
