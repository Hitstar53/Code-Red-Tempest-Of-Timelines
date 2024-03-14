let selectedOption = null
const getSelectedOption = () => {
  return selectedOption
}
const selectOption = (element, id) => {
  selectedOption = id
  if (element.nodeName != 'OPTION') {
    element = element.parentNode
  }
  const options = document.querySelectorAll('option')
  Array.from(options).forEach((option) => {
    option.classList.remove('selected')
  })
  element.classList.add('selected')
  const continueButton = document.querySelector('.continue')
  continueButton.classList.remove('disabled')
}

export { selectOption, getSelectedOption }
