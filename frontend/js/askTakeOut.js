document.getElementById('store').addEventListener('click', function() {
    // 매장 선택
    console.log("매장 선택");
    const takeoutMode = false;

    // takeoutMode 서버로 전송
    sendTakeoutMode(takeoutMode);
});

document.getElementById('takeout').addEventListener('click', function() {
    // 포장 선택
    console.log("포장 선택");

    const takeoutMode = true;
    console.log(takeoutMode);
    console.log(type(takeoutMode));


    // takeoutMode 서버로 전송
    sendTakeoutMode(takeoutMode);
});

// 서버에 takeoutMode 전송하는 함수
function sendTakeoutMode(takeOutMode) {
    fetch('http://10.74.0.13:8080/home', {  // 실제 백엔드 API URL로 변경 필요
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            takeOutMode: takeOutMode
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('서버 요청에 실패했습니다.');
        }
        return response.json();
    })
    .then(data => {
        if (data.code === "SU") {
            console.log("서버에 매장/포장 모드 전송 성공");
            window.localStorage.setItem("takeoutMode", takeOutMode);
            window.location.href = "selectMenu.html"; // 메뉴 선택 페이지로 이동
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
