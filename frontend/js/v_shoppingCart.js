document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');
    const addMoreMenuBtn = document.getElementById('addMoreMenu');

    // 메뉴 가격 정보
    const priceMap = {
        '아메리카노': 2000,
        '카페라떼': 3000,
        '카푸치노': 3500,
        '녹차': 2500,
        '홍차': 3000,
        '캐모마일': 3500,
        '망고 스무디': 4500,
        '딸기 주스': 4000,
        '레몬에이드': 3500,
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

        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');

            // 메뉴 이름과 가격
            const menuPrice = priceMap[item.menu] || 0; // 기본 가격 가져오기
            const totalItemPrice = menuPrice * item.quantity; // 개별 항목 총액 계산

            const menuInfo = document.createElement('h3');
            menuInfo.textContent = `${item.menu} - ${menuPrice}원 x ${item.quantity || 1}개 = ${totalItemPrice}원`;

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

    // 초기 렌더링
    renderCart();
});
