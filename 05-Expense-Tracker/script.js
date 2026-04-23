let addbtn = document.querySelector(".transaction__add");
let addamount = document.querySelector("#amount");
let addcategory = document.querySelector("#category");
let adddate = document.querySelector("#date-label");
// let income = document.querySelector('.Income')
// let expense = document.querySelector('.Expense')
// let totalBalance = document.querySelector('.totalbalance')

// let transactions = [];
addbtn.addEventListener('click', addTransactions);
function addTransactions(e) {
    e.preventDefault();
    // collect
    const addtype = document.querySelector('input[name="type"]:checked');
    const amount = addamount.value;
    const type = addtype.value;
    const category = addcategory.value;
    const date = adddate.value;
    // validate
    if (!amount) {
        alert("please add the ammount")
        return;
    }
    if (amount <= 0) {
        alert("Ammount must no be in negative")
        return;
    }
    if (!type) {
        alert("please select the type")
        return;
    }
    if (!date) {
        alert("please select the date")
        return;
    }
    // create
    const newTransctions = {
        id: Date.now(),
        amount: Number(amount),
        type: type,
        category: category,
        date: date
    }
    //  push
    transactions.push(newTransctions);
    saveToStorage();
    renderSummary();
    addamount.value = '';
    adddate.value = '';
    document.querySelectorAll('input[name="type"]').forEach(r => r.checked = false);
}
// save to local storage
function saveToStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
// load from Storage
function loadFromStorage() {
    const saved = localStorage.getItem('transactions');

    transactions = saved ? JSON.parse(saved) : [];
}

// declare empty 
let income;
let expense;
let totalBalance;

let transactions = [];

document.addEventListener("DOMContentLoaded", () => {
    // assign when DOM ready
    income = document.querySelector('.Income');
    expense = document.querySelector('.Expense');
    totalBalance = document.querySelector('.totalbalance');

    loadFromStorage();
    renderSummary();
});

// render


function renderSummary() {
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0)
    const totalexpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)
    const balance = totalIncome - totalexpense;
    income.textContent = `$${totalIncome}`;
    expense.textContent = `$${totalexpense}`;
    totalBalance.textContent = `$${balance}`;
    renderList();
}

function renderList(){
    const list = document.querySelector('#transaction-list');
    if(transactions.length === 0){
        list.innerHTML = '';
        document.querySelector('#empty-state').style.display = 'block';
        return;
    }
     document.querySelector('#empty-state').style.display = 'none';

     list.innerHTML = transactions.map(t => {
        return`
        <div class="transaction__entry">
        <span>${t.category}</span>
        <span class="transaction__entry--${t.type}">${t.type}</span>
        <span>${t.type === 'income' ? '+' : '-'}$${t.amount}</span>
        <span>${t.date}</span>
         <button type="button"  class="btn--delete" onclick="deleteTransaction(${t.id})">🗑</button>
        </div>
`}).join('');
}

function render() {
  renderSummary();
  renderList();
} 

// deletetransition
function  deleteTransaction(id){
    transactions = transactions.filter(t => t.id !== id);
    saveToStorage();
    render();
}