// Select the header element
const header = document.querySelector('.header')

// Event listener: Mouse move                
// When user hovers around the top area, show the header   

                
// Event listener: Scroll   
window.addEventListener('scroll', () => {
    const headerTop = header.scrollHeight;
    const scroll = window.scrollY
    if(scroll >= 100) { 
        header.classList.add('hide') // Ignored if at the top (CHECK CSS for 'hide')
    } else {
        header.classList.remove('hide') 
    }
})

// When user scroll after a certain height, hide the header, else show the header
window.addEventListener('mousemove', e => {
    const measureScrollHeight = e.clientY 

    console.log(measureScrollHeight) // Check page scroll height

    if (measureScrollHeight >= 100) {
        header.classList.add('appear')
    } else {
        header.classList.remove('appear')
    }  
})



//Email section
// Pop up: Form (Name, Email, Message >> send or cancel)
const emailing = document.querySelector('#email')
const showForm = document.querySelector('email-form')
emailing.addEventListener('mouseover', (e) => {
    console.log('clicked')
    //  email-form display change to display something....
    if (emaling = 'clicked') {
        showForm.innerHTML.remove('hidden')
    } else {
        showForm.innerHTML.add('hidden')
    }
})