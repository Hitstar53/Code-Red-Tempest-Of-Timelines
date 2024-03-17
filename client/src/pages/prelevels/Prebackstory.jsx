import React from 'react'
import Layout from './Layout'

const Prelevel1 = () => {
  const text = [
    'Phew! That was a close call. Let me search more about this Andwyn guy. There must be something in the archives.',
    "I've found something. It's a video of Andwyn. Let me play it for you.",
  ]
  return (
    <div>
      <Layout text={text} speed={90} lvl={'backstory'} />
    </div>
  )
}

export default Prelevel1
