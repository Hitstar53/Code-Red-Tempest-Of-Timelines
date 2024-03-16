import Layout from './Layout'
import { useEffect } from 'react'
import styles from './Level3_1.module.css'
import backgroundURL from '../../assets/images/3_1-background.jpg'
function Level3_1() {
  const check = () => {
    document
      .querySelector(`.${styles.answerTextbox}`)
      .classList.remove(`.${styles.wrong}`)
    document.querySelector(`.${styles.wrongAnswer}`).style.display = 'none'
    console.log(document.querySelector(`.${styles.answerTextbox}`).value)
    var x = document.querySelector(`.${styles.answerTextbox}`).value
    if (x.toUpperCase() != 'HTML') {
      document
        .querySelector(`.${styles.answerTextbox}`)
        .classList.add(`.${styles.wrong}`)
      document.querySelector(`.${styles.wrongAnswer}`).style.display = 'inline'
    }
  }

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    setInterval(() => {
      document.querySelector(`.${styles.lp0}`).innerText = document
        .querySelector(`.${styles.lp0}`)
        .innerText.split('')
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join('')

      document.querySelector(`.${styles.lp1}`).innerText = document
        .querySelector(`.${styles.lp1}`)
        .innerText.split('')
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join('')

      document.querySelector(`.${styles.lp2}`).innerText = document
        .querySelector(`.${styles.lp2}`)
        .innerText.split('')
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join('')

      document.querySelector(`.${styles.lp3}`).innerText = document
        .querySelector(`.${styles.lp3}`)
        .innerText.split('')
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join('')
    }, 100)
  }, [])

  return (
    <Layout
      level={3}
      name="Team Gods"
      time="2:29:59"
      score="12345"
      colors={{
        textColor: 'white',
        boxBackgroundColor: '#975E2C',
        leaderboardHeaderColor: 'white',
        iconColor: 'white',
        leaderboardPositionColor: '#CCD3CA',
        hintTextColor: 'white',
        leaderboardColor: '#F6C499',
        leaderboardTextColor: 'black',
      }}
      hintText="Four scrambled phrases, simply a bunch of nonsense… or not? 
Click away on the right path, and look behind the scenes to find more than just text.
"
      backgroundPicURL={backgroundURL}
    >
      <div className={styles.body}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <p className={styles.q1 + ' ' + styles.p}>
              <span className={styles.lp0}>
                youtube.com/watch?v=Sag7hLly0qg
              </span>
            </p>
            <p className={styles.q2 + ' ' + styles.p}>
              <span className={styles.lp1}>
                youtube.com/watch?v=A9dPtRFSfjg
              </span>
            </p>
            <p className={styles.q3 + ' ' + styles.p}>
              <span className={styles.lp2}>https://youtu.be/68HrmbZiwaI</span>
            </p>
            <p className={styles.q4 + ' ' + styles.p}>
              <span className={styles.lp3}>
                youtube.com/watch?v=iEmIJ3b-hvI
              </span>
            </p>
            <span
              className={styles.entry + ' ' + styles.span}
              style={{ display: 'inline' }}
            >
              <b>Enter your answer:</b>
            </span>
            <input
              placeholder="Enter your answer"
              className={styles.answerTextbox}
              type="text"
            />
            <span className={styles.wrongAnswer + ' ' + styles.span}>
              Wrong answer. Retry
            </span>
            <button className={styles.btn} type="button" onClick={check}>
              ENTER
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Level3_1
