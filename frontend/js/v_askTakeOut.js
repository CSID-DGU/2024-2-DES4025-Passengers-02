document.addEventListener('DOMContentLoaded', function() {
    let selectedOption = null;

    // 옵션 버튼 클릭 이벤트 추가
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            // 모든 옵션에서 선택 효과 제거
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            // 클릭한 옵션에 선택 효과 추가
            this.classList.add('selected');
            // 선택한 옵션 저장
            selectedOption = this.id;
            console.log("선택된 옵션:", selectedOption);
        });
    });

    // 옵션 선택 완료 시 다음 화면으로 이동
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            if (selectedOption === 'store') {
                console.log("매장 선택");
                // 매장 선택 후의 동작 (예: 다음 페이지로 이동)
                window.location.href = "v_askCategory.html"; // 매장 메뉴 페이지로 이동
            } else if (selectedOption === 'takeout') {
                console.log("포장 선택");
                // 포장 선택 후의 동작 (예: 다음 페이지로 이동)
                window.location.href = "v_askCategory.html"; // 포장 메뉴 페이지로 이동
            }
        });
    });
});
