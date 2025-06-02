// let a = 10;  // we cannot use same variable again and again in let
// let a =10; // error 


// var c = 20;  /// we can use same variable again and again in var 
// var c =902;

// const b = 30; // we cannot use same variable again and again in let
// const b = 34;
// console.log(a,b,c);
 
// let a =20,b=4,c=43;
// var  d=20,f=4,g=43;
// const e=12,q=21,w=2;

// if(true){      
//    console.log(a+b+c);
//    console.log(d+f+g);
//    console.log(q+e+w); 
//    // can access values inside a block 
// }


//  scope -2
if(true){
    const myName = "Aarushi"
    if(myName === "Aarushi"){
        const website = "youtube"
        console.log(myName + website); //not error
    }
    // console.log(website);  // not in scope
} 
// console.log(myName);  // npt in scope


// ++++++++++++++ Intresting question ++++++++++++++++
console.log(addOne(5));  //can accces
console.log(adding(3));  // variable hold kr rakha he to error hoga  

function addOne(num){
    return num+1
}
 
const adding = function addOne(num){
    return num+1
} 

