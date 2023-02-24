const registerButton = document.querySelector('register')
const closeButton = document.querySelector('close-button')
const wrapper = document.querySelectorAll('wrapper')
const slideContainer = document.querySelector('.slide-over-container')

console.log({registerButton, closeButton, wrapper, slideContainer,})

registerButton.addEventListener('click', (e) => {
    e.preventDefault() // Nanikure?
    wrapper.classList.toggle('hide')
    wrapper.classList.add('slide-in')
})

closeButton.addEventListener('click', (e) => {
    e.preventDefault()
    wrapper.classList.toggle('show')
    wrapper.class.remove('slide-out')
})

// function slideInDiv() {
//     slideContainer.classList.replace('show','hide')
//     register.classList.toggle('show')
// }

// console.log(slideInDiv)

// function slideOffDiv() {
//     slideContainer.classList.toggle('hide','show')
//     closeButton.classList.remove()
// }

// console.log(slideOffDiv)

 