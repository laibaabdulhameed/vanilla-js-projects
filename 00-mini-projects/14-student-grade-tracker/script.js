const students = [
    { id: 1, name: "Ali", marks: 78 },
    { id: 2, name: "Laiba", marks: 92 },
    { id: 3, name: "Sara", marks: 45 },
    { id: 4, name: "Fahad", marks: 61 },
    { id: 5, name: "Amna", marks: 38 },
    { id: 6, name: "Usman", marks: 85 },
    { id: 7, name: "Hana", marks: 55 },
    { id: 8, name: "Zara", marks: 29 },
    { id: 9, name: "Omar", marks: 73 },
    { id: 10, name: "Bilal", marks: 90 },
    { id: 11, name: "Nida", marks: 48 },
    { id: 12, name: "Hassan", marks: 67 },
    { id: 13, name: "Maha", marks: 33 },
    { id: 14, name: "Talha", marks: 81 },
    { id: 15, name: "Sana", marks: 52 }
]
// renderList
const list = document.querySelector('.list')
function renderList() {
    students.forEach(student => {
        list.innerHTML += `
      <div class="student">
        <span>${student.id}:${student.name}</span>
        <span>${student.marks}</span>
        </div>
      `
    })
}
// average
function average() {
    const total = students.reduce((sum, student) => sum + student.marks, 0)
    const avg = total / students.length;
    const displayAvg = document.querySelector('.average');
    displayAvg.textContent = `
    Average: ${avg}
    `
}
// stats
function stats() {
    const marks = students.map(student => student.marks)
    const highest = Math.max(...marks)
    const lowest = Math.min(...marks)
    const maximum = document.querySelector('.highest')
    const minimum = document.querySelector('.lowest')
    maximum.textContent = `Highest: ${highest}`
    minimum.textContent = `Lowest: ${lowest}`
}
// result
function result(){
    const passed = students.filter(student => student.marks>=50)
    const failed = students.filter(student => student.marks<50)
    document.querySelector('.passed').innerHTML = passed.map(s=> 
        `
        <p>${s.name} - ${s.marks}</p>
        `
    ).join('')
    
    document.querySelector('.failed').innerHTML = failed.map(s=> 
        `
        <p>${s.name} - ${s.marks}</p>
        `
    ).join('')
    
}

renderList();
average();
stats();
result();
