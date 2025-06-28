const user = {
    username:"Rushiiii",
    loginCount: 8, 
    signedIn: true,
 
    getUserDetails:function(){
        console.log(`username: ${this.username}`);
        console.log(this); 
    }
} 

console.log(user.signedIn);
console.log(user.getUserDetails());
console.log(this);

const promiseone = new Promise()

function user(username,loginCount,isLooggedIn){
   this.myusername = username
   this.loginCount = loginCount
   return this
}
const user1 = new user("aaru",12,true)

// steps -4 after making new keywords
//  new likte hi empty object create hota he jisko instance kehte he 
// constructor function call argumnets pack krta  he or apn ko de de ta he
// (this) argument ke andr inject ho jate he 
//  function ke andr mil jata he 

// construcotr bu gooogle 