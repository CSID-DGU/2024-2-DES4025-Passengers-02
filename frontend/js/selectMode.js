document.getElementById('voice').addEventListener('click', function() {
    // 음성 주문 모드
    console.log("음성 주문 모드");
    window.location.href = "v_askTakeOut.html";
});

document.getElementById('touch').addEventListener('click', function() {
    // 터치 주문 모드
    console.log("터치 주문 모드");
    window.location.href = "askTakeOut.html"; 
});
