import React, { useEffect, useRef } from 'react'
import Layout from './Layout'
import background from '../../assets/images/bastillePrison.jpg'
import { Canvas } from '@react-three/fiber'
import Helper4b from './Helper4b'
import Configurator from './Configurator'
import Display from './Display'
import { CustomizationProvider } from '../../contexts/Customization'
import './Level4b.css'

//Changing color
const Level4b = () => {
  const ref = useRef()
  const hintText =
    'It requires a password, perhaps try the one number that changed the history of the land. An icon was born, mayhaps short in stature, but his accomplishments lengthy.The colors that represent the land, can they be the answer?'

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
          name="Team Gods"
          time="00:00:00"
          score="69420"
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
