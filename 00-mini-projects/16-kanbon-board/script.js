let tasks = [];
let inprogress = [];
let done = [];

const todoDiv = document.querySelector('#todo .tasks');
const inProgressDiv = document.querySelector('#inprogress .tasks');
const doneDiv = document.querySelector('#done .tasks');

function addTasks() {
    let task = document.querySelector('#task-input').value;
    if (!task) return;
    tasks.push(task);
    renderTasks();
}

function renderTasks() {
    todoDiv.innerHTML = '';
    tasks.forEach((task, index) => {
        todoDiv.innerHTML += `
            <div class="task">
                <div>${index + 1}: ${task}</div>
                <button onclick="moveToProgress(${index})">Move →</button>
            </div>
        `;
    });
}

function renderInProgress() {
    inProgressDiv.innerHTML = '';
    inprogress.forEach((task, index) => {
        inProgressDiv.innerHTML += `
            <div class="task">
                <div>${index + 1}: ${task}</div>
                <button onclick="moveToDone(${index})">Move →</button>
            </div>
        `;
    });
}

function renderDone() {
    doneDiv.innerHTML = '';
    done.forEach((task, index) => {
        doneDiv.innerHTML += `
            <div class="task">
                <div>${index + 1}: ${task}</div>
            </div>
        `;
    });
}

function moveToProgress(index) {
    let task = tasks.splice(index, 1)[0];
    inprogress.push(task);
    renderTasks();
    renderInProgress();
}

function moveToDone(index) {
    let task = inprogress.splice(index, 1)[0];
    done.push(task);
    renderInProgress();
    renderDone();
}

let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', addTasks);
