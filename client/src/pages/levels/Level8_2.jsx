import React, { useEffect,useState } from 'react'
import Layout from './Layout'
import RedSecurity from '../../assets/images/RedSecurity.png'
import C4_game from './connect_4/Con4_game'
import { getCurrentLevel,getScore} from '../../api/General'


const Level8_2 = () => {
    const [score, setScore] = useState(0)

    useEffect(() => {
        // getCurrentLevel()
        getScore().then((res) => {
            setScore(res)
        })
    }, [])

    const hintText =
        ''

    return (
        <div
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Layout
                level={8}
                name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
                time="00:00:00"
                score= {parseInt(score)}
                backgroundPicURL={RedSecurity}
                colors={{
                    textColor: '#3b2a1a',
                    boxBackgroundColor: '#c3a077',
                    leaderboardHeaderColor: 'black',
                    iconColor: 'white',
                    leaderboardPositionColor: '#CCD3CA',
                    hintTextColor: 'white',
                    leaderboardColor: '#c3a077',
                    leaderboardTextColor: 'black',
                }}
                hintText={hintText}
            >
                <div style={{
                    fontFamily: '"VT323", monospace',
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 2,
                    margin: '0 auto'
                }}>
                    <C4_game name={"GCSSF"} />
                </div>
            </Layout>
        </div>
    )
}

export default Level8_2
