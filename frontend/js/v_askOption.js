document.addEventListener('DOMContentLoaded', function () {
    // 로컬스토리지에서 선택된 메뉴와 온도를 가져오기
    const selectedMenu = localStorage.getItem('selectedMenuItem');
    const selectedTemperature = localStorage.getItem('selectedTemperature');

    console.log("선택된 메뉴:", selectedMenu);
    console.log("선택된 온도:", selectedTemperature);

    let selectedOption = null; // 현재 선택된 옵션

    // 옵션 버튼 클릭 이벤트
    document.getElementById('whipping').addEventListener('click', function () {
        selectedOption = '휘핑크림 추가'; // 옵션 설정
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected')); // 기존 선택 초기화
        this.classList.add('selected'); // 현재 선택된 버튼 강조
    });

    document.getElementById('shot').addEventListener('click', function () {
        selectedOption = '샷 추가'; // 옵션 설정
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected')); // 기존 선택 초기화
        this.classList.add('selected'); // 현재 선택된 버튼 강조
    });

    document.getElementById('none').addEventListener('click', function () {
        selectedOption = '선택 없음'; // 옵션 설정
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected')); // 기존 선택 초기화
        this.classList.add('selected'); // 현재 선택된 버튼 강조

        // 로컬스토리지 초기화
        localStorage.removeItem('selectedOption');
    });

    // 완료 버튼 클릭 이벤트
    document.querySelector('.complete-btn').addEventListener('click', function () {
        if (selectedOption) {
            localStorage.setItem('selectedOption', selectedOption); // 선택된 옵션 로컬 스토리지에 저장
            window.location.href = 'v_askNum.html'; // 다음 페이지로 이동
        } else {
            alert("옵션을 선택해주세요.");
        }
    });
});