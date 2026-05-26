const btn = document.querySelector('.fetch')
const loading = document.querySelector('.loading-msg')
const image = document.querySelector('#dog-image')
const joke = document.querySelector('#joke-text')
const fact = document.querySelector('#country-fact')
const jokeDiv = document.querySelector('.joke')
const factDiv = document.querySelector('.fact')
const imageDiv = document.querySelector('.image')

async function getEverything() {
    loading.innerText = "Loading...";
    jokeDiv.style.display = "none"
    factDiv.style.display = "none"
    imageDiv.style.display = "none"
    const response = await Promise.all([
        fetch("https://official-joke-api.appspot.com/random_joke"),

        fetch("https://dog.ceo/api/breeds/image/random"),

        fetch("https://restcountries.com/v3.1/name/pakistan")
    ])
    const jokeData = await response[0].json()
    const dogData = await response[1].json()
    const countryData = await response[2].json()

    image.innerHTML = ''
    joke.innerHTML = ''
    fact.innerHTML = ''
    image.src = dogData.message;
    joke.innerText = `${jokeData.setup}${jokeData.punchline}`
    fact.innerText = countryData[0].name.common;

    loading.style.display = 'none'
    jokeDiv.style.display = "block"
    factDiv.style.display = "block"
    imageDiv.style.display = "block"





}


btn.addEventListener('click', getEverything)