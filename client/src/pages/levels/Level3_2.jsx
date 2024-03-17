import Layout from './Layout'
import React from 'react'
import backgroundPicURL from '../../assets/images/black.png'
import styles from './Level3_2.module.css'
import { Typed } from 'react-typed'
import { TypeAnimation } from 'react-type-animation'  

const Level3_2 = () => {
  return (
    <Layout
      level={3}
      name="Team Gods"
      time="2:29:59"
      score="12345"
      colors={{
        textColor: 'black',
        boxBackgroundColor: 'white',
        leaderboardHeaderColor: 'white',
        iconColor: 'black',
        leaderboardPositionColor: 'black',
        hintTextColor: 'black',
        leaderboardColor: 'white',
        leaderboardTextColor: 'white',
      }}
      backgroundPicURL={backgroundPicURL}
    >
      <div>
      {/* <Typed
        strings={[
          '-36.889889 145.184472',
          '-37.993139 141.721556',
          '-38.313389 145.140417',
          '-37.897028 144.746028',
          '-37.845139 144.995972',
          '-37.993139 141.721556'
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop/> */}
      <TypeAnimation
        sequence = {['-36.889889', 
                    500, 
                    '145.184472', 
                    1500, 
                    '-37.993139', 
                    500, 
                    '141.721556', 
                    1500, 
                    '-38.313389',
                    500, 
                    '145.140417', 
                    1500, 
                    '-37.897028',
                    500, 
                    '144.746028', 
                    1500, 
                    '-37.845139',
                    500,
                    '144.995972',
                    1500, 
                    '-37.993139',
                    500,
                    '141.721556'] }
        wrapper = "span"
        typeSpeed = {100}
        deleteSpeed = {100}
        textColor = "white"
      />
      </div>
    </Layout>
  )
}
<<<<<<< HEAD
const flashMessage = (props) => {
  const { text } = props
  return <h1 className={styles.text}>{text}</h1>
}
const flash = () => {
  const coordinates = [
    '-36.889889 145.184472',
    '-37.993139 141.721556',
    '38.313389 145.140417',
    '-37.897028 144.746028',
    '-37.845139 144.995972',
    '-37.993139 141.721556',
  ]
  let counter = 0
  setInterval(() => {
    return 
  }, 1500)
}
=======
>>>>>>> c60764ba017ba78602c301dc9ebaef428ce20b12
export default Level3_2
