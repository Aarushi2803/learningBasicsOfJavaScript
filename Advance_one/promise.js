// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result

// A Promise is an Object that links Producing code and Consuming code

// When	Call
// Success	myResolve(result value)
// Error	myReject(error object)

//  <!- one-->

const PromiseOne = new Promise(function(resolve,reject){
    //  Do any async task
    //   BD ChannelSplitterNode, cryptography, network 
    setTimeout(function(){
        // console.log("Async task 1 complete");
        resolve() 
    },1000)
})

// .then => ka connnection direct resolve ke stah he
PromiseOne.then(function(){
    // console.log("Promise 1 consumed");
})

// When the producing code obtains the result, it should call one of the two callbacks:


//  <!- second-->

new Promise(function(resolve,reject){
   setTimeout(() => {
    // console.log("Async task 2 complete");
    resolve()
   }, 1000); 
}).then(function(){
    // console.log("Async 2 resolved");
    
})

//  <!- third-->

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({mantra:"sucess",need:"consitency"})
    },1000)
}) 
 
PromiseFour.then(function(anyData){
    //  console.log(anyData);
})

// <!- four-->
const PromiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if(!error){
        resolve({username:"Rushi",age:18})
    }
    else{
        reject("ERROR : Something went wrong")
    }
  },1000)
})  
PromiseThree.then(function(user){
   console.log(user);
   return user.username
}).then(function(age){
    console.log(age);
}).catch(function(error){
    console.log(error);
}).finally(()=>
 console.log("promise resolved or reject")) 
 

 //  <!- five-->
const PromiseFive =  new Promise((resolve,reject)=> 
     setTimeout(function(){
      let error = true;
      console.log();
      if(!error){
        resolve({username:"Rushi",age:18})
      }
      else{
        reject("ERROR : JS went wrong")
      }
    },1000) 
)

async function consumePromiseFive(){
   try {
     const respnse = await PromiseFive
    console.log(respnse);
   } catch (error) {
     console.log(error); 
   }
}
consumePromiseFive()
 

async function getAllUsers(){
    try {
       const response = await fetch('https://api.github.com/users/hiteshchoudhary')
       const data = await response.json()
       console.log(data); 
    } catch (error) {
        console.log("E:",error);
    }   
}
getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary').then((response)=> { 
    return response.json()
}).then((data)=> {console.log(data)})
.catch((error) => console.log(data)
)
