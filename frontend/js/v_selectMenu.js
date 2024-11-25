document.addEventListener('DOMContentLoaded', function () {
    const categoryMap = {
        coffee: [
            { name: '아메리카노', price: 2000 },
            { name: '카페라떼', price: 3000 },
            { name: '카푸치노', price: 3500 },
            { name: '카페모카', price: 3500 },
            { name: '바닐라라떼', price: 3700 },
            { name: '연유라떼', price: 3800 },
            { name: '에스프레소', price: 2500 }
        ],
        tea: [
            { name: '애플유자차', price: 3000 },
            { name: '캐모마일', price: 2800 },
            { name: '얼그레이', price: 2900 },
            { name: '자몽차', price: 3200 },
            { name: '레몬차', price: 2700 },
            { name: '녹차', price: 2500 },
            { name: '페퍼민트', price: 2800 }
        ],
        drink: [
            { name: '골드망고스무디', price: 4000 },
            { name: '딸기주스', price: 3500 },
            { name: '녹차프라페', price: 4500 },
            { name: '라임모히또', price: 4200 },
            { name: '체리콕', price: 3000 },
            { name: '유니콘프라페', price: 5000 },
            { name: '민트프라페', price: 4300 },
            { name: '딸기퐁크러쉬', price: 4500 }
        ],
        food: [
            { name: '크로와상', price: 2500 },
            { name: '샌드위치', price: 5000 },
            { name: '머핀', price: 3000 }
        ],
        md: [
            { name: '텀블러', price: 15000 },
            { name: '머그컵', price: 12000 },
            { name: '티셔츠', price: 20000 }
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
                localStorage.setItem('selectedMenuItem', item.name); // 메뉴 이름만 저장
                localStorage.setItem('selectedMenuPrice', item.price); // 가격을 따로 저장
                window.location.href = 'v_askTemperature.html'; // Next page
            });

            menuOptions.appendChild(menuItem);
        });
    } else {
        menuOptions.textContent = '해당 메뉴를 찾을 수 없습니다.';
    }
});
