const btn = document.querySelector('.new-joke')
const textArea = document.querySelector('.joke')

async function getJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await response.json()
     textArea.textContent = `${data.setup}...${data.punchline}`
    
    
}

btn.addEventListener('click', getJoke)