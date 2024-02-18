import React from 'react'
import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { Score } from './Leaderboard'
import { Name } from './Leaderboard'
import styles from './Podium.module.css'
import styles2 from './Leaderboard.module.css'

const Podium = (props) => {
  const rankOneStyle = styles.card1 + ' ' + styles2.team
  const rankTwoStyle = styles.card2 + ' ' + styles2.team
  const rankThreeStyle = styles.card3 + ' ' + styles2.team

  const { position, name, score } = props
  if (position == 1) {
    return (
      <div className={rankOneStyle} style={{ fontWeight: 'bold' }}>
        <PiNumberCircleOneFill
          style={{ justifySelf: 'center', fontSize: '25px', color: '#FFB000' }}
        />
        <Name name={name}></Name>
        <Score score={score}></Score>
      </div>
    )
  }
  if (position == 2) {
    return (
      <div className={rankTwoStyle} style={{ fontWeight: 'bold' }}>
        <PiNumberCircleTwoFill
          style={{ justifySelf: 'center', fontSize: '25px', color: '#7D7C7C' }}
        />
        <Name name={name}></Name>
        <Score score={score}></Score>
      </div>
    )
  }
  if (position == 3) {
    return (
      <div className={rankThreeStyle} style={{ fontWeight: 'bold' }}>
        <PiNumberCircleThreeFill
          style={{ justifySelf: 'center', fontSize: '25px', color: '#A87C7C' }}
        />
        <Name name={name}></Name>
        <Score score={score}></Score>
      </div>
    )
  }
}
export default Podium
