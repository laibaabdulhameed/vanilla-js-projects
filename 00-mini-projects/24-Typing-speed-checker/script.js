const text = document.querySelector('#textDiv')
const time = document.querySelector('#time')
const paragraph = document.querySelector('#paragraph')

 let startTime;
 let timerInterval;
 let isStatrted = false;

function handleInput() {
    if(!isStatrted){
        isStatrted = true;
        startTime = Date.now();
        timerInterval = setInterval(() => {
           time.innerText =  Math.floor((Date.now()-startTime)/1000);
        }, 1000);
    }
    if(text.value===paragraph.innerText){
        clearInterval(timerInterval);
        time.innerText = "Done!";

    }
   
}
text.addEventListener('input', handleInput)