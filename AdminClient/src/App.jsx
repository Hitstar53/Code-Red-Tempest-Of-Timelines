import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { TeamReg } from './Pages'

const App = () => {
  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<TeamReg />} />

      </Routes>
        </Router>
    </>
  )
}

export default App