// 페이지 로딩 시 사용자 데이터 가져오는 함수
async function getUser() {
  try {
    const res = await axios.get('/write/writers');
    const writers = res.data;

    const list = document.getElementById('list');
    list.innerHTML = '';

    // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
    Object.keys(writers).map(function (key) {
      // 1. 사용자 영역 & 이름 DOM 객체 생성
      const userDiv = document.createElement('div');
      const span = document.createElement('span');
      span.textContent = writers[key].date + '일자 할 일 : ' + writers[key].contents;

      // 2. 사용자 수정 버튼 생성
      const edit = document.createElement('button');
      edit.textContent = '수정';
      // 수정 버튼 클릭 이벤트 리스너 등록
      edit.addEventListener('click', async () => {
        const contents = prompt('수정할 할 일을 입력하세요');
        const date = writers[key].date;
        const done = prompt('완료했나요?');
        if (!contents || !done) {
          return alert('수정할 할 일과 완료여부를 반드시 입력하셔야 합니다');
        }
        try {
          // 서버에 사용자 수정 요청 & getUser() 실행
          await axios.put('/write/writer/' + key, { contents, date, done });
          getUser();
        } catch (err) {
          console.error(err);
        }
      });

      // 3. 사용자 삭제 버튼 생성
      const remove = document.createElement('button');
      remove.textContent = '삭제';
      // 삭제 버튼 클릭 이벤트 리스너 등록
      remove.addEventListener('click', async () => {
        try {
          // 서버에 사용자 삭제 요청 & getUser() 실행
          await axios.delete('/write/writer/' + key);
          getUser();
        } catch (err) {
          console.error(err);
        }
      });

      // 생성한 사용자 이름/수정/삭제 버튼을 DOM에 연결 & 브라우저에 출력
      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);
      console.log(res.data);
    });
  } catch (err) {
    console.error(err);
  }
}

// 화면 로딩 시 getUser 호출
window.onload = getUser;

// 폼 제출(submit) 시 실행
document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const contents = e.target.contents.value;
  const date = e.target.date.value;
  const done = e.target.done.value;
  if (!contents || !date || !done) {
    return alert('할 일과 날짜를 입력하세요');
  }
  try {
    // 서버에 사용자 등록 요청 & getUser() 실행
    await axios.post('/write/writer', { contents, date, done });
    getUser();
  } catch (err) {
    console.error(err);
  }

  // 입력 form 초기화
  e.target.contents.value = '';
  e.target.date.value = '';
  e.target.done.value = '';
});