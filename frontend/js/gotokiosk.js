document.addEventListener('DOMContentLoaded', function() {
    const orderNumberElement = document.getElementById('orderNumber');

    // 로컬 스토리지에서 주문 번호 가져오기
    const orderNumber = localStorage.getItem('order_num');
    if (orderNumber) {
        orderNumberElement.textContent = orderNumber;
    } else {
        orderNumberElement.textContent = "알 수 없음";
    }

    // "키오스크로 주문 번호 전송하기" 버튼 클릭 이벤트
    document.querySelector('.order-more-btn').addEventListener('click', function() {
        localStorage.clear();
    });
});
