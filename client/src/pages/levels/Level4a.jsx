import React, { useState,useEffect,useRef } from 'react'
import Layout from './Layout'
import OldComputer from '../../assets/images/old_computer.png'
import './Level4a.css'
import { getScore,getCurrentLevel,Level4aSol,checkisLooped,updateLevel,incrementLevel } from '../../api/General.js'
import { useNavigate } from 'react-router-dom'

const Level4a = () => {
  const inputValue = useRef(null)
  const [message, setMessage] = useState('')
  const [score, setScore] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    getCurrentLevel()
    getScore().then((res) => {
      setScore(res)
    })

  


  }, [])

  

  const handleProceed = async () => {
    if (message === 'Success') {
      navigate('/levels/level4-2')
    } else {
      setMessage('Error')
    }
  }
  const handleCheck = async() => {
    const res = await Level4aSol(inputValue.current.value)
    console.log(res)
    if (res) {
      setMessage('Success')
    } else {
      setMessage('Error')
    }


  }
  const hintText =
    "Get more information on the 'undefeated samurai' using a search engine. Add one day and one month to his day of demise. 'Liberty. Fraternity. Equality.' Haven’t you heard this phrase before?"
  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <Layout
        level={4}
        name= {localStorage.getItem("team")? JSON.parse(localStorage.getItem("team")).name : "Team Name"}
        time="00:00:00"
        score= {parseInt(score)}
        backgroundPicURL={OldComputer}
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
        <div className="container__outer">
          <input
            type="text"
            ref={inputValue}
            style={{
              width: '100%',
              fontFamily: 'monospace',
              fontSize: '2em',
              fontWeight: 'bold',
              border: '4px solid #c3a077',
              borderRadius: '10px',
              padding: '10px',
              outline: 'none',
              boxShadow: '0 0 10px #c3a077',
              transition: 'box-shadow 0.5s ease',
              textAlign: 'center',
              color: '#CD7F32',
              ':focus': {
                boxShadow: '0 0 20px #c3a077',
              },
            }}
          />
          <div
            style={{
              marginTop: '26vh',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                border: '4px solid #c3a077',
                borderRadius: '5px',
                padding: '10px',
              }}
            >
              {message === 'Success' ? (
                <button
                  style={{
                    backgroundColor: '#ccffcc',
                    fontFamily: 'monospace',
                    fontSize: '1.3em',
                    fontWeight: 'bold',
                    width: '7vw',
                    border: '2px solid #c3a077',
                    borderRadius: '5px',
                    padding: '5px',
                    marginLeft: '10px',
                    textShadow: '1px 1px #b87333',
                    textAlign: 'center',
                  }}
                >
                  ✅ Success
                </button>
              ) : (
                <button
                  style={{
                    fontFamily: 'monospace',
                    display: 'block',
                    background: inputValue ? 'white' : 'silver',
                    border: '2px solid #c3a077',
                    borderRadius: '5px',
                    padding: '5px',
                    marginLeft: '10px',
                    fontSize: '1.3em',
                    width: '8vw',
                    fontWeight: 'bold',
                    textShadow: '1px 1px #b87333',
                  }}
                  disabled={!inputValue}
                  onClick={handleCheck}
                >
                  Check
                </button>
              )}
            </div>
            <div
              style={{
                border: '4px solid #c3a077',
                borderRadius: '5px',
                padding: '10px',
              }}
            >
              {message === 'Success' ? (
                <button
                  style={{
                    fontFamily: 'monospace',
                    background: 'white',
                    border: '2px solid #c3a077',
                    borderRadius: '5px',
                    padding: '5px',
                    marginLeft: '10px',
                    width: '15vw',
                    fontSize: '1.3em',
                    fontWeight: 'bold',
                    textShadow: '1px 1px #b87333',
                  }}
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              ) : (
                <button
                  style={{
                    backgroundColor: message === '' ? '#ffffb3' : '#ffb3b3',
                    fontFamily: 'monospace',
                    fontSize: '1.3em',
                    fontWeight: 'bold',
                    width: '15vw',
                    border: '2px solid #c3a077',
                    borderRadius: '5px',
                    padding: '5px',
                    marginLeft: '10px',
                    textShadow: '1px 1px #b87333',
                    textAlign: 'center',
                  }}
                >
                  {message === '' ? '😔 Not answered' : '❌ Wrong Password'}
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Level4a
