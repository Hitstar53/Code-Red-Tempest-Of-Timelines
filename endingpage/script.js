function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}
const hexagons = document.querySelectorAll('.hexagon')
const delayBetweenHexagons = 15 // Adjust this value to change the delay between each hexagon color change

function changeHexagonColor(hexagon, index) {
  setTimeout(() => {
    hexagon.classList.add('active')
  }, index * Math.random() * 2 * delayBetweenHexagons)
}

shuffle(hexagons)

hexagons.forEach((hexagon, index) => {
  changeHexagonColor(hexagon, index)
})
