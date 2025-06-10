//  it is also taking   these kind of number like 24bh and 434hj so basically it has a loop hall

const form = document.querySelector('form');

// this useCase will give you empty
// const Height  = document.querySelector('#Height').value;
// const Weight = document.querySelector('#Weight').value;

form.addEventListener('submit' ,function(event) {
    event.preventDefault()

const Height  = parseInt(document.querySelector('#Height').value);
const Weight = parseInt(document.querySelector('#Weight').value);
const results = document.querySelector('#results');

if(Height === '' || Height < 0 || isNaN(Height)){
    results.innerHTML = `Please fill valid height ${Height}`;
}
else if(Weight === '' || Weight < 0 || isNaN(Weight)){
    results.innerHTML = `Please fill valid weight ${Weight}`; 
} 
else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
}   
});      
