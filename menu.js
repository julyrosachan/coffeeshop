const cards = document.querySelectorAll('.card');
const innerDiv = document.querySelectorAll('.innerDiv');
const cart = document.querySelector('.cart');
const cartTotal = document.querySelector('#cart-total');
const orderBtns = document.querySelectorAll('.order-btn');
const undoBtns = document.querySelectorAll('.undo-btn');
const checkoutBtn = document.querySelector('.checkout-btn');
const backToMenuBtn = document.querySelector('.back-to-menu-btn');
const sushiName = document.querySelector('.front h1');
const cartItems = document.querySelector('.cart-items');


// Initial cart total
let result = 0;

orderBtns.forEach(function(orderBtn) {
  orderBtn.addEventListener('click', function(e) {
    e.currentTarget.parentNode.parentNode.classList.add('active');
    
    // Add clicked sushi item name to cart
   /* let newCartItem = document.createElement('li');

    newCartItem.textContent = e.currentTarget.previousElementSibling.previousElementSibling.textContent;
    cartItems.appendChild(newCartItem);*/
    
    
    cartTotal.textContent = `$${result + 7}.00`;
    result = result + 7;
    
    cart.classList.remove('hide-cart');
  })
})

undoBtns.forEach(function(undoBtn) {
  undoBtn.addEventListener('click', function(e) {
    e.currentTarget.parentNode.parentNode.classList.remove('active');
    
    
    
    
    /*if(e.currentTarget.previousElementSibling) {
      cartItems.removeChild();
      
      console.log('this worked');
    }*/
   /*if(cartItems.hasChildNodes()) {
     let newCartItem = cartItems.childNode;
      cartItems.removeChild(newCartItem);
   };*/
    
    
    
    cartTotal.textContent = `$${result - 7}.00`;
    result = result - 7; 
    
    if(result === 0) {
      hideCart();
    }
    
  })
})

// Hide cart if there is nothing in it
let hideCart = function() {
  if(result === 0) {
    cart.classList.add('hide-cart');
  } 
}

hideCart();

// Expand cart when checkout btn clicked
checkoutBtn.addEventListener('click', function() {
  cart.classList.add('expand-cart');
})

// Show menu when back to menu btn clicked
backToMenuBtn.addEventListener('click', function() {
  cart.classList.remove('expand-cart');
})