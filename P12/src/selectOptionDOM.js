let selectedOption = null
const getSelectedOption = () => {
  return selectedOption
}
const selectOption = (element, id) => {
<<<<<<< HEAD
  selectedOption = id
  if (element.nodeName != 'OPTION') {
    element = element.parentNode
  }
  const options = document.querySelectorAll('option')
=======
  selectedOption = id;
  if (element.nodeName != 'DIV') {
    element = element.parentNode;
  }
  const options = document.querySelectorAll('.option');
>>>>>>> f0549d8d11f129e795d6563a392d32a2cf82bf2b
  Array.from(options).forEach((option) => {
    option.classList.remove('selected')
  })
  element.classList.add('selected')
  const continueButton = document.querySelector('.continue')
  continueButton.classList.remove('disabled')
}

export { selectOption, getSelectedOption }
