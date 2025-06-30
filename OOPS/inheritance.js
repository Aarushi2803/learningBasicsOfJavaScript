class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);   
    }
}

class Teacher extends user{
    constructor(username,email,pswd){
        super(username)
        this.email = email
        this.pswd = pswd
    }
    addCouser(){
        console.log(`new cousre was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","eudh72@8e","e37e!!")
chai.addCouser();

const tea = new user("Ice-tea")
tea.logMe()

console.log(chai === tea);
console.log(chai === Teacher);
console.log(chai instanceof Teacher); 
console.log(tea instanceof user); 
