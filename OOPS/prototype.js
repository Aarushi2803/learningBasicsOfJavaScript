let my_name = "    ru s h ii i           "
console.log(my_name.trim().length);


let teachers = ["zabiSir","KbSir","sourabhSir"]; 
let teacherPower = {
   zabiSir:"speaking",
   KbSir:"humble",
   sourabhSir:"experience",
   
   getsourabhSirPower: function(){
    console.log(`spider power is ${this.KbSir}`);
   }
} 

// The JavaScript prototype property allows you to add new properties to object constructors:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";