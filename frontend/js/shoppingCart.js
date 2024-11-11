const menuData = {
    coffee: [
        { name: '아메리카노', img: '../assets/images/menu/americano.png', price: 2000 },
        { name: '큐브라떼', img: '../assets/images/menu/cubelatte.png', price: 3500 },
        { name: '카푸치노', img: '../assets/images/menu/cappuchino.png', price: 3000 },
        { name: '카페라떼', img: '../assets/images/menu/cafelatte.png', price: 3200 },
        { name: '카페모카', img: '../assets/images/menu/cafemocha.png', price: 3500 },
        { name: '바닐라라떼', img: '../assets/images/menu/vanillalatte.png', price: 3700 },
        { name: '연유라떼', img: '../assets/images/menu/condensedmilklatte.png', price: 3800 },
        { name: '에스프레소', img: '../assets/images/menu/expresso.png', price: 2500 }
    ],
    tea: [
        { name: '애플유자차', img: '../assets/images/menu/appleyuzutea.png', price: 3000 },
        { name: '캐모마일', img: '../assets/images/menu/Chamomile.png', price: 2800 },
        { name: '얼그레이', img: '../assets/images/menu/earlgreytea.png', price: 2900 },
        { name: '자몽차', img: '../assets/images/menu/grapefruittea.png', price: 3200 },
        { name: '레몬차', img: '../assets/images/menu/lemontea.png', price: 2700 },
        { name: '녹차', img: '../assets/images/menu/greentea.png', price: 2500 },
        { name: '페퍼민트', img: '../assets/images/menu/peppermint.png', price: 2800 }
    ],
    drink: [
        { name: '골드망고스무디', img: '../assets/images/menu/mangosmoothie.png', price: 4000 },
        { name: '딸기주스', img: '../assets/images/menu/strawberryjuice.png', price: 3500 },
        { name: '녹차프라페', img: '../assets/images/menu/greenteafrappe.png', price: 4500 },
        { name: '라임모히또', img: '../assets/images/menu/limemojitto.png', price: 4200 },
        { name: '체리콕', img: '../assets/images/menu/cherrycoke.png', price: 3000 },
        { name: '유니콘프라페', img: '../assets/images/menu/unicornfrappe.png', price: 5000 },
        { name: '민트프라페', img: '../assets/images/menu/mintfrappe.png', price: 4300 },
        { name: '딸기퐁크러쉬', img: '../assets/images/menu/strawberrycrush.png', price: 4500 }
    ],

    food: [],
    md: []
};



