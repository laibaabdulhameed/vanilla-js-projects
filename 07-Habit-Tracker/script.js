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
        let today = new Date().toISOString().slice(0,10);
        let isChecked = habit.completedDates.includes(today)? "Checked" : "";
        let streak = getStreak(habit);
        displayData.innerHTML += `
          <div class="habit-card">
                <div class="habit-info">
                    <input type="checkbox" data-id="${habit.id}" ${isChecked}>
                    <span class="habit-name">${habit.name}</span>
                </div>
                <div class="habit-meta">
                    <span class="streak">🔥 ${streak}-day streak</span>
                    <button class="delete-btn" data-id="${habit.id}">Delete</button>
                </div>
            </div>
          
          `
    })
}
displayData.addEventListener('click', (e) => {
    console.log(e.target.tagName, e.target.type);
    
    if (e.target.classList.contains('delete-btn')) {
        let id = Number(e.target.dataset.id);
        data = data.filter(habit => habit.id !== id);
        saveHabits();
        renderHabits();
    }
    if (e.target.type === "checkbox") {
        let id = Number(e.target.dataset.id);
        let habit = data.find(h => h.id === id);
        let today = new Date().toISOString().slice(0, 10);
        if (habit.completedDates.includes(today)) {
            habit.completedDates = habit.completedDates.filter(date => date !== today)
        } else {
            habit.completedDates.push(today);
        }
        saveHabits();
        renderHabits();
    }

})
function getStreak(habit){
   let streak = 0;
   let d = new Date();
   while(true){
    let dateStr = d.toISOString().slice(0, 10);
    if(habit.completedDates.includes(dateStr)){
        streak++;
        d.setDate(d.getDate()-1)
    }else{
        break;
    }
   }
  return streak;
}



