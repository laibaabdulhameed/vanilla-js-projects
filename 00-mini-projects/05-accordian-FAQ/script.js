const  faqs = document.querySelectorAll('.faq');
const  question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
  
faqs.forEach((faq) => 
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active');
    })
)
document.addEventListener('click',(e)=>{
    if(!e.target.closest('.faq')){
        faqs.forEach(faq => {
         faq.classList.remove('active');
    });
    }
    
})

