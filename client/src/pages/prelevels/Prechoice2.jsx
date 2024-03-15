import React from 'react'
import Layout from './Layout'

const Prechoice2 = () => {
  const text = [
    "It's a Code Red! The timelines are nearly merged! ",
    "I don't know how yet, because we successfully stopped Andwyn's plans, but they are very close to being merged and the situation is very critical. ",
    "If you have reached 3170 CE and see the target, exterminate him on spot. ",
    "I repeat, exterminate the target on the spot.",
  ]
  return (
    <div>
      <Layout text={text} speed={70} lvl={'C2'} />
    </div>
  )
}

export default Prechoice2
