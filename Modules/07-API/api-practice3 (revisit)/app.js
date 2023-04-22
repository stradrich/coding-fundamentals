const emojiForm = document.querySelector('#emoji-form')
const emojiImage = document.querySelector('#emoji-image')
const errorText = document.querySelector('#error-text')
const button = document.querySelector('#button')

const ENDPOINT = 'https://api.github.com/emojis'

async function getEmojis() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    console.log(data)

    return data;
}

async function getEmoji(name) {
    const emojis = await getEmojis()
    const emoji = emojis?.[name]

    if (emoji) {
        errorText.textContent = ''
        emojiImage.src = emoji
    } else {
        errorText.textContent = 'No emoji found.'
        emojiImage.src = ''
    }
}



emojiForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // make sure if doesnt reload the page
    const emojiSearchInput = emojiForm.querySelector('input').value.toLowerCase(); 

    await getEmoji(emojiSearchInput);
})

button.addEventListener('click', async (e) => {
    e.preventDefault(); // make sure if doesnt reload the page
    const emojiSearchInput = emojiForm.querySelector('input').value.toLowerCase(); 

    await getEmoji(emojiSearchInput);
})

window.addEventListener('load', async() => {
    await getEmojis() 
   } )

// REFERENCES
// https://api.github.com/emojis