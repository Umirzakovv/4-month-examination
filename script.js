
const renderArr = (arr, list) => {
  
  let newLi = document.createElement('li')

  let image = document.createElement('img')

  let fullText = document.createElement('p')



  image.src = arr.image

  fullText.textContent = arr.fullText

  image.style.width = "100px"


  // newLi.appendChild(title)
  newLi.appendChild(image)
  newLi.appendChild(fullText)

  
  
  list.appendChild(newLi)
}

const fetchArr = async () => {
  const response = await fetch(`http://localhost:3000/content/${window.location.search.substring(4)}`)
  const data = await response.json()

  renderArr(data, list)

}

fetchArr()
