const areaname = document.querySelector('#searching-bar')
const btn =  document.querySelector('.get')
const area  = document.querySelector('.area')
const temp  = document.querySelector('.temp')
const condition = document.querySelector('.condition')
const  humidity= document.querySelector('.humidity')
const  speed= document.querySelector('.speed')

async function getWeatherData() {
   try{
    const city = areaname.value;
    if(!city) return;
    area.textContent = "Loading..."
    const response = await fetch(`https://wttr.in/${city}?format=j1`)
    if(!response.ok)  throw new Error("city not found")
      console.log(response.ok);
      console.log(response.status);
      
    const data = await response.json()
    const  Condition = data.current_condition[0]
    const Area = data.nearest_area[0]
    area.textContent = Area.areaName[0].value
    temp.textContent = `${Condition.FeelsLikeC}C`
    condition.textContent = Condition.weatherDesc[0].value
    humidity.textContent = `Humidity: ${Condition.humidity}%`
    
   } catch(error){
      area.textContent = "City not found"
    temp.textContent = ""
    condition.textContent =""
    humidity.textContent = ""
   }
    
}

btn.addEventListener('click', getWeatherData)