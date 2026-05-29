const btn = document.querySelector('.generate');
const upper = document.querySelector('#upper')
const lower = document.querySelector('#lower')
const num = document.querySelector('#num')
const charaters = document.querySelector('#special')
const result = document.querySelector('#result')

function generatePaswrd() {
    const len = document.querySelector('#length').value;
    if(len<=0){
         alert("Enter valid length")
         return; }
    let chars = "";
    let password = "";
    if (upper.checked) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (lower.checked) {
        chars += "abcdefghijklmnopqrstuvwxyz"
    }
    if (num.checked) {
        chars += "0123456789"
    }
    if (charaters.checked) {
        chars += "!@#$%^&*"
    }

    if(chars===""){
        alert("Select at least one option")
        return;
    }else{
       for (let i = 0; i < len; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        let randomChar = chars[randomIndex];
        password += randomChar;
        console.log(password);
        
    }

    }
    result.innerHTML = `
     <p>Password: ${password}</p>
    `
    
   


}

btn.addEventListener('click', generatePaswrd);