const elForm = document.querySelector('.form');
const elEmailInput = document.querySelector('.email__input')
const elPasswordInput = document.querySelector('.password__input')

elForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let email = elEmailInput.value
  let password = elPasswordInput.value
  // console.log(passwordValue);

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      email,
      password 
    })
  }).then(res => res.json())
    .then(data => {
      if(data) {
        window.localStorage.setItem('token', data.token);
        window.location.href = './admin.html';
      }
    }
    )
});