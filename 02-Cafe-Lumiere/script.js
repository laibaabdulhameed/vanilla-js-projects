const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobileMenu');
function toogleMenu(){
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
}

hamburger.addEventListener('click',toogleMenu);

const navlinks=document.querySelectorAll('.mobile-menu a');
navlinks.forEach(function(link){
    link.addEventListener('click',function(){
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

document.addEventListener('click', function(event){
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if(!isClickInsideMenu && !isClickOnHamburger){
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    }
});