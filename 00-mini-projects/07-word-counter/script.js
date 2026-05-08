const text = document.querySelector('#word-counter');
const words = document.querySelector('#words');

text.addEventListener('input',()=>{
    const textValue = text.value;
    const array = textValue.split(" ");
    const arrayLength = array.length;
    words.textContent = arrayLength;
})