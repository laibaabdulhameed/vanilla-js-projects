import questions from "./data.js";
const popup = document.querySelector('.popup');
const quizHeading = document.querySelector('.quiz__heading');
const popupButton = document.querySelector('.popup__btn');
const card = document.querySelector('.quiz__card');
const questionNumber = document.querySelector('.quiz__questionNumber');
const question = document.querySelector('.quiz__question');
const btn = document.querySelectorAll('.quiz__btn');
const progressFill = document.querySelector('.quiz__progress-fill');
const result = document.querySelector('.quiz__result');
const score = document.querySelector('.quiz__score');
const restart = document.querySelector('.quiz__restart');

popupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    quizHeading.style.display = 'block';
    card.style.display = 'block';
    showQuestion();
})

let currentIndex = 0;
let scoreCount = 0;
function showQuestion() {
    if (currentIndex >= questions.length) return;
    const current = questions[currentIndex];
    questionNumber.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    // progres bar
    const percent = ((currentIndex + 1) / questions.length) * 100;
    progressFill.style.width = percent + "%";
    question.textContent = current.question;
    btn.forEach((button, index) => {
        button.classList.remove('quiz__btn--correct');
        button.classList.remove('quiz__btn--wrong');
        button.disabled = false;
        if (current.options[index]) {
            button.textContent = current.options[index];
            button.style.display = 'block';
        }
        else {
            button.style.display = 'none';
        }

        button.onclick = () => {
            btn.forEach(b => b.disabled = true)
            if (index === current.correct) {
                button.classList.add('quiz__btn--correct');
                scoreCount++;
            }
            else {
                button.classList.add('quiz__btn--wrong');
                btn[current.correct].classList.add('quiz__btn--correct');
            }

            setTimeout(() => {
                currentIndex++;
                if (currentIndex < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            }, 1000);
        }
    })
}

function showResult() {
    card.style.display = 'none';
    quizHeading.style.display = 'none';
    result.style.display = 'block';
    score.textContent = `Your score is ${scoreCount} out of ${questions.length}`;
}
restart.addEventListener('click', () => {
    currentIndex = 0;
    scoreCount = 0;

    result.style.display = 'none';
    quizHeading.style.display = 'block';
    card.style.display = 'block';

    showQuestion();
});


