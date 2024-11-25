document.addEventListener('DOMContentLoaded', function() {
    let selectedCategory = null;

    // 각 옵션에 클릭 이벤트 추가
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            // 모든 옵션에서 선택 효과 제거
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

            // 현재 클릭한 옵션에 선택 효과 추가
            this.classList.add('selected');

            // 선택된 카테고리를 변수에 저장
            selectedCategory = this.id;
            console.log("선택된 카테고리:", selectedCategory);

            // 선택된 카테고리를 localStorage에 저장
            localStorage.setItem('selectedCategory', selectedCategory);

            // 선택한 카테고리에 따라 selectMenu.html로 이동
            window.location.href = "selectMenu.html";
        });
    });

    // '장바구니' 버튼 클릭 시 shoppingCart.html로 이동
    document.querySelector('.complete-btn').addEventListener('click', function() {
        if (selectedCategory) {
            localStorage.setItem('selectedCategory', selectedCategory);
            window.location.href = "shoppingCart.html";
        } else {
            alert("카테고리를 선택해주세요.");
        }
    });
});
