import styles from './Layout.module.css'
import Leaderboard from './Leaderboard'
import Hint from './Hint'
import bastille from '../../assets/images/bastille.jpg'
import egypt from '../../assets/images/bastille.jpg'
const Layout = (props) => {
  const { level, name, time, score, backgroundPicURL, colors } = props

  /*colors={
    textColor-> color of normal text, level, time
    boxBackgroundColor-> background color of every box element on the layout
    leaderboardHeaderColor-> color of "leaderboard" in the leaderboard modal
    iconColor-> color of the icons
    leaderboardPositionColor-> color of the background of the teams in the leaderboard outside the top3
    timerColor -> color of the time remaining
    timeRemainingColor ->  color of the text "Time Remaining"
  } */
  const levelStyle = styles.level + ' ' + styles.infoBox
  const scoreStyle = styles.score + ' ' + styles.infoBox
  const infoTimeStyle = styles.infoBox + ' ' + styles.timeRemaining
  const teamNameStyle = styles.infoBox + ' ' + styles.teamName
  return (
    <div className={styles.outer}>
      <section className={styles.upperSection}>
        <div
          className={levelStyle}
          style={{
            backgroundColor: colors.boxBackgroundColor,
            color: colors.textColor,
          }}
        >
          LEVEL {level}
        </div>
        <div
          className={scoreStyle}
          style={{
            backgroundColor: colors.boxBackgroundColor,
            color: colors.textColor,
          }}
        >
          <span>Score:</span> <article>{score}</article>
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
            color: colors.timerColor,
          }}
        >
          <span style={{ color: colors.timeRemainingColor }}>
            Time Remaining
          </span>
          {time}
        </div>
        <div
          className={teamNameStyle}
          style={{
            backgroundColor: colors.boxBackgroundColor,
            color: colors.textColor,
          }}
        >
          Team Name
        </div>
        <div className={styles.features}>
          <div style={{ backgroundColor: colors.boxBackgroundColor }}>
            <Leaderboard
              bgColor={colors.boxBackgroundColor}
              textColor={colors.textColor}
              headerColor={colors.leaderboardHeaderColor}
              iconColor={colors.iconColor}
              positionColor={colors.leaderboardPositionColor}
            ></Leaderboard>
          </div>
          <div style={{ backgroundColor: colors.boxBackgroundColor }}>
            <Hint
              bgColor={colors.boxBackgroundColor}
              textColor={colors.textColor}
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
