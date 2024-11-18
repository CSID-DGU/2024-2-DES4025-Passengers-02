document.addEventListener('DOMContentLoaded', function () {
    const categoryMap = {
        coffee: [
            { name: '아메리카노', price: '2000원' },
            { name: '카페라떼', price: '3000원' },
            { name: '카푸치노', price: '3500원' },
        ],
        tea: [
            { name: '녹차', price: '2500원' },
            { name: '홍차', price: '3000원' },
            { name: '캐모마일', price: '3500원' },
        ],
        drink: [
            { name: '망고 스무디', price: '4500원' },
            { name: '딸기 주스', price: '4000원' },
            { name: '레몬에이드', price: '3500원' },
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
