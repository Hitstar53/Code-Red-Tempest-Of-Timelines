import React, { useState } from 'react'
import styles from './Level8_1.module.css' // Assuming you have your CSS module file in the same directory
import Layout from './Layout'
import background from '../../assets/images/wepik-export-20240309064031UdkG.png'
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
        <div
          key={i}
          className={`${styles.key} ${styles.keyNumeric}`}
          onClick={() => handleKeyClick(String(i))}
        >
          {i}
        </div>
      )
    }
    return numericKeys
  }

  const addLastRow = () => {
    return (
      <>
        <div
          className={`${styles.key} ${styles.keyClear}`}
          onClick={() => handleKeyClick('clear')}
        >
          clear
        </div>
        <div
          className={`${styles.key} ${styles.keyNumeric}`}
          onClick={() => handleKeyClick('0')}
        >
          0
        </div>
        <div
          className={`${styles.key} ${styles.keyBackspace}`}
          onClick={() => handleKeyClick('backspace')}
        >
          Del
        </div>
      </>
    )
  }

  return (
    <Layout
      level={7}
      name="Team Gods"
      time="00:00:00"
      score="69420"
      backgroundPicURL={background}
      colors={{
        textColor: 'white',
        boxBackgroundColor: '#642d2c',
        leaderboardHeaderColor: 'white',
        iconColor: 'white',
        leaderboardPositionColor: '#CCD3CA',
        hintTextColor: 'white',
        leaderboardColor: '#76453B',
        leaderboardTextColor: 'black',
      }}
      hintText="We know we started the chase to Andwyn from 2550 BCE in Egypt, and last we knew, we were in 21st century North Korea. Just buckle up and enter the calendar years of our journey in travel order."
    >
      <div className={styles.keypad}>
        <div className={styles.screen}>
          <p>{message}</p>
        </div>
        <div className={styles.keys}>
          {addNumericKeys()}
          {addLastRow()}
        </div>
      </div>
    </Layout>
  )
}

export default Keypad
