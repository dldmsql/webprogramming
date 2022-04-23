async function getUser() {
  try {
    const res = await axios.get('/users');
    const users = res.data;
    const list = document.getElementById('list');
    list.innerHTML = '';


    Object.keys(users).map( (key) => {
      const userDiv = document.createElement('div');
      const span = document.createElement('span');
      span.textContent = users[key];
      const edit = document.createElement('button');
      edit.textContent = 'EDIT';
      edit.addEventListener('click' , async ()=> {
        const name = prompt('PUT YOUR NEW NAME');
        if(!name){
          return alert('YOU MUST PUT YOUR NAME');
        
        }
        try {
          await axios.put('/user/' + key, {name});
          getUser();
        } catch (error) {
          console.error(error);
        }
      });

      const remove = document.createElement('button');
      remove.textContent = 'REMOVE';
      remove.addEventListener('click', async ()=> {
        try {
          await axios.delete('/user/'+key);
          getUser();
        } catch (error) {
          console.error(error);
        }
      });

      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);
      console.log(res.data);
    });
  } catch (error) {
    console.error(error);
  }
}

window.onload = getUser;

document.getElementById('form').addEventListener('submit', async (e)=> {
  e.preventDefault();
  const name = e.target.username.value;
  if(!name) {
    return alert('PUT YOUR NAME');
  }
  try {
    await axios.post('/user', {name});
    getUser();
  } catch (error) {
  console.error(error);    
  }
  e.target.username.value = '';
});