import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './Layout'
import background from "../../assets/images/level2tpa.png";
import styles from './Level2.module.css'
import { getScore,getCurrentLevel,updateLevel,checkisLooped,Level2Sol,incrementLevel } from '../../api/General'
import { useEffect } from 'react'
import { useRef } from 'react'

const Level2 = () => {
  const [score, setScore] = useState(0)
  const coRef = useRef(null)
  const yearRef = useRef(null)

  useEffect(() => {
    getCurrentLevel()
    getScore().then((res) => {
      setScore(res)
    })
  }, [])

  const handleSubmission = async (e) => {
    e.preventDefault()
    // remove all . and , from coordinates and also N ,E and spaces and degree symbol
    var coordinates = coRef.current.value.replace(/[.,NE°\s]/g, '')
    var year = yearRef.current.value

    const res = await Level2Sol(coordinates,year)

    if (res) {
      if (await checkisLooped()){
        await incrementLevel()
        navigate('/levels/prelevel3')
         
      }
      else{
        await updateLevel()
        navigate('/levels/prelevel3')
      }
    }


  }

  const text =
    "Pyramid of Giza, 2550 BCE Conspiracies surround this structure, by means of beings superior or beings inferior, a monolith it seems, but built by much smaller things. The next mystery, a 'morse'l of food perhaps, for your hunger to reach the end."

  const navigate = useNavigate()
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
        name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
        time="00:00:00"
        score={parseInt(score)}
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
            <input type="text" placeholder="Enter Co-ordinates" 
             ref = {coRef}
             
            />
            <input type="password" placeholder="Enter Year" 
              ref = {yearRef}
            />
            <button
              onClick={(e) => handleSubmission(e)}
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
