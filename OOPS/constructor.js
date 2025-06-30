// A constructor in JavaScript is like the blueprint for creating new objects with specific properties and methods. It helps organize your code when you're dealing with multiple similar objects.

// normal code
function Book(title, author) {
  this.title = title;
  this.author = author;
}

const novel = new Book("1984", "George Orwell");
const poem = new Book("Rashmirathi", "Ramdhari Singh Dinkar");


// using constructor code 
class Students {
  constructor(name, rollNumber) {
    this.name = name;
    this.rollNumber = rollNumber;
  }
}
const aarush = new Students("Aarushi", 23);


class Student {
  constructor(name, rollNo = 1) {
    this.name = name;
    this.rollNo = rollNo;
  } 
  legacy() {
    return `${this.name} has held Roll No. ${this.rollNo} from day one—unshaken, unbeaten.`;
  }
}
const aarushi = new Student("Aarushi");
console.log(aarushi.legacy());