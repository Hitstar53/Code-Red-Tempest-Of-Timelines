import React from 'react'
import { Link } from 'react-router-dom'

const Level1 = () => {
  return (
    <div>
      <h1>Level 1</h1>
      <Link to="/levels/prelevel2">Next Level</Link>
    </div>
  )
}

export default Level1