import styles from './App.module.css'

let selectedOption = null
const getSelectedOption = () => {
  return selectedOption
}
const selectOption = (element, id) => {
  selectedOption = id
  if (element.nodeName != 'DIV') {
    element = element.parentNode
  }
  const options = document.querySelectorAll(`.${styles.option}`)
  Array.from(options).forEach((option) => {
    option.classList.remove(`${styles.selected}`)
  })
  element.classList.add(`${styles.selected}`)
  const continueButton = document.querySelector('button')
  console.log(continueButton)
  continueButton.classList.remove(`${styles.disabled}`)
}

export { selectOption, getSelectedOption }
