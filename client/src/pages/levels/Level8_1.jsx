import React, { useState } from 'react'
import './Level8_1.css'

const Keypad = () => {
  const [inputs, setInputs] = useState([])
  const [message, setMessage] = useState('ENTER A VALID CODE')

  const addInput = (key) => {
    if (key === 'clear') {
      setInputs([])
    } else if (key === 'backspace') {
      setInputs((prevInputs) => prevInputs.slice(1))
    } else {
      setInputs((prevInputs) => [key, ...prevInputs])
    }
  }

  const checkCode = () => {
    const reversedInputs = [...inputs].reverse().join('')
    if (reversedInputs === '25501789196820303170') {
      displaySuccess()
    } else {
      displayIncorrect()
    }
  }

  const displayIncorrect = () => {
    setMessage('INCORRECT CODE')
  }

  const displaySuccess = () => {
    setMessage('SUCCESS!')
  }

  const updateScreen = () => {
    let string = '____________________'
    inputs.forEach((input, index) => {
      const formattedIndex = string.length - 1 - index
      string =
        string.substring(0, formattedIndex) +
        input +
        string.substring(formattedIndex + 1)
    })
    let formattedString = ''
    for (let i = 0; i < string.length; i++) {
      if (i === 3 || i === 7 || i === 11 || i === 15) {
        formattedString += `${string[i]} `
      } else {
        formattedString += string[i]
      }
    }
    setMessage(formattedString)
  }

  const handleKeyClick = (key) => {
    addInput(key)
    updateScreen()
    if (inputs.length === 20) {
      checkCode()
      setInputs([])
    }
  }

  const addNumericKeys = () => {
    const numericKeys = []
    for (let i = 9; i > 0; i--) {
      numericKeys.push(
        <div key={i} className="key" onClick={() => handleKeyClick(String(i))}>
          {i}
        </div>
      )
    }
    return numericKeys
  }

  const addLastRow = () => {
    return (
      <>
        <div className="key clear" onClick={() => handleKeyClick('clear')}>
          clear
        </div>
        <div className="key" onClick={() => handleKeyClick('0')}>
          0
        </div>
        <div
          className="key backspace"
          onClick={() => handleKeyClick('backspace')}
        >
          <i className="fa-solid fa-delete-left"></i>
        </div>
      </>
    )
  }

  return (
    <main>
      <div className="keypad">
        <div className="screen">
          <p>{message}</p>
        </div>
        <div className="keys">
          {addNumericKeys()}
          {addLastRow()}
        </div>
      </div>
    </main>
  )
}

export default Keypad
