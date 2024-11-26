// order-number.js

document.addEventListener('DOMContentLoaded', function() {
    const orderNumberElement = document.getElementById('orderNumber');
    const orderNumber = localStorage.getItem('order_num'); 
    orderNumberElement.textContent = orderNumber;

    document.querySelector('.order-more-btn').addEventListener('click', function() {
        localStorage.clear();
    });
});


