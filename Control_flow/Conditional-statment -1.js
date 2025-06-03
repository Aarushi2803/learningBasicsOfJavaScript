//  if

if(false){
    // code not executed
}
if(true){
    //code executed
}

const nameIsWritten  = true
//  1 . way
if(nameIsWritten){
    console.log("Good going");
}
//  2 . way
if(true) console.log("Bin {} ke sirf ek line likh sakte he");

// 3 . way  (bad pactice)
if(true) console.log("ek se jada line  bhi likh sakte with the help of , but don't use semi-colon.") ,console.log("like thses...") , console.log("nahi bharosa he to ek execute krva lo aaru.shi");

else{
    console.log("Not");
    
}
//  datatype checked in === , in this case == only values are check.


//  Real lige usage
const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false

if(userLoggedIn && debitCard) {
    console.log("Allow to buy Clothes");
}
if(loggedInFromEmail || userLoggedIn){
    console.log("Uer logges in");  
}
else if(debitCard){
    console.log("User please log in from mail or google")
}
else{
  console.log("You haven't account on Temple Run");
}