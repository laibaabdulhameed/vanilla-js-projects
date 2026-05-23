const ID = document.querySelector('#nameOfPerson')
const Find = document.querySelector('#search')

async function getProfile() {
    try{
       const username = ID.value
       const response = await fetch(`https://api.github.com/users/${username}`)
       if(!response.ok) throw new Error("User Not Found")
       const data = await response.json();
    console.log(data.avatar_url);
    console.log(data.name);
    console.log(data.login);
    
       console.log(data);
       document.querySelector('.profile').style.display = 'flex'
       document.querySelector('#avater').src = data.avatar_url
       document.querySelector('.name').textContent = data.name || 'No name'
       document.querySelector('.Username').textContent = `@${data.login}`
       document.querySelector('.bio').textContent = data.bio || 'No bio'
       document.querySelector('.followers').textContent = `Followers: ${data.followers}`
       document.querySelector('.following').textContent = `following: ${data.following}`
       document.querySelector('.repos').textContent = `Repos: ${data.public_repos}`
       document.querySelector('.location').textContent = data.location || 'No location'
      
       
    }catch(error){
         document.querySelector('.profile').style.display = 'flex'
        document.querySelector('#avater').src ="User not found"
       document.querySelector('.name').textContent = ''
       document.querySelector('.Username').textContent = "Please check the username and try again"
       document.querySelector('.bio').textContent = ''
         document.querySelector('.followers').textContent =""
       document.querySelector('.following').textContent = ""
       document.querySelector('.repos').textContent =""
       document.querySelector('.location').textContent = ""
        
    }
    
}

Find.addEventListener('click', getProfile)