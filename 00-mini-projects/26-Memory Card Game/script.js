const cardsObj=["🍎", "🍌", "🍓", "🍇", "🍎", "🍌", "🍓", "🍇"];
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

function  displayCards(){
    cards.innerHTML = cardsObj.map((e,i)=>{
        return  `<div class="card card${i+1}">
              <span>${e}</span>
          </div>
         `
    }).join('');
    
}

window.onload = function(){
     shuffle(cardsObj);
    }
    displayCards();










