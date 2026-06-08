const btn = document.querySelector('#button');
const total = document.querySelector('#total-amount');
const perPerson = document.querySelector('#per-person');

btn.addEventListener('click', () => {
    const bill = Number(document.querySelector('#bill').value);
    const tip = Number(document.querySelector('#tip').value);
    const people = Number(document.querySelector('#people').value);
    // conditions
     if(bill<=0 || tip<=0 || people<=0){
        alert("Please enter valid Number.")
        return ;
    }
    let tipAmount = bill * tip / 100;
    let totalAmount = tipAmount + bill;
    total.textContent = `$${totalAmount} ` ;
    // perPerson
    let  per = totalAmount/people;
    perPerson.textContent= `$${per}`;
})