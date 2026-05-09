const input = document.querySelector('#input');
const list = document.querySelector('#items')
let items = ["Laiba", "Mango", "Amna", "Orange", "JavaScript", "Html", "CSS", "Python"]

input.addEventListener('input', () => {
    const val = input.value;
    const filteredItem = items.filter(item => item.toLowerCase().includes(val.toLowerCase()));
    renderList(filteredItem);

})

function renderList(filteredItem) {
    list.innerHTML = ""
    filteredItem.forEach(item => {
        list.innerHTML +=
            `<div>${item}<div>`
    });


}