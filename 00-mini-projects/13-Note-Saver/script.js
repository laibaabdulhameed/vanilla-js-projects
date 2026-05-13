const save = document.querySelector('.save')
const notes = document.querySelector('.notes')
let notesArray =[];
const saved = localStorage.getItem('notes');
if (saved) {
    notesArray = JSON.parse(saved)
}
renderNotes();
save.addEventListener('click', () => {
    const msg = document.querySelector('#text').value;
    notesArray.push(msg);
    localStorage.setItem('notes', JSON.stringify(notesArray))
    renderNotes();
})
function renderNotes() {
    notes.innerHTML = ''
    notesArray.forEach((note, index) => {
        notes.innerHTML += `
             <div class = "note">
               <p>${note}</p>
               <button onclick="deleteNote(${index})">Delete</button>
             </div>
        `
    })
}
function deleteNote(index) {
    notesArray.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesArray))
    renderNotes();
}
// localStorage.clear()