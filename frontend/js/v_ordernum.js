document.addEventListener('DOMContentLoaded', function () {
    const orderNumDisplay = document.getElementById('orderNumDisplay');
    const addMoreOrderBtn = document.getElementById('addMoreOrder');

    // 장바구니 데이터와 주문 번호 가져오기
    const orderDetail = JSON.parse(localStorage.getItem('orderDetail')) || [];
    const total_price = localStorage.getItem('total_price') || 0;
    const storedOrderNum = localStorage.getItem('order_num');

    if (!orderDetail.length) {
        alert("장바구니가 비어 있습니다. 메뉴를 추가해주세요.");
        window.location.href = "v_askCategory.html";
        return;
    }

    if (storedOrderNum) {
        orderNumDisplay.textContent = `주문번호는 ${storedOrderNum}번 입니다.`;
    } else {
        orderNumDisplay.textContent = "주문 번호를 불러올 수 없습니다.";
    }

    // 서버에 주문 데이터 전송
    function sendOrderData() {
        const orderData = {
            orderDetail: JSON.stringify(orderDetail),
            total_price: total_price
        };

        fetch(`http://211.188.49.69:8080/${storedOrderNum}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.code === "SU") {
                console.log("주문 성공:", data);
                localStorage.removeItem('cart'); // 장바구니 초기화
            } else {
                alert("주문 처리 중 오류가 발생했습니다.");
            }
        })
        .catch(error => {
            console.error("에러 발생:", error);
            alert("주문 처리 중 오류가 발생했습니다.");
        });
    }

    sendOrderData();

    // 3초 후 안내 화면으로 이동
    setTimeout(() => {
        window.location.href = "gotokiosk.html";
    }, 3000);

    // "추가 주문하기" 버튼 클릭 이벤트
    addMoreOrderBtn.addEventListener('click', function () {
        window.location.href = "v_askCategory.html";
    });
});
