import styles from './Layout.module.css'
import Leaderboard from '../../components/Leaderboard'
import Hint from '../../components/Hint'
import { FiTarget } from 'react-icons/fi'
import { CountertopsOutlined, Padding } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import ErrorPage from '../ErrorPage'
import { useEffect, useRef, useState } from 'react'
const Layout = (props) => {
  /*colors={
    textColor-> color of normal text, level, time
    boxBackgroundColor-> background color of every box element on the layout
    leaderboardHeaderColor-> color of "leaderboard" in the leaderboard modal
    iconColor-> color of the icons
    leaderboardPositionColor-> color of the background of the teams in the leaderboard outside the top3
    
    leaderboardColor-> color of the leaderboard background
    leaderboardTextColor -> color of the text of the leaderboard positions outside top 3
  } */
  const [countup, setCountup] = useState(0)
  const [countdown, setCountdown] = useState(7200)
  let timerUp = useRef()
  let timerDown = useRef()
  let { level, name, time, score, backgroundPicURL, colors, hintText } = props
  time = countdown
  const levelStyle = styles.level + ' ' + styles.infoBox
  const scoreStyle = styles.score + ' ' + styles.infoBox
  const infoTimeStyle = styles.timeBox + ' ' + styles.timeRemaining
  const teamNameStyle = styles.infoBox + ' ' + styles.teamName

  const format = (time) => {
    let hours = Math.floor((time / 60 / 60) % 24)
    let minutes = Math.floor((time / 60) % 60)
    let seconds = time % 60

    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return hours + ':' + minutes + ':' + seconds
  }
  useEffect(() => {
    // Start countdown
    timerDown.current = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)

    // Start countup
    timerUp.current = setInterval(() => {
      setCountup((prevCountup) => prevCountup + 1)
    }, 1000)

    // Clean up intervals on component unmount
    return () => {
      clearInterval(timerDown.current)
      clearInterval(timerUp.current)
    }
  }, [])
  return (
    <div
      className={styles.outer}
      style={{
        backgroundImage: `url(${backgroundPicURL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <section className={styles.upperSection}>
        <div
          className={levelStyle}
          style={{
            backgroundColor: colors.boxBackgroundColor,
            color: colors.textColor,
            boxShadow: `0px 0px 6px 2px ${colors.textColor}`,
          }}
        >
          Level {level}
        </div>
        <div
          className={scoreStyle}
          style={{
            backgroundColor: colors.boxBackgroundColor,
            color: colors.textColor,
            boxShadow: `0px 0px 6px 2px ${colors.textColor}`,
          }}
        >
          <span>
            <FiTarget style={{ height: '35px', width: '35px' }} /> {score}
          </span>
        </div>
      </section>
      <section className={styles.mainContent}>{props.children}</section>
      <section className={styles.bottomSection}>
        <div
          className={infoTimeStyle}
          style={{
            backgroundColor: colors.boxBackgroundColor,
            color: colors.textColor,
            boxShadow: `0px 0px 6px 2px ${colors.textColor}`,
            zIndex: 5,
          }}
        >
          <span
            style={
              countup > 480 && countup < 600
                ? { color: 'yellow' }
                : countup > 600
                ? { color: 'red' }
                : { color: `${colors.textColor}` }
            }
          >
            {' '}
            {format(countup)}
          </span>

          {format(countdown)}
        </div>
        <div
          className={teamNameStyle}
          style={{
            backgroundColor: colors.boxBackgroundColor,
            color: colors.textColor,
            boxShadow: `0px 0px 6px 2px ${colors.textColor}`,
          }}
        >
          {name}
        </div>
        <div className={styles.features}>
          <div
            style={{
              backgroundColor: colors.boxBackgroundColor,
              padding: '1rem',
              borderRadius: '100vw',
              boxShadow: `0px 0px 6px 2px ${colors.textColor}`,
              zIndex: 10,
            }}
          >
            <Leaderboard
              bgColor={colors.leaderboardColor}
              textColor={colors.leaderboardTextColor}
              headerColor={colors.leaderboardHeaderColor}
              iconColor={colors.iconColor}
              positionColor={colors.leaderboardPositionColor}
            ></Leaderboard>
          </div>
          <div
            style={{
              backgroundColor: colors.boxBackgroundColor,
              padding: '1rem',
              borderRadius: '100vw',
              boxShadow: `0px 0px 6px 2px ${colors.textColor}`,
              zIndex: 10,
            }}
          >
            <Hint
              bgColor={colors.boxBackgroundColor}
              textColor={colors.hintTextColor}
              headerColor={colors.leaderboardHeaderColor}
              iconColor={colors.iconColor}
              hintText={hintText}
            ></Hint>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Layout
