document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');
    const addMoreMenuBtn = document.getElementById('addMoreMenu');
    const placeOrderBtn = document.getElementById('placeOrder');

    // 메뉴 가격 정보
    const priceMap = {
        '아메리카노': 2000,
        '카페라떼': 3000,
        '큐브라떼' : 2900,
        '카푸치노': 3500,
        '카페모카': 3500,
        '바닐라라떼': 3700,
        '연유라떼': 3800,
        '에스프레소': 2500,
        '애플유자차': 3000,
        '캐모마일': 2800,
        '얼그레이': 2900,
        '자몽차': 3200,
        '레몬차': 2700,
        '녹차': 2500,
        '페퍼민트': 2800,
        '골드망고스무디': 4000,
        '딸기주스': 3500,
        '녹차프라페': 4500,
        '라임모히또': 4200,
        '체리콕': 3000,
        '유니콘프라페': 5000,
        '민트프라페': 4300,
        '딸기퐁크러쉬': 4500,
        '크로와상': 2500,
        '샌드위치': 5000,
        '머핀': 3000,
        '텀블러': 15000,
        '머그컵': 12000,
        '티셔츠': 20000,
    };

    // 로컬스토리지에서 장바구니 데이터를 가져오기
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // 장바구니 데이터를 렌더링
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        if (cart.length === 0) {
            totalPriceDisplay.textContent = '장바구니가 비어 있습니다.';
            return;
        }
        console.log('현재 장바구니 데이터:', cart);

        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');

            // 메뉴 이름과 가격
            const menuName = item.menu.name || item.menu; // 메뉴 이름 가져오기
            const menuPrice = priceMap[menuName] || 0; // 메뉴 가격 가져오기
            const totalItemPrice = menuPrice * item.quantity; // 개별 항목 총액 계산

            const menuInfo = document.createElement('h3');
            menuInfo.textContent = `${menuName} ${item.quantity}잔 : ${totalItemPrice}원`;

            // 삭제 버튼
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '삭제하기';
            deleteBtn.addEventListener('click', () => {
                cart.splice(index, 1); // 해당 아이템 삭제
                localStorage.setItem('cart', JSON.stringify(cart)); // 로컬스토리지 갱신
                renderCart(); // 장바구니 다시 렌더링
            });

            cartItemDiv.appendChild(menuInfo);
            cartItemDiv.appendChild(deleteBtn);
            cartItemsContainer.appendChild(cartItemDiv);

            totalPrice += totalItemPrice; // 총 가격 합산
        });

        totalPriceDisplay.textContent = `총 가격은 ${totalPrice}원 입니다`;
    }

    // "메뉴 더 담기" 버튼 클릭 이벤트
    addMoreMenuBtn.addEventListener('click', () => {
        window.location.href = 'v_askCategory.html';
    });

    // "주문하기" 버튼 클릭 이벤트
    placeOrderBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("장바구니가 비어 있습니다. 메뉴를 추가해주세요.");
            return;
        }

        // 주문 데이터를 생성
        const orderDetail = cart.map(item => {
            const menuName = item.menu.name || item.menu; // 메뉴 이름 가져오기
            const menuPrice = item.menu.price || priceMap[menuName] || 0; // 메뉴 가격 가져오기
            return {
                name: menuName,
                quantity: item.quantity,
                price: menuPrice,
                temperature: item.temperature || '',
                option: item.option || ''
            };
        });

        const totalPrice = orderDetail.reduce((acc, item) => acc + item.price * item.quantity, 0);

        // 주문 데이터를 로컬스토리지에 저장
        localStorage.setItem('orderDetail', JSON.stringify(orderDetail));
        localStorage.setItem('total_price', totalPrice);

        // 주문 페이지로 이동
        window.location.href = 'v_ordernum.html';
    });

    // 초기 렌더링
    renderCart();
});
