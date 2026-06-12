let habit = document.querySelector('#write-habit');
let addBtn = document.querySelector('#add');
let displayData = document.querySelector('.display-div');
let data = [];
loadHabits();
renderHabits();
addBtn.addEventListener('click', () => {
    if (!habit.value) {
        alert("Write Habit");
        return;
    }
    let habitObj = {
        id: Date.now(),
        name: habit.value,
        completedDates: []
    }
    data.push(habitObj);
    saveHabits();
    habit.value = "";
    renderHabits();
    console.log(data);

})
function saveHabits() {
    localStorage.setItem('habits', JSON.stringify(data));
}
function loadHabits() {
    let stored = localStorage.getItem('habits');
    if (stored) {
        data = JSON.parse(stored);
    }
}

function renderHabits() {
    displayData.innerHTML = "";
    data.forEach(habit => {
        displayData.innerHTML += `
          <div class="habit-card">
                <div class="habit-info">
                    <input type="checkbox" data-id="${habit.id}">
                    <span class="habit-name">${habit.name}</span>
                </div>
                <div class="habit-meta">
                    <span class="streak">🔥 0-day streak</span>
                    <button class="delete-btn" data-id="${habit.id}">Delete</button>
                </div>
            </div>
          
          `
    })
}
displayData.addEventListener('click',(e)=>{
 if(e.target.classList.contains('delete-btn')){
   let id = Number(e.target.dataset.id);
   data = data.filter(habit => habit.id!==id);
   saveHabits();
   renderHabits(); }
})
