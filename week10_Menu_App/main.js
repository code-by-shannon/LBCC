const productsEl = document.querySelector('.products');
const cartButtonEl = document.querySelector('.js-cart-button');
const cartContentEl = document.querySelector('.cart');
const cartItemCountEl = document.querySelector('.js-cart-count');
const cartItemsEl = document.querySelector('.cart__items');

const cartSubtotalEl = document.querySelector('.js-cart-subtotal');
const cartTotalEl = document.querySelector('.js-cart-total');
const cartTaxEl = document.querySelector('.js-cart-tax');

let cart = {};

let items = [
    {
        name: "Hamburger",
        description: "Hamburger with our special homemade sauce",
        price: 10,
        quantity: 3,
        image:"images/hamburger.png"
    },
    {
        name: "Cheeseburger",
        description: "100% natural cheese",
        price: 12,
        quantity: 5,
        image:"images/cheeseburger.png"
    },
    {
        name: "Double Cheeseburger",
        description: "Two patties of our famous angus beef",
        price: 15,
        quantity: 5,
        image:"images/double-cheeseburger.png"
    },
    {
        name: "Fries",
        description: "Idaho potatoes with a touch of sea salt",
        price: 8,
        quantity: 10,
        image:"images/fries.png"
    }
];

const renderProduct = ({name, description, price, image}) => {
  
    
    return `
    <li class="products__item js-item-container" data-id="${name}">
                <img src="${image}" class="products__image">
                <div class="products__title">${name}</div>
                <div class="products__description">${description}</div>
                <div class="products__price">$${price}</div>
                <button class="products__cta" data-action = 'add'>Add to Order</button>
            </li>`;
};

const renderCart = () => {
    const cartHTML = Object.values(cart).map(
        ({image, name, price, ordered})=>
          `
          <li class="cart__item js-item-container" data-id="${name}">
          <img src="${image}" class="cart_image">
          <div>
              <div class="cart__title">${name}</div>
              <div class="cart__price">$${price}</div>
          </div>
          <div>Quantity: <span>${ordered}</span></div>
              <button data-action = 'add'>+1</button>
              <button data-action = 'subtract'>-1</button>
          </div>
      </li>`
        ).join('');
    
        cartItemsEl.innerHTML = cartHTML;

        const subtotal = calculateSubtotal();
        const tax = subtotal * 0.09;
        const total = subtotal + tax;

        cartSubtotalEl.textContent = subtotal;
        cartTaxEl.textContent = tax.toFixed(2);
        cartTotalEl.textContent = total.toFixed(2);
};

function calculateSubtotal(){
    return Object.values(cart).reduce((acc, item) => acc + item.price * item.ordered, 0)
};

const updateCartCount = () =>{
    const total = Object.values(cart).reduce((acc, current) => acc + current.ordered, 0);
    cartItemCountEl.textContent = total;
}

const findItem = (name) => items.find((item) => item.name === name);
  
// Rendering of products on main page
const itemsHTML = items.map((item)=> renderProduct(item)).join("");
productsEl.innerHTML = itemsHTML;


// Toggle for  cart in header
cartButtonEl.addEventListener('click', function(){
    cartContentEl.classList.toggle('cart--open');
});

const handleProductsListClick = (e) => {
    console.log('hit');
    const container = e.target.closest('.js-item-container');
    const action = e.target.getAttribute('data-action');
    const name = container.getAttribute('data-id');

    console.log(name);

    if (action === 'add'){
        const productData = findItem(name);

        if(!cart[name]) {
            cart = {...cart, [name]: {...productData, ordered: 1}};
        } else {
            if(cart[name].quantity <= cart[name].ordered) return;
            cart[name].ordered += 1;
        }
    } else if(action === 'subtract'){
        cart[name].ordered -= 1;
        if(cart[name].ordered === 0){
            delete cart[name];
        }
    }
    updateCartCount();
    renderCart();
} 

productsEl.addEventListener('click', handleProductsListClick);
cartItemsEl.addEventListener('click', handleProductsListClick);

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
        question.addEventListener('click', () => {
            // sibling because the p:answer and p:question are next to each other
        const answer = question.nextElementSibling;
        
        if(answer.style.display === 'block'){
            answer.style.display = 'none';
          } else {
            answer.style.display = 'block';
          }
          
        });
});

const form = document.getElementById('form');
const error_message = document.getElementById('error_message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    let empty = false;

    inputs.forEach(input => {
        if(input.value === ''){
            empty = true;
            error_message.innerText = 'Please fill out form before trying to submit'
        }
    });


});


