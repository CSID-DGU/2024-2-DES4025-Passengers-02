document.getElementById('store').addEventListener('click', function() {
    // 매장 선택
    console.log("매장 선택");
    window.localStorage.setItem("takeoutMode", false);
    window.location.href = "selectMenu.html";
});

document.getElementById('takeout').addEventListener('click', function() {
    // 포장 선택
    console.log("포장 선택");
    window.localStorage.setItem("takeoutMode", true);
    window.location.href = "selectMenu.html"; 
});
