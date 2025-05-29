// Dates  and its an object

// MONTH start from 0 
//but if you want to sepcify like 01-03-2025 so start wuth 01 not 0  
let todayDate = new Date()
console.log(todayDate.toString());  //Thu May 29 2025 19:10:52 GMT+0530 (India Standard Time)
console.log(todayDate.toDateString());   //  Thu May 29 2025
console.log(todayDate.toLocaleDateString());  //29/5/2025
console.log(typeof todayDate);  // object

// if you want to createDate 
let createDate = new Date(2025,3,28) 
console.log(createDate.toLocaleString()); //28/4/2025, 12:00:00 am

let createDateWithTime = new Date(2025,3,28,5,30,7)
console.log(createDateWithTime.toLocaleString());  // 28/4/2025, 5:30:07 am
 
let myTime = Date();
console.log(myTime);  // 1748526973163
console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// This will be output
// 29
// 4   (start from 0)
// 1748527157399
// 4
// 2025
