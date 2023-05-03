//console.log('loaded');

const feedBackElement = document.getElementById("feedBackElement");



const submitButton = document.getElementById("submit");


submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log('clicked: ' + event);

})




const firstName = document.getElementById("fName");


firstName.addEventListener("input", (event)=>{

    console.log('clicked: ' + event);

})

console.log('input')






//console.log(feedBackElement);

let fName=false; // boolean
let lName=false; // boolean









//feedBackElement.innerText = "Her skal stå en errormsg";
