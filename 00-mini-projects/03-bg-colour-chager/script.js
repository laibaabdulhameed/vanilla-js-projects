const btn = document.querySelector('.switch-mode');
// const label = document.querySelector('.switch-mode').textContent;
btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark'); 
    if(document.body.classList.contains('dark')){
        btn.textContent = 'Light'
    }else{
         btn.textContent = 'Dark' 
    }
});