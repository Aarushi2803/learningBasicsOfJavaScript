// stack (primitive)  
//heap (non-primitive) 

let my_name = "Aarushi" // stack  (copy)

let second_name = "Aaru"
second_name = ".shi"   

console.log(my_name);      //Aarushi
console.log(second_name);  // .shi 

   
let userShubhman = {    // heap (refrence)
    email : "suubhmangill7@gmail.com",
    upiId : "giil@ibl"
}

let userAarushi = userShubhman
userShubhman.email = "shubhmangill7@gmail.com"

console.log(userShubhman);
console.log(userAarushi);

