// When press on CMD+K on your keyboard, the command palette will open

// const containerDiv = document.querySelector('.container')
// const paletteDiv = document.querySelector('.palette')
// const resultsUl = document.querySelector('.results-container')
// const itemLi = document.querySelector('.result-item')
// const noResultP = document.querySelector('.no-result')

// console.log({containerDiv, paletteDiv, resultsUl,itemLi,noResultP})

const wrapperDiv = document.querySelector('.wrapper')
const paletteDiv = document.querySelector('.palette')

console.log({wrapperDiv, paletteDiv})

document.addEventListener('keydown',(e) => {
    // console.log('keydown', e) // when pressed any keys, console should react

    // If CMD and K are pressed at the same time....
    if(e.ctrlKey && e.key === 'k') {
        e.preventDefault(); // The preventDefault() method prevents ???
        wrapperDiv.classList.replace('hidden','display')
        paletteDiv.classList.toggle('fade-out')
        paletteDiv.classList.toggle('fade-in')
    } else {
        wrapperDiv.classList.replace('display','hidden')
        paletteDiv.classList.toggle('fade-in')
    }

})