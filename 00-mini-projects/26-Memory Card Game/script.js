const cardsObj = ["🍎", "🍌", "🍓", "🍇", "🍎", "🍌", "🍓", "🍇"];
const cards = document.querySelector('.cards')

// shuffle array through Fisher Yater shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

function displayCards() {
  cards.innerHTML = cardsObj.map((e, i) => {
    return `<div class="card card${i + 1}">
              <span>${e}</span>
          </div>
         `
  }).join('');

}
let firstCard = null;
let secondCard = null;
let lockboard = false;
let matchedPairs = 0;
function flipCards() {
  cards.addEventListener("click", (event) => {
    if (lockboard) return;
    const card = event.target.closest('.card');
    if (!card) return;
    card.classList.toggle('flipped')
    let obj = card.querySelector('span').textContent;
    if (firstCard === null) {
      firstCard = card;
    } else {
      secondCard = card;
      lockboard = true;
      if (firstCard.querySelector('span').textContent === secondCard.querySelector('span').textContent) {
        firstCard = null;
        secondCard = null;
        lockboard = false
        matchedPairs++;
        setTimeout(() => {
           if (matchedPairs === 4) {
          alert("Congritualations! You Win.")
        }
        }, 1000);
       
      } else {
        setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard = null;
          secondCard = null;
          lockboard = false
        }, 1000);

      }
    }

  })

}

window.onload = function () {
  shuffle(cardsObj);
  displayCards();
  flipCards();
}










