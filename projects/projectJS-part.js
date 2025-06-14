const btns = document.querySelectorAll('.btn'); 
const body = document.querySelector("body");

// 1st method
btns.forEach( function(button){
    button.addEventListener("click",function(event){
        if(event.target.id=='grey') {
            body.style.backgroundColor = event.target.id;
        }    
        if(event.target.id=='black') {
            body.style.backgroundColor = event.target.id;
            body.style.color = "white" 
        }
        if(event.target.id=='pink'){
            body.style.backgroundColor = event.target.id;
        }
         if(event.target.id=='green'){
            body.style.backgroundColor = event.target.id;
        }
    })
} )

// When this.id is used in an event handler (like a button click), it refers to the button that was clicked. If that button’s id is set to a color name (like "red" or "blue"), you can directly assign it to document.body.style.backgroundColor to change the page’s background color.

// 2nd method  
// btns.forEach(btn => { 
//     btn.addEventListener("click", function () {
//         body.style.backgroundColor = this.id; 
//     }); 
// });