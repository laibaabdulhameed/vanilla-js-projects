const textarea = document.querySelector('#character-input');
const text = document.querySelector('#characters'); 
let textLength = document.querySelector('#Length');

textarea.addEventListener('input',()=>{
    let textAreaLength = textarea.value.length;
    let remaining = 150 - textAreaLength;
    textLength.textContent = remaining;
    if(remaining <=20){
        text.classList.add('warning');
    }else{
         text.classList.remove('warning');
    }
})

