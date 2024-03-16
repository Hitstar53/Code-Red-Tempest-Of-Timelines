import { useDebugValue, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CodeRainVid from '../../assets/animations/stock-footage-computer-binary-matrix-digital-rain-information-flow-high-tech-digital-matrix-binary-code-falling (online-video-cutter.com).mp4'
import Layout from './Layout'
import styles from './Level1.module.css'
import { nextLevel } from '../../contexts/store'
import { useDispatch } from 'react-redux'
import { UseSelector } from 'react-redux'
const Level1 = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        if (search === 'TP$') {
          navigate('/levels/prelevel2')
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [search, navigate])

  const handleSearch = () => {
    if (search === 'TR$') {
      dispatch(nextLevel({ level: 2 }))
      navigate('/levels/prelevel2')
    }
  }
  const hintText =
    "Seperate the odd one, divide the length quarterly, and give 'you'rself to each. It's a unique code…"

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
        name="Team Gods"
        time="00:00:00"
        score="69420"
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
            onChange={(e) => setSearch(e.target.value)}
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
