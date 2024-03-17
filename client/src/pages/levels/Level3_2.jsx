import Layout from './Layout'
import backgroundPicURL from '../../assets/images/black.png'
import styles from './Level3_2.module.css'
const Level3_2 = () => {
  return (
    <Layout
      level={3}
      name="Team Gods"
      time="2:29:59"
      score="12345"
      colors={{
        textColor: 'black',
        boxBackgroundColor: 'white',
        leaderboardHeaderColor: 'white',
        iconColor: 'black',
        leaderboardPositionColor: 'black',
        hintTextColor: 'black',
        leaderboardColor: 'white',
        leaderboardTextColor: 'white',
      }}
      backgroundPicURL={backgroundPicURL}
    >
      <div className={styles.container}>
        <h1 className={styles.text}></h1>
        <h1 className={styles.text}></h1>
        <h1 className={styles.text}>-</h1>
        <h1 className={styles.text}></h1>
        <h1 className={styles.text}></h1>
        <h1 className={styles.text}></h1>
      </div>
    </Layout>
  )
}
const flashMessage = (props) => {
  const { text } = props
  return <h1 className={styles.text}>{text}</h1>
}
const flash = () => {
  const coordinates = [
    '-36.889889 145.184472',
    '-37.993139 141.721556',
    '38.313389 145.140417',
    '-37.897028 144.746028',
    '-37.845139 144.995972',
    '-37.993139 141.721556',
  ]
  let counter = 0
  setInterval(() => {
    return 
  }, 1500)
}
export default Level3_2
