document.addEventListener('DOMContentLoaded', function() {
    const orderNumberElement = document.getElementById('orderNumber');
    const orderNumber = localStorage.getItem('order_num'); // 예제용 주문번호, 서버로부터 가져올 수도 있음
    orderNumberElement.textContent = orderNumber;

    setTimeout(function() {
        window.location.href = "sendOrderNum.html"; // 원하는 페이지로 이동
    }, 3000); // 3000ms = 3초
});

