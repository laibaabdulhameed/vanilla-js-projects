const hamburgur = document.querySelector('#hamburger');
const menu =  document.querySelector('.mobile-menu');
hamburgur.addEventListener('click',()=>{
    menu.classList.toggle('active');
})