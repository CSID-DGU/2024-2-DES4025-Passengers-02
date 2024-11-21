document.addEventListener('DOMContentLoaded', function () {
    const orderNumDisplay = document.getElementById('orderNumDisplay');
    const addMoreOrderBtn = document.getElementById('addMoreOrder');
    
    // 장바구니 데이터 가져오기
    const cart = JSON.parse(localStorage.getItem('Menu')) || [];
    if (cart.length === 0) {
        alert("장바구니가 비어 있습니다. 메뉴를 추가해주세요.");
        window.location.href = "v_askCategory.html";
        return;
    }
    
    // 서버에서 받은 주문 번호를 로컬 스토리지에서 가져오기
    const storedOrderNum = localStorage.getItem('order_num');
    if (storedOrderNum) {
        orderNumDisplay.textContent = `주문번호는 ${storedOrderNum}번 입니다.`;
    } else {
        orderNumDisplay.textContent = "주문 번호를 불러올 수 없습니다.";
    }

    // 주문 데이터를 서버에 전송
    function sendOrderData() {
        let total_price = 0;
        const orderDetail = cart.map(item => {
            const itemPrice = item.price || 0; // 가격을 가져오거나 기본값 0
            total_price += itemPrice * item.quantity;

            return {
                name: item.menuItem,
                quantity: item.quantity,
                price: itemPrice,
                temperature: item.temperature,
                option: item.option
            };
        });

        // 주문 데이터 준비
        const orderData = {
            orderDetail: JSON.stringify(orderDetail),
            total_price: total_price
        };

        // 서버에 POST 요청
        fetch('http://211.188.49.69:8080/order', { // 실제 API URL로 변경 필요
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('주문 요청에 실패했습니다.');
            }
            return response.json(); // JSON 응답을 파싱
        })
        .then(data => {
            if (data.code === "SU") {
                console.log("주문 성공:", data);
                const orderNum = data.order_num; // 서버에서 받은 주문 번호
                orderNumDisplay.textContent = `주문번호는 ${orderNum}번 입니다.`; // 주문 번호 표시
                localStorage.removeItem('Menu'); // 장바구니 초기화
            } else {
                console.error(`주문 실패: ${data.message}`);
                alert("주문 처리 중 오류가 발생했습니다.");
            }
        })
        .catch(error => {
            console.error("에러 발생:", error);
            alert("주문 처리 중 오류가 발생했습니다.");
        });
    }

    // 초기 주문 데이터 전송
    sendOrderData();

    // "추가 주문하기" 버튼 이벤트
    addMoreOrderBtn.addEventListener('click', function () {
        window.location.href = "v_askCategory.html"; // 메뉴 선택 페이지로 이동
    });
});
