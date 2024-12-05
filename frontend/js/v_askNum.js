document.addEventListener('DOMContentLoaded', function () {
    // 로컬스토리지에서 선택된 옵션을 가져오기
    const selectedMenu = localStorage.getItem('selectedMenuItem');
    const selectedPrice = localStorage.getItem('selectedMenuPrice'); // 가격 가져오기
    const selectedTemperature = localStorage.getItem('selectedTemperature');
    const selectedOption = localStorage.getItem('selectedOption');

    // 콘솔에 선택된 값 출력
    console.log("선택된 메뉴:", selectedMenu);
    console.log("선택된 가격:", selectedPrice);
    console.log("선택된 온도:", selectedTemperature);
    console.log("선택된 옵션:", selectedOption);

    let quantity = 1;

    // 수량 버튼 이벤트
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const quantityDisplay = document.getElementById('quantityDisplay');

    increaseBtn.addEventListener('click', function () {
        quantity++;
        quantityDisplay.textContent = `선택된 수량은 ${quantity}개 입니다.`;
    });

    decreaseBtn.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = `선택된 수량은 ${quantity}개 입니다.`;
        }
    });

    // 선택 완료 버튼 이벤트
    const completeBtn = document.getElementById('complete');
    completeBtn.addEventListener('click', function () {
        if (selectedMenu) {
            // 장바구니에 데이터 추가
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const newItem = {
                menu: selectedMenu,
                price: parseInt(selectedPrice, 10),
                quantity: quantity,
                option: selectedOption,
                temperature: selectedTemperature,
            };
            cart.push(newItem);
            localStorage.setItem('cart', JSON.stringify(cart)); // 로컬스토리지에 저장

            // 장바구니 페이지로 이동
            window.location.href = 'v_shoppingCart.html';
        } else {
            alert('메뉴가 선택되지 않았습니다.');
        }
    });
});