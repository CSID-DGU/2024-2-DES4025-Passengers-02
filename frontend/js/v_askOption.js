document.addEventListener('DOMContentLoaded', function () {
    // 로컬스토리지에서 선택된 메뉴와 온도를 가져오기
    const selectedMenu = localStorage.getItem('selectedMenuItem');
    const selectedTemperature = localStorage.getItem('selectedTemperature');

    console.log("선택된 메뉴:", selectedMenu);
    console.log("선택된 온도:", selectedTemperature);

    let selectedOptions = []; // 여러 옵션을 담기 위한 배열

    // 각 옵션 버튼에 클릭 이벤트 추가
    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', function () {
            // 선택된 옵션의 ID 가져오기
            const optionId = this.id;

            // 선택한 옵션이 이미 배열에 존재하면 제거, 그렇지 않으면 추가
            if (selectedOptions.includes(optionId)) {
                selectedOptions = selectedOptions.filter(opt => opt !== optionId);
                this.classList.remove('selected');
            } else {
                selectedOptions.push(optionId);
                this.classList.add('selected');
            }

            console.log("선택된 옵션들:", selectedOptions);

            // 선택된 옵션 표시 업데이트
            const selectedOptionDisplay = document.getElementById('selectedOptionDisplay');
            if (selectedOptions.length > 0) {
                selectedOptionDisplay.textContent = `선택된 옵션은 ${selectedOptions.join(', ')} 입니다.`;
            } else {
                selectedOptionDisplay.textContent = "선택된 옵션이 없습니다.";
            }
        });
    });

    // 선택 완료 버튼 클릭 이벤트
    document.getElementById('complete').addEventListener('click', function () {
        if (selectedOptions.length > 0) {
            // 로컬스토리지에 선택한 옵션 저장
            localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));

            // 다음 페이지로 이동
            window.location.href = 'v_askNum.html';
        } else {
            alert('옵션을 하나 이상 선택해주세요.');
        }
    });
});
