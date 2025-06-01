function good(){
    console.log("good");
    console.log("good");
    console.log("good");
}
// good(); 

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
// console.log(login(''));


// FUNCTIONS-2
//   ... this is spread and also rest opreator
function calcualteCartPrice(v1,v2,...num1){
    return num1;
}
// console.log(calcualteCartPrice(36,79,78,4564)); // array me aa rha he 

const anyObject ={
    username:"aarushi",
    encodeURI:"egyedty@7g"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and encodeURI is ${anyObject.encodeURI}`);
}
handleObject(anyObject)

const newarr = [10.2,203,true,"aarushi"]
function returnChossenValue(getArr) {
  return getArr[2]
}
console.log(returnChossenValue(newarr));
