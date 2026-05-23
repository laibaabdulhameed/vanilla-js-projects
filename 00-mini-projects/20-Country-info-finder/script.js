const ID = document.querySelector('#nameOfCountry')
const Find = document.querySelector('#search')

async function getCountryInfo() {
    try {
        const countryName  = ID.value
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        if(!response.ok) throw new Error("Country not found")
        const data = await response.json()
        console.log(data);

        const country = data[0]
        document.querySelector('.info').style.display = 'flex'
        document.querySelector('#flag').src = country.flags.svg
        document.querySelector('.name').textContent = country.name.common
        document.querySelector('.capital').textContent = `Capital: ${country.capital}`
        document.querySelector('.population').textContent = `Population: ${country.population.toLocaleString()}`
        document.querySelector('.region').textContent = `Region: ${country.region}`
        document.querySelector('.languages').textContent = `Languages: ${Object.values(country.languages).join(',')}`
        document.querySelector('.currency').textContent = `Currency: ${Object.values(country.currencies).map(c=> c.name)}`
     } catch (error) {
          document.querySelector('.info').style.display = 'flex'
          document.querySelector('.name').textContent = "Country not found. Check again"
        
    }
    
}
Find.addEventListener('click', getCountryInfo)
