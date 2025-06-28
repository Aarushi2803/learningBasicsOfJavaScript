function Setuser(username){
    //  cmplex DB calls 
    this.username = username
    console.log("called");
}

function createUser(username,email,paswd){
    Setuser.call(this,username)
    this.email = email
    this.paswd = paswd
}

const chai = new createUser("chai","ddi@debugge34.com","123i4@")
console.log(chai);
