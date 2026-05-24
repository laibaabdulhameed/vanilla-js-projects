
const btn = document.querySelector('#Get')

async function getImage() {
    try {
        const Input = document.querySelector('#search').value
        const response = await fetch(`https://pixabay.com/api/?key=55998694-921706d56e69b627d967f2b17&q=${Input}&image_type=photo`)
        const data  = await response.json()
        console.log(data);
        const ImageDiv= document.querySelector('.image-div')
        ImageDiv.innerHTML=''
         data.hits.forEach(image => {
            ImageDiv.innerHTML += `
               <img src="${image.webformatURL}" alt="${image.tags}">
            `
         });
        
    } catch (error) {
        const ImageDiv= document.querySelector('.image-div')
        ImageDiv.textContent = "Image Not Found"
        
    }
    
}

btn.addEventListener('click', getImage)