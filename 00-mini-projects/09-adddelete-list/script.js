const btn = document.querySelector('#add');
let items = []


function deleteItem(index) {
    items.splice(index, 1);
    renderList();
}
function renderList() {
    list.innerHTML = ''
    items.forEach((item, index) => {
        list.innerHTML += `
         <div class="item">
         <span>${index + 1}.${item}</span>
         <button onClick = "deleteItem(${index})" class="delete">Delete</button>
         </div>
          ` });
}
btn.addEventListener('click', () => {
    const input = document.querySelector('#input').value;
    items.push(input);
    renderList();
});
