const mySym = Symbol("key1");
let fristObj = {
    name : "Radha",  // by default name will be string
    "full name": "radhaRani",
    [mySym] : "RadheRadhe",  // mySym also validate
    age : 6,
    location : "Vrindavan",
    email : "radhaRani36@krishna.com",
    loveKrishna : true,
    meetWithAarushi : ['night',,,,'days'] 
}
console.log(fristObj);

// acces one element
console.log(fristObj.name);
console.log(fristObj["email"]);
console.log(fristObj["full name"]);
console.log(fristObj[mySym]);

fristObj.email = "radha36@krishna.com"  // it will not change value in the object bcoz you haven't freze it
Object.freeze(fristObj)
console.log(fristObj);

// object with function
fristObj.some = function(){
    console.log('Hii');
}
console.log(fristObj.some());