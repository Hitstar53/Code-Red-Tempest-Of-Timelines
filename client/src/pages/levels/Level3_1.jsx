import Layout from './Layout'
import { useEffect,useState,useRef } from 'react'
import styles from './Level3_1.module.css'
import backgroundURL from '../../assets/images/3_1-background.jpg'
import { useNavigate } from 'react-router-dom'
import { getScore,getCurrentLevel,updateLevel,checkisLooped,incrementLevel,Level3_1Sol } from '../../api/General'
function Level3_1() {
  const check = async (e) => {
    e.preventDefault()
    const ans = ansRef.current.value
    var answer = ans.toUpperCase()
    const res = await  Level3_1Sol(answer)
    if (res) {
      navigate('/levels/level3b')
    }
    else{
      document.querySelector(`.${styles.wrongAnswer}`).style.display = 'block'
    }
  }
  const navigate = useNavigate()
  const [score, setScore] = useState(0)
  const ansRef = useRef(null)
  useEffect(() => {

    getCurrentLevel()
    getScore().then((res) => {
      setScore(res)
    })
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
      name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
      time="2:29:59"
      score={score}
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
              ref={ansRef}
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
