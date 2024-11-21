document.addEventListener('DOMContentLoaded', function () {
    const categoryMap = {
        coffee: [
            { name: '아메리카노', price: '2000원' },
            { name: '카페라떼', price: '3000원' },
            { name: '카푸치노', price: '3500원' },
            { name: '카페라떼', price: '3200원' },
            { name: '카페모카', price: '3500원' },
            { name: '바닐라라떼', price: '3700원' },
            { name: '연유라떼', price: '3800원' },
            { name: '에스프레소', price: '2500원' }
        ],
        tea: [
            { name: '애플유자차', price: '3000원' },
            { name: '캐모마일', price: '2800원' },
            { name: '얼그레이', price: '2900원' },
            { name: '자몽차', price: '3200원' },
            { name: '레몬차', price: '2700원' },
            { name: '녹차', price: '2500원' },
            { name: '페퍼민트', price: '2800원' }
        ],
        drink: [
            { name: '골드망고스무디', price: '4000원' },
            { name: '딸기주스', price: '3500원' },
            { name: '녹차프라페', price: '4500원' },
            { name: '라임모히또', price: '4200원' },
            { name: '체리콕', price: '3000원' },
            { name: '유니콘프라페', price: '5000원' },
            { name: '민트프라페', price: '4300원' },
            { name: '딸기퐁크러쉬', price: '4500원' }
        ],
        food: [
            { name: '크로와상', price: '2500원' },
            { name: '샌드위치', price: '5000원' },
            { name: '머핀', price: '3000원' },
        ],
        md: [
            { name: '텀블러', price: '15000원' },
            { name: '머그컵', price: '12000원' },
            { name: '티셔츠', price: '20000원' },
        ],
    };

    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategoryFromURL = urlParams.get('category');
    const selectedCategoryFromStorage = localStorage.getItem('selectedCategory');

    // URL 값이 있으면 LocalStorage도 업데이트
    if (selectedCategoryFromURL) {
        localStorage.setItem('selectedCategory', selectedCategoryFromURL);
    }

    const selectedCategory = selectedCategoryFromURL || selectedCategoryFromStorage; // 우선순위: URL > LocalStorage
    console.log("선택된 카테고리:", selectedCategory); // 최종 확인

    const menuOptions = document.getElementById('menuOptions');
    const menuCategory = document.getElementById('menuCategory');

    // Update the category title
    menuCategory.textContent = `종류: ${selectedCategory ? selectedCategory : '알 수 없음'}`;

    // Populate menu options
    if (selectedCategory && categoryMap[selectedCategory]) {
        const items = categoryMap[selectedCategory];
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.textContent = `${item.name} - ${item.price}`;

            // Add click event to store selected menu
            menuItem.addEventListener('click', () => {
                localStorage.setItem('selectedMenuItem', item.name);
                window.location.href = 'v_askTemperature.html'; // Next page
            });

            menuOptions.appendChild(menuItem);
        });
    } else {
        menuOptions.textContent = '해당 메뉴를 찾을 수 없습니다.';
    }
});
