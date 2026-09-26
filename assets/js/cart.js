const cart = JSON.parse(localStorage.getItem('plant-nursery-cart') || '[]');
const cartItems = document.querySelector('#cart-items');
if (cartItems) cartItems.textContent = cart.length ? `${cart.length} item(s) in your cart.` : 'Your cart is empty.';
