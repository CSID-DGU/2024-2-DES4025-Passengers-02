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

    document.getElementById('complete-btn').addEventListener('click', function() {
        // 장바구니
        console.log("장바구니");

        // 콘솔에 메뉴명, 온도 선택, 옵션 출력
        console.log("메뉴명:", menuItem);
        console.log("온도 선택:", temperature);
        console.log("옵션 선택:", option)
        console.log("수량:", quantity);


        // Menu 배열에 menuItem, temperature, option을 묶어서 저장
        let menu = JSON.parse(localStorage.getItem('Menu')) || [];
        menu.push({ menuItem, temperature, option, quantity });
        localStorage.setItem('Menu', JSON.stringify(menu));

        window.location.href = "selectMenu.html"; 
    });
});
