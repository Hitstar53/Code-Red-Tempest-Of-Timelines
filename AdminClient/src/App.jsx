import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { TeamReg,Bulk_Upload,Leaderboard } from './Pages'

const App = () => {
  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<TeamReg />} />
        <Route path="/bulk" element={<Bulk_Upload />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

      </Routes>
        </Router>
    </>
  )
}

export default App