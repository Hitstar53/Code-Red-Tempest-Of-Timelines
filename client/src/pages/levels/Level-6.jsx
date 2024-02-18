import * as React from 'react'
import Layout from './Layout'
import background from '../../assets/images/area51.jpeg'
const Area51 = () => {
  return (
    <div
      style={{
        // background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Layout
        level={6}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={background}
        colors={{
          textColor: 'white',
          boxBackgroundColor: '#04364A',
          leaderboardHeaderColor: 'black',
          iconColor: 'white',
          leaderboardPositionColor: 'brown',
          timerColor: 'white',
          timeRemainingColor: 'white',
          hintTextColor: 'white',
        }}
      ></Layout>
    </div>
  )
}

export default Area51
