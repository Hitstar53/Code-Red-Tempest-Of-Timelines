import React, { useEffect, useRef,useState } from 'react'
import Layout from './Layout'
import background from '../../assets/images/bastillePrison.jpg'
import { Canvas } from '@react-three/fiber'
import Helper4b from './Helper4b'
import Configurator from './Configurator'
import Display from './Display'
import { CustomizationProvider } from '../../contexts/Customization'
import './Level4b.css'
import { useNavigate } from 'react-router-dom'
import { getCurrentLevel,getScore } from '../../api/General.js'
//Changing color
const Level4b = () => {
  const ref = useRef()
  const hintText =
    'It requires a password, perhaps try the one number that changed the history of the land. An icon was born, mayhaps short in stature, but his accomplishments lengthy.The colors that represent the land, can they be the answer?'
  const [score, setScore] = useState(0)
  useEffect(() => {
    getCurrentLevel()
    getScore().then((res) => {
      setScore(res)
    })
  }, []) 
  return (
    <CustomizationProvider>
      <div
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Layout
          level={4}
          name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
          time="00:00:00"
          score= {parseInt(score)}
          backgroundPicURL={background}
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
          <Canvas style={{ touchAction: 'none' }}>
            <Helper4b />
          </Canvas>
          <Display />
          <Configurator />
        </Layout>
      </div>
    </CustomizationProvider>
  )
}

export default Level4b
