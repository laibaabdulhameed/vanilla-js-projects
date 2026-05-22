const areaname = document.querySelector('#searching-bar')
const btn =  document.querySelector('.get')
const area  = document.querySelector('.area')
const temp  = document.querySelector('.temp')
const condition = document.querySelector('.condition')
const  humidity= document.querySelector('.humidity')
const  speed= document.querySelector('.speed')

async function getWeatherData() {
    const city = areaname.value;
    const response = await fetch(`https://wttr.in/${city}?format=j1`)
    const data = await response.json()
      const  Condition = data.current_condition[0]
    const Area = data.nearest_area[0]
    console.log(data);
    area.textContent = Area.areaName[0].value
    temp.textContent = `${Condition.FeelsLikeC}C`
    condition.textContent = Condition.weatherDesc[0].value
    humidity.textContent = `Humidity: ${Condition.humidity}%`
    
    
}

btn.addEventListener('click', getWeatherData)