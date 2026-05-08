const btn = document.querySelector('#btn');
const dispaly = document.querySelector('#display')
const model = document.querySelector('#model')

btn.addEventListener('click', () => {
    let timeLeft = Number(document.querySelector('#time').value);
    if(timeLeft <= 0 ){
        alert("please enter the correct time")
        return 
    }
    const interval = setInterval(() => {
        timeLeft -= 1;
        dispaly.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(interval);
            model.classList.add('show');
            let timeInput = document.querySelector('#time');
            timeInput.value = '';
        }
    }, 1000);
})