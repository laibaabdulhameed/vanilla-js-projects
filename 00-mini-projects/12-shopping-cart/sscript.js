const data = [
    { id: 1, name: "Wireless Headphones", price: 49 },
    { id: 2, name: "Mechanical Keyboard", price: 89 },
    { id: 3, name: "USB-C Hub", price: 35 },
    { id: 4, name: "Webcam HD", price: 65 },
    { id: 5, name: "Mouse Pad XL", price: 20 }
]
const products = document.querySelector('.products')
// render
function renderProducts() {
    data.forEach(product => {
        products.innerHTML += `
    <div class="product">
        <h3>${product.name}</h3>
        <span class="price">$${product.price}</span>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
`
    });

}
renderProducts();
const cartArray = [];
function addToCart(id){
      const product = data.find(item => item.id === id);
      cartArray.push(product);
      renderCart();
}
const  cartItems = document.querySelector('.cart-items')
function renderCart(){
    cartItems.innerHTML = '';
    cartArray.forEach(product => {
      cartItems.innerHTML += `
    <div class="product">
        <h3>${product.name}</h3>
        <span class="price">$${product.price}</span>
    </div>
`
const total = cartArray.reduce((sum,product)=> sum+product.price,0)
const totaldiv = document.querySelector('.total');
totaldiv.textContent = `Total: $${total}`
    });
}