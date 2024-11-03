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
        
    ],

    food : [

    ],

    md : [
        
    ]
};


// 탭 버튼을 클릭했을 때 해당 카테고리의 음료 데이터를 로드
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // 모든 탭에서 active 클래스 제거 후 클릭한 탭에만 추가
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // 선택한 카테고리의 데이터 로드
        const category = this.getAttribute('data-category');
        loadMenuItems(category);
    });
});

// 선택한 카테고리에 맞는 메뉴 항목을 menu-grid에 표시
function loadMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = ''; // 기존 메뉴 항목을 지우기

    // 선택한 카테고리의 데이터 가져오기
    const items = menuData[category];
    items.forEach(item => {
        // 각 메뉴 항목을 HTML로 생성
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

        // 요소를 menu-item에 추가
        menuItem.appendChild(badge);
        menuItem.appendChild(img);
        menuItem.appendChild(name);

        // menuGrid에 추가
        menuGrid.appendChild(menuItem);
    });
}

// 초기 로드 시 커피 메뉴를 표시
loadMenuItems('coffee');


document.querySelector('.complete-btn').addEventListener('click', function() {
    console.log("선택 완료 버튼 클릭");
    // 선택 완료 시의 동작 로직 추가 (예: 다음 페이지로 이동)
});
