import { useEffect } from 'react'
import styles from './Level3_1.module.css'

function Level3_1() {
  const check = () => {
    document.querySelector('.answer-textbox').classList.remove('wrong')
    document.querySelector('.wrong-answer').style.display = 'none'
    console.log(document.querySelector('.answer-textbox').value)
    var x = document.querySelector('.answer-textbox').value
    if (x.toUpperCase() != 'HTML') {
      document.querySelector('.answer-textbox').classList.add('wrong')
      document.querySelector('.wrong-answer').style.display = 'inline'
    }
  }

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    setInterval(() => {
      document.querySelector('.lp0').innerText = document
        .querySelector('.lp0')
        .innerText.split('')
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join('')

      document.querySelector('.lp1').innerText = document
        .querySelector('.lp1')
        .innerText.split('')
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join('')

      document.querySelector('.lp2').innerText = document
        .querySelector('.lp2')
        .innerText.split('')
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join('')

      document.querySelector('.lp3').innerText = document
        .querySelector('.lp3')
        .innerText.split('')
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join('')
    }, 60)
  }, [])

  return (
    <div className={styles.body}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      ></link>
      <div className={styles.container}>
        <div className={styles.inner - styles.container}>
          <p className={styles.q1}>
            <span className={styles.lp}>youtube.com/watch?v=Sag7hLly0qg</span>
          </p>
          <p className={styles.q2}>
            <span className={styles.lp}>youtube.com/watch?v=A9dPtRFSfjg</span>
          </p>
          <p className={styles.q3}>
            <span className={styles.lp}>https://youtu.be/68HrmbZiwaI</span>
          </p>
          <p className={styles.q4}>
            <span className={styles.lp}>youtube.com/watch?v=iEmIJ3b-hvI</span>
          </p>
          <span className={styles.entry}>
            <b>Enter your answer:</b>
          </span>
          <input
            placeholder="Enter your answer"
            className={styles.answer - styles.textbox}
            type="text"
          />
          <span className={styles.wrong - styles.answer}>
            Wrong answer. Retry
          </span>
          <button className={styles.btn} type="button" onClick={check}>
            ENTER
          </button>
        </div>
      </div>
    </div>
  )
}

export default Level3_1
