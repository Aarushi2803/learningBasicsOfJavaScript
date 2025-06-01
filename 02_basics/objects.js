// const mySym = Symbol("key1");
// let fristObj = {
//     name : "Radha",  // by default name will be string
//     "full name": "radhaRani",
//     [mySym] : "RadheRadhe",  // mySym also validate
//     age : 6,
//     location : "Vrindavan",
//     email : "radhaRani36@krishna.com",
//     loveKrishna : true,
//     meetWithAarushi : ['night',,,,'days'] 
// }
// console.log(fristObj);

// // acces one element
// console.log(fristObj.name);
// console.log(fristObj["email"]);
// console.log(fristObj["full name"]);
// console.log(fristObj[mySym]);

// fristObj.email = "radha36@krishna.com"  // it will not change value in the object bcoz you haven't freze it
// Object.freeze(fristObj)
// console.log(fristObj);

// // object with function
// fristObj.some = function(){
//     console.log('Hii');
// }
// console.log(fristObj.some());


// objects -2 

// declare objects in  two types 
// const userName = new Object;
// console.log(userName);
 
// const myname ={}
// console.log(myname);

// myname.id = 2401010001;
// myname.location = "indore"
// myname.dob = '28-03-2007'
// console.log(myname);

const newName = {
    name1:"Aarushi",
    name1:"Aarushi",  // repated console me nhi aayegi
    name3:"Aarushi",
    Boolean : true,
    id: {
        UserOneID : "4567",
        UserTwoID : "1234",
     location : {
          userOneLocation : "banglore",
          userTwoLocation : "indore",
     }
    }
   
} 
// console.log(newName.id.location)

// id[1].location
// console.log(newName)

// console.log(Object.keys(newName));  // dataypes will be an array  and all values will come
// console.log(Object.values(newName));  // dataypes will be an array  and all propreties will come 
// console.log(Object.entries(newName));  // dataypes will be an array  and all propreties will come 

//if you want to check that is ther eany valye present with the name of userOneLocation : "banglore",
console.log(newName.hasOwnProperty("userOneLocation")); 

const newName1 = {
    name1:"Aarushi",
    name7:"Aarushi",
    name3:"Aarushi",
    name5 :"hema"
}
const newName2 = {
    name1:"Aarushi",
    name:"Aarushi",
    name0:"Aarushi",
    name4:"shreyansh"
} 
// console.log(newName1 , newName2);  // add two object

const obj  = Object.assign({},newName1,newName2)  // same as  const obj = {...newName1 , ...newName2};

// console.log(obj); // it will print only diffrent property like name1 ,name2 

// console.log(Object.assign(newName1,newName2,));


