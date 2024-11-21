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

            // 백엔드로 선택 정보를 전송
            if (selectedOption === 'store') {
                console.log("매장 선택");
                sendTakeoutMode(false); // 매장은 false
            } else if (selectedOption === 'takeout') {
                console.log("포장 선택");
                sendTakeoutMode(true); // 포장은 true
            }
        });
    });

    // 서버에 takeoutMode 전송하는 함수
    function sendTakeoutMode(takeoutMode) {
        fetch('http://211.188.49.69:8080/home', { // 실제 백엔드 API URL로 변경 필요
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                takeOutMode: takeoutMode // boolean 값으로 전송
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('서버 요청에 실패했습니다.');
            }
            return response.json(); // 응답 본문을 JSON으로 변환
        })
        .then(data => {
            if (data.code === "SU") {
                console.log("서버에 매장/포장 모드 전송 성공");
                window.localStorage.setItem("takeoutMode", takeoutMode);
                console.log(data); // data 객체 자체를 출력
                window.localStorage.setItem("order_num", data.order_num);
                window.location.href = "v_askCategory.html"; // 메뉴 선택 페이지로 이동
            } else {
                console.error(`에러: ${data.message}`);
                alert("서버에 정보를 전송하는 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
        })
        .catch(error => {
            console.error("에러 발생:", error);
            alert("서버에 정보를 전송하는 중 오류가 발생했습니다. 다시 시도해주세요.");
        });
    }
});
