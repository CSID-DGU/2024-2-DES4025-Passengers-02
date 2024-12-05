document.addEventListener('DOMContentLoaded', function () {
    let selectedTemperature = null;

    // 각 옵션 버튼에 클릭 이벤트 추가
    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', function () {
            // 모든 버튼에서 선택 효과 제거
            document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected'));

            // 현재 클릭한 버튼에 선택 효과 추가
            this.classList.add('selected');

            // 선택된 온도를 변수에 저장
            selectedTemperature = this.id;
            console.log("선택된 온도:", selectedTemperature);

            // 선택된 온도를 LocalStorage에 저장
            localStorage.setItem('selectedTemperature', selectedTemperature);

            // 다음 화면으로 이동
            setTimeout(() => {
                window.location.href = 'v_askOption.html'; // 다음 화면으로 이동
            }, 500);
        });
    });
});
