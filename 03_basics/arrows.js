const user = {
    username: "Aarushi",
    price: 999,

    welComeMessage: function(){
        console.log(`${this.username} , welcome to website`); // this use krte he current context ko refer krta he 
        
    }
}
user.welComeMessage();
user.username = "Aakashi";

user.welComeMessage();
console.log(this); // {}

function chai(){
    console.log(this);
}

//   Arrow functions synatx () => {}
const chaied = () => {
    console.log(this);
} 
chai();  // will give you maany functions
console.log(chaied); 


// 1 method 
const addtwo = (num1,num2) => {
    return num1+num2 
} 
// 2 method
const addTwoNumber = (num1,num2) => num1+num2
// method -3
//  if you are returning onbject then you have to use ()
const addTwoNumberby = (num1,num2) => (num1+num2) // use in react   
const addObj = (num1,num2) => ({username: "Radhe"}) 

console.log(addObj());

// console.log(addtwo(36,36));
// console.log(addTwoNumber(72,72));
// console.log(addTwoNumberby(144,144));
