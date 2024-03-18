import Layout from './Layout'
import { useEffect,useState,useRef } from 'react'
import styles from './Level3_1.module.css'
import backgroundURL from '../../assets/images/3_1-background.jpg'
import { useNavigate } from 'react-router-dom'
import { getScore,getCurrentLevel,updateLevel,checkisLooped,incrementLevel,Level3_1Sol } from '../../api/General'
function Level3_1() {
  const check = async (e) => {
    const [isReached,setIsReached] = useState(false)
    e.preventDefault()
    const ans = ansRef.current.value
    const a = ansRef.current
    a.classList.remove(styles.wrong)
    const wrongAnswerElement = <a href="" className="nextSibling"></a>
    var answer = ans.toUpperCase()
    const res = await  Level3_1Sol(answer)
    if (res && !isReached) {
      setIsReached(true)
      navigate('/levels/prelevel3-2')
    }
    else{
      input.classList.add(styles.wrong);
      wrongAnswerElement.style.display = "inline";
      setShowWrongAnswer(true);
    }
  }
  const navigate = useNavigate()
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0)
  const lp0Ref = useRef("");
  const lp1Ref = useRef("");
  const lp2Ref = useRef("");
  const lp3Ref = useRef("");
  const ansRef = useRef(null)
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  useEffect(() => {
    getCurrentLevel()
    getScore().then((res) => {setScore(res)})
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // console.log(document.querySelectorAll(`.${styles.movingEffect}`));
    setInterval(() => {
      document.querySelector(`.${styles.lp0}`).innerText = document
        .querySelector(`.${styles.lp0}`)
        .innerText.split("")
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join("");
    }, 100);
    setInterval(() => {
      if (lp0Ref.current.classList.length == 0) {
        lp0Ref.current.innerText =
          "https://www.youtube.com/watch?v=V-_O7nl0Ii0";
      }
    }, 100);
    setInterval(() => {
      if (lp1Ref.current.classList.length == 0) {
        lp1Ref.current.innerText =
          "https://www.youtube.com/watch?v=EE-xtCF3T94";
      }
    }, 100);
    setInterval(() => {
      if (lp2Ref.current.classList.length == 0) {
        lp2Ref.current.innerText = "https://youtu.be/68HrmbZiwaI";
      }
    }, 100);
    setInterval(() => {
      if (lp3Ref.current.classList.length == 0) {
        lp3Ref.current.innerText =
          "https://youtu.be/UtPZcwPnvkw?feature=shared";
      }
    }, 100);
    setInterval(() => {
      if (
        !document
          .querySelector(`.${styles.lp1}`)
          .classList.contains(`.${styles.movingEffect}`)
      ) {
        clearInterval();
      }
      document.querySelector(`.${styles.lp1}`).innerText = document
        .querySelector(`.${styles.lp1}`)
        .innerText.split("")
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join("");
    }, 100);
    setInterval(() => {
      if (
        !document
          .querySelector(`.${styles.lp2}`)
          .classList.contains(`.${styles.movingEffect}`)
      ) {
        clearInterval();
      }
      document.querySelector(`.${styles.lp2}`).innerText = document
        .querySelector(`.${styles.lp2}`)
        .innerText.split("")
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join("");
    }, 100);
    setInterval(() => {
      if (
        !document
          .querySelector(`.${styles.lp3}`)
          .classList.contains(`.${styles.movingEffect}`)
      ) {
        clearInterval();
      }
      document.querySelector(`.${styles.lp3}`).innerText = document
        .querySelector(`.${styles.lp3}`)
        .innerText.split("")
        .map((letter) => letters[Math.floor(Math.random() * 52)])
        .join("");
    }, 100);
  }, []);


  return (
    <Layout
      level={3}
      name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
      time="2:29:59"
      score={parseInt(score)}
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
      Inspect away on the 'right' path, and look behind the scenes to find more than just text. Get as deep and accurate as you can, and gently degrade your class to ascend even higher."
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
            <p className={styles.q1 + " " + styles.p}>
              <span
                className={styles.lp0 + " " + styles.movingEffect}
                ref={lp0Ref}
              >
                youtube.com/watch?v=Sag7hLly0qg
              </span>
            </p>
            <p className={styles.q2 + " " + styles.p}>
              <span
                className={styles.lp1 + " " + styles.movingEffect}
                ref={lp1Ref}
              >
                youtube.com/watch?v=A9dPtRFSfjg
              </span>
            </p>
            <p className={styles.q3 + " " + styles.p}>
              <span
                className={styles.lp2 + " " + styles.movingEffect}
                ref={lp2Ref}
              >
                https://youtu.be/68HrmbZiwaI
              </span>
            </p>
            <p className={styles.q4 + " " + styles.p}>
              <span
                className={styles.lp3 + " " + styles.movingEffect}
                ref={lp3Ref}
              >
                youtube.com/watch?v=iEmIJ3b-hvI
              </span>
            </p>
            <span
              className={styles.entry + " " + styles.span}
              style={{ display: "inline" }}
            >
              <b>Enter your answer:</b>
            </span>
            <input
              placeholder="Enter your answer"
              className={styles.answerTextbox}
              type="text"
              value={answer}
              ref={ansRef}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {showWrongAnswer && (
              <p className={styles.wrongAnswer + " " + styles.span}>
                Wrong answer!
              </p>
            )}
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
