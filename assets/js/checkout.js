const checkoutForm = document.querySelector('#checkout-form');
if (checkoutForm) checkoutForm.addEventListener('submit', (event) => { event.preventDefault(); alert('Order received.'); });
