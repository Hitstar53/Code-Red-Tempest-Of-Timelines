import React from 'react'
import styles from './Podium.module.css'
import styles2 from './Leaderboard.module.css'
import { Score } from './Leaderboard'
import { Name } from './Leaderboard'
import { FaMedal } from 'react-icons/fa6'
import { BiSolidMedal } from 'react-icons/bi'
import { GiMedal } from 'react-icons/gi'
const Podium = (props) => {
  const rankOneStyle = styles.card1 + ' ' + styles2.team
  const rankTwoStyle = styles.card2 + ' ' + styles2.team
  const rankThreeStyle = styles.card3 + ' ' + styles2.team

  const { position, name, score } = props
  if (position == 1) {
    return (
      <div className={rankOneStyle} style={{ fontWeight: 'bold' }}>
        <FaMedal style={{ justifySelf: 'center' }} />
        <Name name={name}></Name>
        <Score score={score}></Score>
      </div>
    )
  }
  if (position == 2) {
    return (
      <div className={rankTwoStyle} style={{ fontWeight: 'bold' }}>
        <BiSolidMedal style={{ justifySelf: 'center', fontSize: '30px' }} />
        <Name name={name}></Name>
        <Score score={score}></Score>
      </div>
    )
  }
  if (position == 3) {
    return (
      <div className={rankThreeStyle} style={{ fontWeight: 'bold' }}>
        <GiMedal style={{ justifySelf: 'center', fontSize: '30px' }} />
        <Name name={name}></Name>
        <Score score={score}></Score>
      </div>
    )
  }
}
export default Podium
