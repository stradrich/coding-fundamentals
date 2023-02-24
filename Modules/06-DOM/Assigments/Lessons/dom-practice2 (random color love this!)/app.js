const hex = [1,2,3,4,5,6,7,8,9,10,'A','B','C','D','E','F']
const colorText = document.querySelector('span.color')
const button = document.querySelector('#button')

button.addEventListener('click',() => {
    const hexCode = getRandomHex()
    colorText.textContent = hexCode
    document.body.style.backgroundColor = hexCode
})

function getRandomHex() {
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += hex[Math.floor(Math.random() * hex.length)]
    }
   return hexCode
}

const randomHex = getRandomHex()
console.log(randomHex)