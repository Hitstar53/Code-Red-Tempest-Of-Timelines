import * as React from 'react'
import Layout from './Layout'
import background from '../../assets/images/egypt.jpg'
const Egypt = () => {
  return (
    <div
      style={{
        // background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Layout
        level={2}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: '#3b2a1a',
          boxBackgroundColor: '#c3a07790',
          leaderboardHeaderColor: 'black',
          iconColor: 'white',
          leaderboardPositionColor: 'brown',
          timerColor: '#503C3C',
          timeRemainingColor: '#503C3C',
          hintTextColor: 'white',
        }}
      ></Layout>
    </div>
  )
}

export default Egypt
