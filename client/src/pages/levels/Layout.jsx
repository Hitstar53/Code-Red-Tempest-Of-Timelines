import styles from './Layout.module.css'
import Leaderboard from './Leaderboard'
import Hint from './Hint'
import { FiTarget } from 'react-icons/fi'
import { Padding } from '@mui/icons-material'
const Layout = (props) => {
  const { level, name, time, score, backgroundPicURL, colors } = props
  /*colors={
    textColor-> color of normal text, level, time
    boxBackgroundColor-> background color of every box element on the layout
    leaderboardHeaderColor-> color of "leaderboard" in the leaderboard modal
    iconColor-> color of the icons
    leaderboardPositionColor-> color of the background of the teams in the leaderboard outside the top3
    
    leaderboardColor-> color of the leaderboard background
    leaderboardTextColor -> color of the text of the leaderboard positions outside top 3

  } */
  const levelStyle = styles.level + ' ' + styles.infoBox
  const scoreStyle = styles.score + ' ' + styles.infoBox
  const infoTimeStyle = styles.infoBox + ' ' + styles.timeRemaining
  const teamNameStyle = styles.infoBox + ' ' + styles.teamName
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
      <section className={styles.mainContent}>
        <div className={styles.random}></div>
      </section>
      <section className={styles.bottomSection}>
        <div
          className={infoTimeStyle}
          style={{
            backgroundColor: colors.boxBackgroundColor,
            color: colors.textColor,
            boxShadow: `0px 0px 6px 2px ${colors.textColor}`,
          }}
        >
          <span>Time Remaining</span>
          {time}
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
            }}
          >
            <Hint
              bgColor={colors.boxBackgroundColor}
              textColor={colors.hintTextColor}
              headerColor={colors.leaderboardHeaderColor}
              iconColor={colors.iconColor}
            ></Hint>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Layout
