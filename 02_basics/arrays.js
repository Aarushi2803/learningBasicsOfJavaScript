// //  array declaration

// console.log(Array);  // [Function: Array]

// // 2nd type of declartion
// const arr1 = new Array;
// console.log(arr1);  // []  

// // 1st type of declartion
// const books = ['physics' , 'chemistry' , 'math'] 
// console.log(books);  // [ 'physics', 'chemistry', 'math' ]

// const arr = [0,1,2,3.4,true,"aarushi"];
// console.log(arr);    // [0, 1, 2, 3.4, true, 'aarushi'];
// console.log(arr[6] , arr[4])  // undefined   true


// array methods

// add element in the last
// const arrmethods = new Array();
// arrmethods.push(36, 'aaru', true);
// console.log(arrmethods);  

// // remove last Element
// arrmethods.pop();
// console.log(arrmethods); 

// // add elemet in the first
// arrmethods.unshift('jay shree krishna')
// console.log(arrmethods);
// console.log(arrmethods.indexOf(36)); 


// // if you want to access the index value of partciluar value that is not exist in the array it will you -1  

// // join
// const newArr = arrmethods.join()
// console.log(typeof newArr)  // string
// console.log(newArr); // it will convert it into stirng    // jay shree krishna,36,aaru
// console.log(arrmethods);

// slice , splice
// So, the key difference is that slice() creates a new array without altering the original, while splice() directly changes the original array.  

const a1=[38,92,"smile","be consistent",'hard-work'];

console.log("silce",a1);
console.log(a1.slice(2,4));  // it will print from 2 to 3
console.log("slice willnot modifies the ur current array",a1);  

console.log("splice",a1);
console.log(a1.splice(2,4));  // it will print from 2 to 4
console.log("splice will change the original array",a1);
