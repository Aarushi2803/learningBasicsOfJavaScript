// //  EX6 KE ABD KI KAKHANI
// class user{
//     constructor(user,mail,pswd){
//         this.user=user
//         this.mail=mail
//         this.pswd=pswd
//     }
//     encryptPassword(){
//         return `${this.pswd}YouGo!!`
//     }
//     ChanegeUsername(){
//         return `${this.user.toUpperCase()}`
//     }
// }

const chai = new user("chai","eudoic@3egmail.com","21gu$y8")

console.log(chai);
console.log(chai.encryptPassword(),chai.ChanegeUsername());

//  behind the scene

    function goood(user,mail,pswd){
        this.user=user
        this.mail=mail
        this.pswd=pswd
    } 
goood.prototype.encryptPassword = function(){
    return `${this.pswd}iejd233`
}
goood.prototype.ChanegeUsername = function(){
    return `${this.user.toUpperCase()}`
}  
const tea = new goood("tea","tea@8.com","4rjrud**") 
console.log(tea.encryptPassword());
console.log(tea.ChanegeUsername()); 
