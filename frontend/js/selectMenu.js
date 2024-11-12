const menuData = {
    coffee: [
        { name: '아메리카노', img: '../assets/images/menu/americano.png' },
        { name: '큐브라떼', img: '../assets/images/menu/cubelatte.png' },
        { name: '카푸치노', img: '../assets/images/menu/cappuchino.png' },
        { name: '카페라떼', img: '../assets/images/menu/cafelatte.png' },
        { name: '카페모카', img: '../assets/images/menu/cafemocha.png' },
        { name: '바닐라라떼', img: '../assets/images/menu/vanillalatte.png' },
        { name: '연유라떼', img: '../assets/images/menu/condensedmilklatte.png' },
        { name: '에스프레소', img: '../assets/images/menu/expresso.png' }
    ],
    tea: [
        { name: '애플유자차', img: '../assets/images/menu/appleyuzutea.png' },
        { name: '캐모마일', img: '../assets/images/menu/Chamomile.png' },
        { name: '얼그레이', img: '../assets/images/menu/earlgreytea.png' },
        { name: '자몽차', img: '../assets/images/menu/grapefruittea.png' },
        { name: '레몬차', img: '../assets/images/menu/lemontea.png' },
        { name: '녹차', img: '../assets/images/menu/greentea.png' },
        { name: '페퍼민트', img: '../assets/images/menu/peppermint.png' }
    ],
    drink: [
        { name: '골드망고스무디', img: '../assets/images/menu/mangosmoothie.png' },
        { name: '딸기주스', img: '../assets/images/menu/strawberryjuice.png' },
        { name: '녹차프라페', img: '../assets/images/menu/greenteafrappe.png' },
        { name: '라임모히또', img: '../assets/images/menu/limemojitto.png' },
        { name: '체리콕', img: '../assets/images/menu/cherrycoke.png' },
        { name: '유니콘프라페', img: '../assets/images/menu/unicornfrappe.png' },
        { name: '민트프라페', img: '../assets/images/menu/mintfrappe.png' },
        { name: '딸기퐁크러쉬', img: '../assets/images/menu/strawberrycrush.png' }
    ],
    food: [],
    md: []
};

// 저장된 카테고리 불러오기
const selectedCategory = localStorage.getItem('selectedCategory');
console.log("선택된 카테고리:", selectedCategory);

// 선택된 카테고리에 해당하는 탭을 활성화
document.querySelectorAll('.tab').forEach(tab => {
    const category = tab.getAttribute('data-category');
    if (category === selectedCategory) {
        tab.classList.add('active');
    } else {
        tab.classList.remove('active');
    }
});

// 탭 버튼 클릭 시 해당 카테고리의 메뉴 데이터를 로드
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const category = this.getAttribute('data-category');
        loadMenuItems(category);
    });
});

// 선택한 카테고리에 맞는 메뉴 항목을 menuGrid에 표시
function loadMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = ''; // 기존 메뉴 항목을 지우기

    const items = menuData[category];
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const badge = document.createElement('span');
        badge.classList.add('badge', 'question');
        badge.textContent = '?';
        
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;

        const name = document.createElement('p');
        name.textContent = item.name;

        menuItem.appendChild(badge);
        menuItem.appendChild(img);
        menuItem.appendChild(name);

        menuGrid.appendChild(menuItem);

        menuItem.addEventListener('click', function() {
            const menuItemName = item.name;
            localStorage.setItem('selectedMenuItem', menuItemName);
            window.location.href = "askTemperature.html";
        });
    });
}

// 초기 로드 시 선택된 카테고리의 메뉴를 표시
if (selectedCategory) {
    loadMenuItems(selectedCategory);
}

// '장바구니' 버튼 클릭 시 shoppingCart.html로 이동
document.querySelector('.complete-btn').addEventListener('click', function() {
    window.location.href = "shoppingCart.html";
});
