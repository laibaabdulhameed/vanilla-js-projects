const stars = document.querySelector('.stars');
const loading = document.querySelector('#state-loading')
const success = document.querySelector('#state-success')
const errors = document.querySelector('#state-error')
const search_btn = document.querySelector('.search-btn')
const search_bar = document.querySelector('.search-bar')



for (let i = 1; i < 80; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    const size = Math.random() * 2 + 1 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.animationDelay = Math.random() * 3 + 's';
    stars.appendChild(star);
}
// stats handling
function showStat(state) {
    loading.classList.remove('visible');
    success.classList.remove('visible');
    errors.classList.remove('visible');
    document.getElementById(`state-${state}`).classList.add('visible');

     // sync tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.toLowerCase().trim() === state) {
      tab.classList.add('active');
    }
  });

}

// weather fetching
async function fetchWeather(city) {
    showStat('loading');
    try {
        const response = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await response.json();
        console.log(data);
        showStat('success');
        displayWeather(data);

    } catch {
        showStat('error')
    }

}

search_btn.addEventListener('click', () => {
    const city = search_bar.value.trim();
    if (city) fetchWeather(city);
})

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather('Lahore');
})

function displayWeather(data) {
    const city = data.nearest_area[0].areaName[0].value;
    const temp = data.current_condition[0].temp_C;
    const humidity = data.current_condition[0].humidity;
    const windspeedKmph =data.current_condition[0].windspeedKmph;
    const pressure= data.current_condition[0].pressure;
    const visibility =data.current_condition[0].visibility;
    const weatherDesc =data.current_condition[0].weatherDesc[0].value;
    const areaName= data.nearest_area[0].areaName[0].value;
    const country =data.nearest_area[0].country[0].value;
    const feelslike = data.current_condition[0].FeelsLikeC;
    document.querySelector('.city-name').textContent = city;
    document.querySelector('.temp-big').textContent = temp;
    document.querySelector('.HUMIDITY').textContent = humidity;
    document.querySelector('.windspeed').textContent = windspeedKmph;
    document.querySelector('.pressure').textContent = pressure;
    document.querySelector('.visibility').textContent = visibility;
    document.querySelector('.feels-like').textContent = feelslike;
    
}


