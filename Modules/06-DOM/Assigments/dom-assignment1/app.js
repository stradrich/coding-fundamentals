// Select the right DOM elements

const addButton = document.querySelector('body button .add_button')
// const sliddingDiv = document.querySelector('.notification hidden')
const closeButton = document.querySelector('.cta_button')
    //Proving that you've successfully selected all the required DOM element later on 
    console.log({addButton, closeButton})

// Event Listener: Click and pop up div slidding in
addButton.addEventListener('click', sliddingDiv)

function sliddingDiv() {
    let unhide = document.querySelectorAll('notification hidden .card')
    unhide.innerHTML = ('hidden .card').remove()

    console.log(unhide)

}



// Turn off div by clicking X 


// REFERENCES
// https://www.w3schools.com/cssref/css3_pr_transform.php
