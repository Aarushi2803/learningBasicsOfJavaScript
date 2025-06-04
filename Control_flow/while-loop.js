// iterations
array=[43,56,74,12,233,3,4,2]
for (let index = 0; index < array.length-4; index++) {
    const element = array[index];
    if(element==5) {
        console.log("5 is the best number .");
    }
    //  console.log(element);  
}
// nested loop

for (let index = 0; index < 5; index++) {
//    console.log(`outer loop ${index}`); 
    for (let index = 0; index < 4; index++) {
    //   console.log(`inner loop ${index}`);    
    }                                                     
}

//  break and continue

for (let index = 0; index < 7; index++) {
   if(index==5) { 
    continue // this statement wil not print aage bad jayega 
    // break
    // console.log("stop when 5 will print");
   }
//    console.log("it is not 5");
   
}


//  while loop
let index = 0;
while (index <=36) {
    // console.log(`Evem number ${index}`);
    index +=2;
}

let myarr = ['aaru','shi','aaka','shi','shreyan','sh']
let val = myarr.length - 2;
while (myarr.length<val) {
    console.log(`value is ${myarr}`);   
} 

// do while
let score = 1;
do {   
    console.log(`Score is ${score}`);
    score++;  
} while (score<=10); 