// Immediately Invoked function Expressions (IIFE)
// global polluation ko remove krne ke liye IIFE use krte he 

// 1.paranthesis lga lete he sirf
(function good(){
    // this is named IIFE 
    console.log(`DB connected`)
}) ();  // yha pe ; lgana mandatory he nhi to other (IIFE) nhi chlenge or error dikha denge 

( () => {
    console.log(`DB connected Double`);  
} ) ();


( (named) => {
    console.log(`radhe radhe ${named}`);  
} ) ('RadhaKrishna');