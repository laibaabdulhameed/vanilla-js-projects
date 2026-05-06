  const pswd = document.querySelector('#password');
    const btn = document.querySelector('#toggle-btn');
    const icon = document.querySelector('#eye-icon');
    btn.addEventListener('click',()=>{
        icon.classList.toggle('fa-eye-slash')
        if(icon.classList.contains('fa-eye-slash')){
            pswd.type = 'password'
        }else{
             pswd.type = 'text'
        }
        
    })