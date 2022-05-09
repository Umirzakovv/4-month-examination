const elForm = document.querySelector('.form')
const elHeading = document.querySelector('.form__input-heading');
const elFullText = document.querySelector('.form__input-full-text');

const fetchArr = async() => { 
  const res = await fetch('http://localhost:3000/content')
  const data = await res.json()

  renderArr(data, list)
}

fetchArr()

function renderArr(arr, list) {
  list.innerHTML = null

  arr?.forEach(i => { 
    // let newLi = document.createElement('li')
    let newP = document.createElement('p')
    newP.textContent = i.title + ' ' + "maqolalar sahifasiga qo'shildi"
    // newP.textContent = i.text
    // newLi.textContent =  i.title
    // newLi.appendChild(newP)
    list.appendChild(newP)
  })
}
  
elForm.addEventListener('submit', e => {
  e.preventDefault()

  let newDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  fetch('http://localhost:3000/content', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: new Date(),
      title: elHeading.value,
      text: elFullText.value,
      fullText: elFullText.value,
      date: newDate.getDate() + ' ' + months[newDate.getMonth()] + ' ' + newDate.getFullYear()
    })
  })
})