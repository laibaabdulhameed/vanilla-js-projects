const progress = document.querySelector('.progress');
const checkboxes = document.querySelectorAll('.circle-check');
const input_text = document.querySelectorAll('.input-text');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateProgress)
})

function updateProgress() {
    let checked = 0;
    checkboxes.forEach(checkbox =>
    {   
    
        if(checkbox.checked && checkbox.nextElementSibling.value != ""){
            checked++;
        }
})
const percentage = (checked/3)*100;
progress.style.width = percentage + '%'
progress.style.backgroundColor = '#48A300';
}

function saveGoals() {
    let goals = [];
    input_text.forEach( goal => {
            goals.push(goal.value);
    })
    localStorage.setItem('goals', JSON.stringify(goals))
}
input_text.forEach(input =>{
    input.addEventListener('input', saveGoals)
})

function loadGoals() {
    let goals = JSON.parse(localStorage.getItem('goals'))
    goals.forEach((goal, index) => {
        input_text[index].value = goal;
        
    });

    
}
loadGoals();