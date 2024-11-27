// config.json에서 서버 URL 로드
fetch('../config.json')
  .then(response => response.json())
  .then(config => {
    const serverUrl = config.SERVER_URL; // 서버 URL 가져오기
    console.log("Loaded Server URL:", serverUrl);

    // 매장/포장 선택 이벤트 리스너 추가
    document.getElementById('store').addEventListener('click', function () {
      console.log("매장 선택");
      const takeoutMode = false;
      sendTakeoutMode(serverUrl, takeoutMode);
    });

    document.getElementById('takeout').addEventListener('click', function () {
      console.log("포장 선택");
      const takeoutMode = true;
      sendTakeoutMode(serverUrl, takeoutMode);
    });

    // 서버에 takeoutMode 전송하는 함수
    function sendTakeoutMode(serverUrl, takeoutMode) {
      fetch(`/api/home`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          takeOutMode: takeoutMode, // Boolean 값으로 전송
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('서버 요청에 실패했습니다.');
          }
          return response.json();
        })
        .then(data => {
          if (data.code === 'SU') {
            console.log('서버에 매장/포장 모드 전송 성공');
            window.localStorage.setItem('takeoutMode', takeoutMode);
            window.localStorage.setItem('order_num', data.order_num);
            window.location.href = 'selectCategory.html'; // 메뉴 선택 페이지로 이동
          } else {
            console.error(`에러: ${data.message}`);
            alert('서버에 정보를 전송하는 중 오류가 발생했습니다. 다시 시도해주세요.');
          }
        })
        .catch(error => {
          console.error('에러 발생:', error);
          alert('서버에 정보를 전송하는 중 오류가 발생했습니다. 다시 시도해주세요.');
        });
    }
  })
  .catch(err => console.error('Failed to load config:', err));
