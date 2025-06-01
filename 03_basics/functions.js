function good(){
    console.log("good");
    console.log("good");
    console.log("good");
}
good(); 

//  function addTwoNumber(num1,num2){
//     console.log(num1+num2);
//  }

function addTwoNumber(num1,num2){
//    let Result =  num1+num2;
   return num1+num2;
   
}  
// console.log("Result : ", addTwoNumber(2,2));

function login (username){
    if(username ===undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username}  just logged in` 
}
console.log(login(''));
