document.addEventListener('DOMContentLoaded', function() {
    const menuItem = localStorage.getItem('selectedMenuItem');
    const temperature = localStorage.getItem('selectedTemperature');
    const option = localStorage.getItem('selectedOption');

    // 콘솔에 메뉴명, 온도 선택, 옵션 출력
    console.log("메뉴명:", menuItem);
    console.log("온도 선택:", temperature);
    console.log("옵션 선택:", option);

    // 수량 조절 기능
    let quantity = 1;
    const quantityDisplay = document.getElementById('quantity');

    document.getElementById('decrease').addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = `${quantity}개`;
        }
    });

    document.getElementById('increase').addEventListener('click', function() {
        quantity++;
        quantityDisplay.textContent = `${quantity}개`;
    });
});
