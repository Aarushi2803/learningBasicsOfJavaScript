// functions && Arrays && strings --> object --> null

function adding(Num){
   return 36 + Num;
}
// adding.plus = 72
// console.log(adding(32));
// console.log(adding.plus);
// console.log(adding.prototype);

function createUser(username,score){
    this.username = username
    this.score = score
} 
createUser.prototype.increment = function(){
    this.score++  
} 
createUser.prototype.printme = function(){
    console.log(`Tea or chai score is ${this.score}`);
}
const chai = createUser("chai",6) 
const tea = createUser("tea",399) 
tea.createUser();