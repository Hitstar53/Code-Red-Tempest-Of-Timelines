import React,{useRef,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './Layout'
import LockIcon from '@mui/icons-material/Lock'
import background from '../../assets/images/tm.jpg'
import styles from './Level5.module.css'
import { getCurrentLevel,getScore,Level5Sol,checkisLooped,updateLevel,incrementLevel } from '../../api/General'

const Level5 = () => {
  const navigate = useNavigate()
  const [score, setScore] = useState(0)
  const time = useRef(null)
  const destination = useRef(null)

  useEffect(() => {
    getCurrentLevel()
    getScore().then((res) => {
      setScore(res)
    })
  }, [])

  const handlecheck = async (e) => {
    e.preventDefault()
    //convert time-period to string
    const timePeriod = String(time.current.value)
    const dest = destination.current.value
    console.log(timePeriod,dest)
    const res = await Level5Sol(timePeriod,dest);


    if (res){
      const isLooped = await checkisLooped()
      console.log("Islooped",isLooped)
      if (isLooped){
        console.log("Incrementing level")
        await incrementLevel()
        console.log("Level incremented")
        window.location.href = 'prelevel6'
      }else{
        await updateLevel()
        window.location.href = 'prelevel6'
      }

    }else{
      alert("Wrong Answer")
    }



  }

  return (
    <div
      style={
        {
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
        }
      }
    >
      <Layout
        level={5}
        name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
        time="00:00:00"
        score= {parseInt(score)}
        backgroundPicURL={background}
        colors={{
          textColor: '#fce35d',
          boxBackgroundColor: '#04364A',
          leaderboardHeaderColor: '#fce35d',
          iconColor: '#fce35d',
          leaderboardPositionColor: '#CCD3CA',
          hintTextColor: '#fce35d',
          leaderboardColor: '#04364A',
          leaderboardTextColor: 'black',
        }}
        hintText="Go to the year when scientists no longer called MOS LSI chips by that name anymore. The year when the term ‘microprocessor’ was officially coined.

Also, inversion is a common ploy used by tricksters ‘round the world. Un-invert the phrase, use all the ciphers in your arsenal, and move on to the next level.
"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'fit-content',
            padding: '2rem',
            marginLeft: 'auto',
            marginTop: '6.5rem',
            backgroundColor: '#475c79',
            borderRight: 'none',
            boxShadow: '0px 0px 10px 2px #000',
            position: 'relative',
          }}
        >
          <div className={styles.locked}>
            <p>Time Machine Is Locked</p>
            <LockIcon
              style={{
                fontSize: '100px',
                color: '#fce35d',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <input
              type="number"
              placeholder="Time period"
              className="placeholder:text-[#fce35d]"
              style={{
                width: '250px',
                height: '40px',
                fontSize: '20px',
                fontWeight: 'bold',
                padding: '0 10px',
                backgroundColor: '#000',
                color: '#fce35d',
                textAlign: 'center',
              }}
              ref = {time}
            />
            <input
              type="text"
              placeholder="Destination"
              className="placeholder:text-[#fce35d]"
              style={{
                width: '250px',
                height: '40px',
                fontSize: '20px',
                fontWeight: 'bold',
                padding: '0 10px',
                backgroundColor: '#000',
                color: '#fce35d',
                textAlign: 'center',
              }}
              ref = {destination}
            />
            <button
              onClick={(e) => handlecheck(e)}
              className={styles.travelbtn}
            >
              Travel to Destination
            </button>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Level5
