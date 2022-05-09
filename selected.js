let selectedText = window.localStorage.getItem('Selected')
selectedArr = JSON.parse(selectedText)
console.log(selectedArr);


const renderArr = (arr, list) => {
  arr.forEach(i => {
    console.log(i);
    let newLi = document.createElement('li')
    let newTitle = document.createElement('h2')
    let newP = document.createElement('p')
    let newDate = document.createElement('p')

    newDate.setAttribute('class', 'release__date')
    newP.setAttribute('class', 'text')

    newTitle.textContent = i.title
    newDate.textContent = i.date
    newP.textContent = i.fullText

    newLi.appendChild(newTitle)
    newLi.appendChild(newDate)
    newLi.appendChild(newP)
    list.appendChild(newLi)

    

  })
}

renderArr(selectedArr, list)