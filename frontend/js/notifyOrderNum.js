document.addEventListener('DOMContentLoaded', function() {
    // 예를 들어, 주문번호를 동적으로 설정할 경우 사용할 수 있습니다.
    const orderNumberElement = document.getElementById('orderNumber');
    const orderNumber = 243; // 예제용 주문번호, 서버로부터 가져올 수도 있음

    orderNumberElement.textContent = orderNumber;

    // 3초 후에 다른 페이지로 이동
    setTimeout(function() {
        window.location.href = "sendOrderNum.html"; // 원하는 페이지로 이동
    }, 3000); // 3000ms = 3초
});

// 뒤로 가기 버튼 기능
document.querySelector('.back-btn').addEventListener('click', function() {
    window.history.back(); // 이전 페이지로 이동
});
