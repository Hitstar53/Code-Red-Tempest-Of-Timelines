// import * as React from 'react'
import Layout from './Layout'
import background from '../../assets/images/kimjongun.jpg'
import { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import styles from './Level7.module.css'
//import correct report and not correct report from documents from assets
// import correctReport from '../../assets/documents/thisisthecorrectreport.pdf'
import notCorrectReport from '../../assets/documents/thisisnotthecorrectreport.pdf'
import { getScore,Level7Sol,getCurrentLevel,updateLevel,checkisLooped,incrementLevel } from '../../api/General.js'

const Level7 = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [score, setScore] = useState(0)

  useEffect(() => {
    getCurrentLevel()
    getScore().then((res) => {
      setScore(res)
    })

    const handleKeyPress = async (e) => {
      if (e.key === 'Enter') {
        var inp = inputValue.toLowerCase()
        const res = await Level7Sol(inp)
        if (res) {
          if (await checkisLooped()) {
            await incrementLevel()
            navigate('/levels/levelprechoice1')
          }
          else{
            await updateLevel()
            navigate('/levels/levelprechoice1')
          }
        }
        else{
          setInputValue('')
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [inputValue, navigate])

  const handleChange = async (e) => {
    setInputValue(e.target.value)
  }

  const hintText =
    "There is one file, there are two files, or however many there are… just observe the files and escape patterns carefully. Kim Jong Un's final destination lies in plain sight. Again, the menu on the 'right' is your saviour."

  return (
    <Layout
      level={7}
      name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
      time="00:00:00"
      score= {parseInt(score)}
      backgroundPicURL={background}
      colors={{
        textColor: 'white',
        boxBackgroundColor: '#76453B',
        leaderboardHeaderColor: 'white',
        iconColor: 'white',
        leaderboardPositionColor: '#CCD3CA',
        hintTextColor: 'white',
        leaderboardColor: '#76453B',
        leaderboardTextColor: 'black',
      }}
      hintText={hintText}
    >
      <div className={styles.mapContainer}>
        <iframe
          title="North Korea Map"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247001.83511170897!2d125.8878247156738!3d39.0392194675874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3578e8d97b663933%3A0x56a514e48a07a16a!2sNorth%20Korea!5e0!3m2!1sen!2sus!4v1636967776966!5m2!1sen!2sus"
          width="300"
          height="500"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div
        style={{
          textColor: 'white',
          backgroundColor: '#76453B',
          padding: '1rem',
          borderRadius: '100vw',
          boxShadow: `0px 0px 6px 2px white`,
          zIndex: 10,
          width: 'fit-content',
          margin: '24rem auto 0',
          fontFamily: 'Inter Tight',
          fontWeight: '700',
          fontSize: '1.2rem',
        }}
      >
        <a href={notCorrectReport} download>
          <button
            style={{
              color: 'white',
            }}
          >
            Download
          </button>
        </a>
      </div>
      <div
        style={{
          margin: '0 auto',
          width: 'fit-content',
        }}
      >
        <input
          type="text"
          style={{
            position: 'relative',
            color: 'white',
            backgroundColor: '#76453B',
            padding: '0.5rem 1rem',
            borderRadius: '100vw',
            boxShadow: '0px 0px 6px 2px white',
            zIndex: 15,
            width: 'fit-content',
            fontFamily: 'Inter Tight',
            fontWeight: '700',
            fontSize: '1.2rem',
            margin: '0.5rem auto 0',
            border: 'none', // Adding this to remove default input border
            outline: 'none', // Adding this to remove default input outline
          }}
          onChange={(e) => {
            handleChange(e)
          }}
          value={inputValue}
          placeholder="Final Escape Location"
        />
      </div>
    </Layout>
  )
}

export default Level7
