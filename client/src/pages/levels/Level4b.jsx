import React, { useEffect, useRef, Suspense } from 'react'
import Layout from './Layout'
// import background from '../../assets/images/bastille.jpg'
import background from '../../assets/images/bastillePrison.jpg'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Environment } from '@react-three/drei'
// import Bomb from '../../../public/Bomb'

import { BoxGeometry } from 'three'
import Helper4b from './Helper4b'
import Configurator from './Configurator'
import Display from './Display'
import { CustomizationProvider } from '../../contexts/Customization'

//Changing color
const Level4b = () => {
  const ref = useRef()

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
