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
    render();
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
    // renderList();
}

function renderList() {
    const list = document.querySelector('#transaction-list');
    const filtered = filterTransactions();
    if (filtered.length === 0) {
        list.innerHTML = '';
        document.querySelector('#empty-state').style.display = 'block';
        return;
    }
    document.querySelector('#empty-state').style.display = 'none';

    list.innerHTML = filtered.map(t => {
        return `
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
    renderchart();
}

// deletetransition
function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveToStorage();
    render();
}
// filter
function filterTransactions() {
    const typeFilter = document.querySelector('input[name="filter-type"]:checked');
    const categoryFilter = document.querySelector('#filter-category').value;
    const searchFilter = document.querySelector('input[type="search"]').value.toLowerCase();

    let filtered = transactions;
    if (typeFilter && typeFilter.value !== 'all') {
        filtered = filtered.filter(t => t.type === typeFilter.value)
    }
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(t => t.category === categoryFilter)
    }
    if (searchFilter) {
        filtered = filtered.filter(t => t.category.includes(searchFilter))
    }

    return filtered;

}
document.querySelector('input[type="search"]').addEventListener('input', render);
document.querySelectorAll('input[name="filter-type"]').forEach(r => {
    r.addEventListener('change', render);
});
document.querySelector('#filter-category').addEventListener('change', render);

// clearfilter
function clearFilter() {
    document.querySelector('input[type="search"]').value = '';
    document.querySelector('#filter-category').value = 'all';
    document.querySelector('#filter-all').checked = true;

    render();
}
document.querySelector('.transaction__clear').addEventListener('click', clearFilter);

// renderchart
let chartInstance = null;
function renderchart() {
    const expensebycategory = transactions.filter(t => t.type === 'expense')
        .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
        }, {});

    console.log('labels:', Object.keys(expensebycategory));
    console.log('data:', Object.values(expensebycategory));

    const labels = Object.keys(expensebycategory);
    const data = Object.values(expensebycategory);
    const canvas = document.querySelector('#expense-chart-canvas');

    if (labels.length === 0) return;
    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(canvas, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#8b5cf6', '#22c55e', '#ef4444',
                    '#f59e0b', '#3b82f6', '#ec4899',
                    '#14b8a6', '#f97316', '#6366f1'
                ]
            }]
        }
    });
}
