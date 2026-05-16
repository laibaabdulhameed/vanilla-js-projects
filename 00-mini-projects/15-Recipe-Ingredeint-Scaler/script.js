const recipe = {
    name: "Chocolate Cake",
    baseServings: 4,
    ingredients: [
        { name: "Flour", amount: 2, unit: "cups" },
        { name: "Sugar", amount: 1, unit: "cup" },
        { name: "Eggs", amount: 3, unit: "" },
        { name: "Butter", amount: 0.5, unit: "cup" },
        { name: "Milk", amount: 1, unit: "cup" }
    ]
}
const add = document.querySelector('#add')

// render data
function renderRecipe() {
    const display = document.querySelector('.recepie');
    display.innerHTML = '';
    display.innerHTML += `
     <h3>name: ${recipe.name}</h3>
     <span>baseServings: ${recipe.baseServings}</span>
    `
    recipe.ingredients.forEach(ingredient => {
        display.innerHTML += `
           <div>
           <span>name:${ingredient.name}</span>
           <span>amount:${ingredient.amount} , unit: ${ingredient.unit}</span>
           </div>
           `
    })
}
renderRecipe();

// scale

function scale() {
    const servings = Number(document.querySelector('#people').value)
    const updatedDiv = document.querySelector('.updated-recepie')
    updatedDiv.innerHTML = ''
    recipe.ingredients.forEach(ingredient => {
        const ratios = servings / recipe.baseServings
        let scaleAmount = ingredient.amount * ratios;
        updatedDiv.innerHTML += `
        <div>
            <span>${ingredient.name}</span>
            <span>${scaleAmount} ${ingredient.unit}</span>
        </div>
    `

    })
}
add.addEventListener('click', scale);
