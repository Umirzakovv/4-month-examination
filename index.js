let selectedText = []
const token = window.localStorage.getItem('token')

if(!token) {
  window.localStorage.href = './login.html'
}




const renderArr = (arr, list) => {
  arr.forEach(i => {
    console.log(i);
    let newLi = document.createElement('li')
    let newTitle = document.createElement('h2')
    let newContinue = document.createElement('a')
    let newP = document.createElement('p')
    let newDate = document.createElement('p')
    let newIcon = document.createElement('span')
    

    newIcon.setAttribute('class', 'fa-regular fa-heart')
    newDate.setAttribute('class', 'release__date')
    newContinue.setAttribute('class', 'continue')
    newP.setAttribute('class', 'text')
    newTitle.textContent = i.title
    newDate.textContent = i.date
    newContinue.href = `./product.html?id=${i.id}`
    newP.textContent = i.text
    newContinue.textContent = "Batafsil..."

    newLi.appendChild(newTitle)
    newLi.appendChild(newIcon)
    newLi.appendChild(newDate)
    newLi.appendChild(newP)
    newLi.appendChild(newContinue)
    list.appendChild(newLi)

    newIcon.addEventListener('click', e => {
      newIcon.setAttribute('class', 'fa-solid fa-heart')
      selectedText.push(i)
      saveToSession(selectedText)
      console.log(selectedText);
    })

  })
}

const fetchArr = async () => {
  const response = await fetch('http://localhost:3000/content')
  const data = await response.json()

  

  renderArr(data, list)
}

fetchArr()

function saveToSession(arr) {
  localStorage.setItem("Selected", JSON.stringify(arr))
}

 
