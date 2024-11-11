// order-number.js

document.addEventListener('DOMContentLoaded', function() {
    const orderNumberElement = document.getElementById('orderNumber');

    // 서버에서 주문 번호를 가져온다고 가정
    // 여기서는 예시로 임의의 주문 번호를 설정
    const orderNumber = localStorage.getItem('order_num'); // 예제용 주문번호, 서버로부터 가져올 수도 있음

    // 주문 번호를 HTML에 업데이트
    orderNumberElement.textContent = orderNumber;

    // 전송 버튼 클릭 시 처리
    document.querySelector('.order-more-btn').addEventListener('click', function() {
        alert('준비 중입니다.');
        // 실제로는 새로운 주문 화면으로 이동하는 로직 추가 가능
    });
});


