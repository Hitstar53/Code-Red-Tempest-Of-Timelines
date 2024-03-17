import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './Layout'
import background from '../../assets/images/level2tpa.png'
import styles from './Level2.module.css'
import { setCountupTime } from '../../contexts/store'
import { useDispatch } from 'react-redux'
const Level2 = () => {
  const text =
    "Pyramid of Giza, 2550 BCE Conspiracies surround this structure, by means of beings superior or beings inferior, a monolith it seems, but built by much smaller things. The next mystery, a 'morse'l of food perhaps, for your hunger to reach the end."

  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Layout
        level={2}
        hintText={text}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: '#3b2a1a',
          boxBackgroundColor: '#c3a077',
          leaderboardHeaderColor: 'black',
          iconColor: 'white',
          leaderboardPositionColor: '#CCD3CA',
          hintTextColor: 'white',
          leaderboardColor: '#c3a077',
          leaderboardTextColor: 'black',
        }}
      >
        <div className={styles.loginForm}>
          {/* <h1>Glass</h1> */}
          <form action="#" className={styles.loginFormContainer}>
            <input type="text" placeholder="Enter N° coordinate" />
            <input type="text" placeholder="Enter E° coordinate" />
            <input type="password" placeholder="Enter Year" />
            <button
              onClick={() => {
                dispatch(setCountupTime(0))
                navigate('/levels/prelevel3')
              }}
              className={styles.level2btn}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </Layout>
    </div>
  )
}

export default Level2
