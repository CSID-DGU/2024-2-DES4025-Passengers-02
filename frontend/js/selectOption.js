document.addEventListener('DOMContentLoaded', function() {
    const selectedMenuItem = localStorage.getItem('selectedMenuItem');
    const selectedTemperature = localStorage.getItem('selectedTemperature');
    const menuItemNameElement = document.getElementById('menuItemName');
    if (selectedMenuItem) {
        menuItemNameElement.textContent = selectedMenuItem;
    } else {
        console.error("선택된 메뉴가 없습니다.");
    }

    let selectedOption = null;

    // 옵션 버튼 클릭 시 회색으로 표시
    document.getElementById('whippedCream').addEventListener('click', function() {
        selectedOption = '휘핑크림 추가';
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
    });

    document.getElementById('extraShot').addEventListener('click', function() {
        selectedOption = '샷 추가';
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
    });

    // 선택 안함 버튼 클릭 시
    document.querySelector('.complete-btn').addEventListener('click', function() {
        selectedOption = '선택 안함';
        localStorage.setItem('selectedOption', selectedOption); // 옵션 저장
        window.location.href = "askNumber.html"; // 다음 페이지로 이동
    });

    // 옵션 선택 시, 다음 페이지로 이동 및 정보 저장
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            if (selectedOption) {
                localStorage.setItem('selectedOption', selectedOption); // 선택된 옵션 저장
                window.location.href = "askNumber.html"; // askNumber 페이지로 이동
            }
        });
    });
});
