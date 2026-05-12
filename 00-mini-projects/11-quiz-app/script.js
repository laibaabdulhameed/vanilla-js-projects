const data = [
    {
        question_number: 1,
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Mode Language", "None of these"],
        correct: "Hyper Text Markup Language"
    },
    {
        question_number: 2,
        question: "Which keyword declares a variable in JS?",
        options: ["var", "let", "const", "All of these"],
        correct: "All of these"
    },
    {
        question_number: 3,
        question: "Which method adds an item to an array?",
        options: ["push()", "pop()", "shift()", "splice()"],
        correct: "push()"
    },
    {
        question_number: 4,
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style System", "Creative Style Sheets", "None"],
        correct: "Cascading Style Sheets"
    },
    {
        question_number: 5,
        question: "Which event fires when user types in an input?",
        options: ["click", "input", "change", "keyup"],
        correct: "input"
    }
]
let index = 0;
let score = 0;
let Question = document.querySelector('.question');
let Options = document.querySelector('.options')
let Score = document.querySelector('.score')
function showQuestion(index) {
    Question.textContent = data[index].question;
    Options.innerHTML = '';
    data[index].options.forEach(option => {
        Options.innerHTML += `<button class="option">${option}</button>`
    })
    let optbtns = document.querySelectorAll('.option');
    optbtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.textContent === data[index].correct) {
                btn.classList.add('correct');
                score++;
                Score.textContent = score;
            } else {
                btn.classList.add('wrong')
                optbtns.forEach(btn => {
                   
                    if (btn.textContent === data[index].correct) {
                        btn.classList.add('correct');
                    }
                })
            }
            optbtns.forEach(btn =>  btn.disabled = true)
            index++;
            setTimeout(() => {
                showQuestion(index);
            }, 1000);

        })
    })
}
showQuestion(0);



