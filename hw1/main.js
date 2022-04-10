async function getList(){
 /*
    Get the lists when loading
  */
  try {
    const res = await axios.get('/lists');
    const lists = res.data;
    const list = document.getElementById('list');
    list.innerHTML = '';

    /*
      Repeatedly display screens and add events for each list
    */ 
    Object.keys(lists).map(function(key){
      const listDiv = document.createElement('div');
      const span = document.createElement('span');
      const br = document.createElement('br');
      /*
        Data is stored in an array that contains username, title, contents.
        So, Data is extracted from the array via key.
        At this time, the delimiter is a comma.
      */ 
      const arr = lists[key].toString().split(',');
      span.textContent = 
      `writer: ${arr[0]}
      title: ${arr[1]}
      contents: ${arr[2]}`;

    /*
      Add button for modify contents and EventListener.
    */ 
      const edit = document.createElement('button');
      edit.textContent = '수정';
      edit.addEventListener('click', async () => { 
        const contents = prompt('바꿀 내용을 입력하세요');
        if (!contents) {
          return alert('내용을 반드시 입력하셔야 합니다');
        }
        try {
          await axios.put('/list/' + key, { contents });
          getList();
        } catch (err) {
          console.error(err);
        }
      });
      /*
        Add button for delete data and EventListener.
      */ 
      const remove = document.createElement('button');
      remove.textContent = '삭제';
      remove.addEventListener('click', async () => { 
        try {
          await axios.delete('/list/' + key);
          getList();
        } catch (err) {
          console.error(err);
        }
      });

      listDiv.appendChild(span);
      listDiv.appendChild(edit);
      listDiv.appendChild(remove);
      listDiv.appendChild(br);
      list.appendChild(listDiv);
      console.log(res.data);
    });
  } catch (err) {
    console.error(err);
  }
}

  /*
    Call getList method when loading.
  */
window.onload = getList;
  /*
    Run when submitting the form.
    The form receives the name, title, and content as input.
    When click button for submit, this method is called.
  */
document.getElementById('form').addEventListener('submit', async(e)=>{
  e.preventDefault();
  const username = e.target.username.value;
  const title =  e.target.title.value;
  const contents =  e.target.contents.value;
  if(!username){
    return alert('작성자의 이름을 입력해주세요.');
  }
  try {
    await axios.post('/list', {username,title, contents});
    getList();
  } catch (error) {
    console.error(error);
  }
  /*
    Reset input data.
  */
  e.target.username.value = '';
  e.target.title.value = '';
  e.target.contents.value = '';
});