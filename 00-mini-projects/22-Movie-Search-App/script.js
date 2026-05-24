
const btn = document.querySelector('#Get')

async function getMovie() {
    try {
        const Input = document.querySelector('#search').value
        const response = await fetch(`http://www.omdbapi.com/?s=${Input}&apikey=fde70ff2`)
        const data = await response.json()
        console.log(data);
        const movieDiv = document.querySelector('.movie-div')
        movieDiv.innerHTML = ''
        data.Search.forEach(movie => {
            movieDiv.innerHTML += `
             <div class="movie-card">
               <img src="${movie.Poster}" alt="${movie.Title}">
                <div class="movie-info">
                  <h3>${movie.Title}</h3>
                  <p>${movie.Year}</p>
               </div>
            </div>
        `
        });


    } catch (error) {
        const movieDiv = document.querySelector('.movie-div')
        movieDiv.textContent = "Movie Not Found.Please try again"

    }

}

btn.addEventListener('click', getMovie)