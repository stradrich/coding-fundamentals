// create a button "Register"

const RegisterButton = document.querySelector(".register-button")
const CloseButton = document.querySelector(".close-button")
const wrapper = document.querySelector(".wrapper")
const slideOver = document.querySelector(".slide-over-panel")

// when the close button is clicked, hide the wrapper
// when the register button is clicked, show the wrapper



   CloseButton.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("clicked")
      wrapper.classList.toggle("hide");
      slideOver.classList.add("slide-in")
   })
   
   
   
   RegisterButton.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("clicked")
      wrapper.classList.toggle("hide")
      wrapper.classList.add ("slide-out")
   
      
   })