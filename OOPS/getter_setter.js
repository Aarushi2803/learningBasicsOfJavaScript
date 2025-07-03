//  Signals privacy: _ is meant to be internal and not accessed directly

//  If you use this.name inside the getter or setter, it will recursively call itself—leading to a stack overflow.
// So instead, developers use something like this._name to avoid that loop. 

// class User {
//   constructor(name) {
//     this._name = name; // internal storage
//   }
//   get name() {
//     return this._name; // safe access
//   }
//   set name(value) {
//     if (value.length < 3) {
//       console.log("Name too short!");
//       return;
//     }
//     this._name = value; // safe assignment
//   }
// }


class User{
    constructor(email,pswd){
       this.email =email;
       this.pswd = pswd;
    }
    get pswd(){
        return this._pswd.toUpperCase()
    } 
    set pswd(value){
        this._pswd = value.toUpperCase() 
    }
}
  
const aar = new User("araus@87gmail.com","uwsh72w8");
console.log(aar.pswd);  