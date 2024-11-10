document.addEventListener('DOMContentLoaded', function() {
    const selectedMenuItem = localStorage.getItem('selectedMenuItem');
    if (selectedMenuItem) {
        document.getElementById('menuItemName').textContent = selectedMenuItem; // localStorage에서 메뉴 이름을 가져와 표시
    } else {
        console.error("선택된 메뉴가 없습니다.");
    }
    // 전역 변수로 선언하여 다른 함수에서 접근 가능하도록 함
    let selectedTemperature = null;

    // 핫, 콜드 옵션 선택 시 스타일 변경
    document.getElementById('hot').addEventListener('click', function() {
        console.log("Hot 선택");
        selectedTemperature = 'hot'; // 선택된 온도를 저장
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
    });

    document.getElementById('cold').addEventListener('click', function() {
        console.log("Cold 선택");
        selectedTemperature = 'cold'; // 선택된 온도를 저장
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
    });

    // 선택 완료 버튼
    document.querySelector('.complete-btn').addEventListener('click', function() {
        if (selectedTemperature) {
            console.log("Selected temperature:", selectedTemperature);
            localStorage.setItem('selectedTemperature', selectedTemperature); // 선택한 온도 저장
            window.location.href = "selectOption.html"; // 옵션 선택 화면으로 이동
        } else {
            alert("온도를 선택해주세요."); // 온도가 선택되지 않았을 때 알림
        }
    });
});
