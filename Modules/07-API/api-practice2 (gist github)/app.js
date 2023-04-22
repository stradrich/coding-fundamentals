console.log('Integrate Github Gist API')

const nameText = document.querySelector('#name')
const ageText = document.querySelector('#age')
const hobbiesList = document.querySelector('#hobbies')

const ENDPOINT = 'https://api.github.com/gists/8cee0f07342ada2611a21301b273df40'

async function getData() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    return JSON.parse(data.files['test.json'].content)
}

function displayData({name, age, hobbies}) {
    nameText.textContent = name
    ageText.textContent = age 
    hobbies.forEach(hobby => {
        hobbiesList.innerHTML +=
        `<li>${hobby}</li>`
    })
}

window.addEventListener('load', async() => {
    const data = await getData()

    // console.log(data)
    displayData(data)
})