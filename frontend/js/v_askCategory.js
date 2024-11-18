document.addEventListener('DOMContentLoaded', function () {
    let selectedOption = null;

    // 각 옵션 버튼에 클릭 이벤트 추가
    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', function () {
            // 모든 버튼에서 선택 효과 제거
            document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected'));
            
            // 현재 클릭한 버튼에 선택 효과 추가
            this.classList.add('selected');

            // 선택된 카테고리를 변수에 저장
            selectedOption = this.id;
            console.log("선택된 카테고리:", selectedOption);

             // 선택된 카테고리를 localStorage에 저장
             localStorage.setItem('selectedCategory', selectedOption);

            // 다음 화면으로 이동
            if (selectedOption) {
                window.location.href = `v_selectMenu.html?category=${selectedOption}`;
            }
        });
    });
});