document.addEventListener('DOMContentLoaded', function() {
    const cartItemsElement = document.getElementById('cartItems');
    let cart = JSON.parse(localStorage.getItem('Menu')) || [];

    // 장바구니 아이템을 동적으로 생성하여 표시
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // menuData에서 이미지 경로와 가격 찾기
        let itemImageSrc = '';
        let itemPrice = 0;
        for (const category in menuData) {  // 여기서 Menu 대신 menuData 사용
            const menuItem = menuData[category].find(menu => menu.name === item.menuItem);
            if (menuItem) {
                itemImageSrc = menuItem.img;
                itemPrice = menuItem.price;
                break;
            }
        }

        // 이미지가 없을 경우 기본 이미지 설정
        if (!itemImageSrc) {
            itemImageSrc = '../assets/images/menu/default.png'; // 기본 이미지 경로
        }

        // 이미지와 옵션 버튼을 담을 컨테이너 생성
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const itemImage = document.createElement('img');
        itemImage.src = itemImageSrc; // 이미지 경로
        itemImage.classList.add('item-image');

        const optionButton = document.createElement('button');
        optionButton.classList.add('option-btn');
        optionButton.textContent = '옵션 변경';

        imageContainer.appendChild(itemImage);
        imageContainer.appendChild(optionButton);

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('cart-item-info');
        itemInfo.innerHTML = `
            <h3>${item.menuItem}</h3>
            <p>${item.temperature} | ${item.option}</p>
            <p id="item-price-${index}">${itemPrice * item.quantity}원</p>`;

        const quantityWrapper = document.createElement('div');
        quantityWrapper.classList.add('quantity-wrapper');

        const decreaseButton = document.createElement('button');
        decreaseButton.classList.add('quantity-btn');
        decreaseButton.textContent = '-';
        decreaseButton.addEventListener('click', function() {
            if (item.quantity > 1) {
                item.quantity--;
                quantity.textContent = `${item.quantity}개`;
                document.getElementById(`item-price-${index}`).textContent = `${itemPrice * item.quantity}원`;
                localStorage.setItem('Menu', JSON.stringify(cart));
            }
        });

        const quantity = document.createElement('span');
        quantity.classList.add('quantity');
        quantity.textContent = `${item.quantity}개`;

        const increaseButton = document.createElement('button');
        increaseButton.classList.add('quantity-btn');
        increaseButton.textContent = '+';
        increaseButton.addEventListener('click', function() {
            item.quantity++;
            quantity.textContent = `${item.quantity}개`;
            document.getElementById(`item-price-${index}`).textContent = `${itemPrice * item.quantity}원`;
            localStorage.setItem('Menu', JSON.stringify(cart));
        });

        quantityWrapper.appendChild(decreaseButton);
        quantityWrapper.appendChild(quantity);
        quantityWrapper.appendChild(increaseButton);

        // quantityWrapper를 itemInfo 안에 추가
        itemInfo.appendChild(quantityWrapper);

        const itemControls = document.createElement('div');
        itemControls.classList.add('cart-item-controls');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function() {
            cart.splice(index, 1); // 항목 제거
            localStorage.setItem('Menu', JSON.stringify(cart));
            window.location.reload(); // 페이지 새로고침
        });

        itemControls.appendChild(deleteButton);

        cartItem.appendChild(imageContainer);
        cartItem.appendChild(itemInfo);
        cartItem.appendChild(itemControls);

        cartItemsElement.appendChild(cartItem);
    });

    // 주문하기 버튼 클릭 시 POST 요청 보내기
    document.querySelector('.order-btn').addEventListener('click', function() {
        console.log("주문하기 버튼 클릭");

        // total_price 계산
        let total_price = 0;
        const orderDetail = cart.map(item => {
            let itemPrice = 0;
            for (const category in menuData) { 
                const menuItem = menuData[category].find(menu => menu.name === item.menuItem);
                if (menuItem) {
                    itemPrice = menuItem.price;
                    break;
                }
            }
            total_price += itemPrice * item.quantity;

            return {
                name: item.menuItem,
                quantity: item.quantity,
                price: itemPrice,
                temperature: item.temperature,
                option: item.option
            };
        });

        // 주문 번호 가져오기 (예: 로컬 스토리지에서)
        const orderNum = localStorage.getItem('order_num');
        if (!orderNum) {
            alert('주문 번호가 설정되지 않았습니다.');
            return;
        }

        // POST 요청 보내기
        const orderData = {
            orderDetail: JSON.stringify(orderDetail),  // 주문 상세 내용
            total_price: total_price                   // 총 가격
        };

        fetch(`http://211.188.49.69:8080/${orderNum}`, {  // 실제 백엔드 API URL로 변경 필요
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('서버 요청에 실패했습니다.');
            }
            return response.json();  // 응답 본문을 JSON으로 변환
        })
        .then(data => {
            console.log("Response data:", data); // 응답 데이터 출력
            if (data.code === "SU") {
                console.log("주문 성공");
                localStorage.removeItem('Menu'); // 장바구니 초기화
                window.location.href = "notifyOrderNum.html"; // 주문 확인 페이지로 이동
            } else {
                console.error(`에러: ${data.message}`);
                alert("주문 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
        })
        .catch(error => {
            console.error("에러 발생:", error);
            alert("주문 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
        });
    });
});
