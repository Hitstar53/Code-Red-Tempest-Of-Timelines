import { useEffect, useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import CodeRainVid from '../../assets/animations/stock-footage-computer-binary-matrix-digital-rain-information-flow-high-tech-digital-matrix-binary-code-falling (online-video-cutter.com).mp4'
import Layout from './Layout'
import styles from './Level1.module.css'
import axios from 'axios'
import { getScore,Level1Sol,getCurrentLevel,updateLevel,checkisLooped,incrementLevel } from '../../api/General.js'

const Level1 = () => {
  const navigate = useNavigate()
  const searchRef = useRef(null);
  const [score, setScore] = useState(0)
  const [isReached,setIsReached] = useState(false)

  useEffect(() => {

    getCurrentLevel()
    const handleKeyPress = async (e) => {
      if (e.key === 'Enter') {
        const res = await Level1Sol(searchRef.current.value)
    if (res && !isReached) {
      setIsReached(true)
      if (await checkisLooped()) {
        await incrementLevel()
        navigate('/levels/prelevel2')
      }
      else{
        await updateLevel()
        navigate('/levels/prelevel2')
      }
    }
    else{
      alert("Wrong Answer")
    }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    getScore().then((res) => {
      setScore(res)
    })
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const handleSearch = async () => {
    const teamId = JSON.parse(localStorage.getItem('team')).id
    const res = await Level1Sol(searchRef.current.value,teamId)
    if (res) {
      await updateLevel()
      navigate('/levels/prelevel2')
    }
    else{
      alert("Wrong Answer")
    }
    
  }
  const hintText =
    "Separate the capitals, convert them into numbers using the most obvious technique which is ASCII encoding. Then give 'you'rself and 2 empty slots before each number and speak the phrase “Unique code” super quick."

  return (
    <div className={styles.level1}>
      <video
        autoPlay
        loop
        muted
        src={CodeRainVid}
        type="video/mp4"
        className={styles.l1Vid}
      />
      <Layout
        level={1}
        name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
        time="00:00:00"
        score= {parseInt(score)}
        colors={{
          textColor: 'white',
          boxBackgroundColor: '#04364A',
          leaderboardHeaderColor: 'white',
          iconColor: 'white',
          leaderboardPositionColor: '#CCD3CA',
          hintTextColor: 'white',
          leaderboardColor: '#04364A',
          leaderboardTextColor: 'black',
        }}
        hintText={hintText}
      >
        <div className={styles.searchBar}>
        <input
            type="text"
            placeholder="Search TPA Archives..."
            ref={searchRef}
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </Layout>
    </div>
  )
}

export default Level1
