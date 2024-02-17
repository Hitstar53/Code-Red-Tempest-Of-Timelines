import * as React from 'react'
import styles from './Level-4.module.css'
import Leaderboard from './Leaderboard'
import Hint from './Hint'

const Bastille = () => {
  const level = styles.level + ' ' + styles.infoBox
  const score = styles.score + ' ' + styles.infoBox
  const infoTime = styles.infoBox + ' ' + styles.timeRemaining
  const teamName = styles.infoBox + ' ' + styles.teamName
  return (
    <div className={styles.outer}>
      <section className={styles.upperSection}>
        <div className={level}>LEVEL 4</div>
        <div className={score}>
          <span>Score:</span> <article>69420</article>
        </div>
      </section>
      <section className={styles.mainContent}>
        <div className={styles.random}></div>
      </section>
      <section className={styles.bottomSection}>
        <div className={infoTime}>
          <span>Time Remaining</span>
          00:00:00
        </div>
        <div className={teamName}>Team Name</div>
        <div className={styles.features}>
          <div>
            <Leaderboard
              bgColor="#C3A077"
              textColor="black"
              headerColor="black"
              iconColor="black"
              positionColor="brown"
            ></Leaderboard>
          </div>
          <div>
            <Hint
              bgColor="#C3A077"
              textColor="black"
              headerColor="black"
              iconColor="black"
            ></Hint>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bastille
