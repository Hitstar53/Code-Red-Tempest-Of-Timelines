import React, { useState } from 'react'
import Layout from './Layout'
import OldComputer from '../../assets/images/old_computer.png';
import './Level4a.css';

const Level4a = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleProceed = () => {
    if (message === 'Success') {
      window.location.href = 'level4-2';
    } else {
      setMessage('Error');
    }
  };
  const handleCheck = () => {
    if (inputValue.trim() === 'Storming of Bastille') {
      setMessage('Success');
    } else {
      setMessage("Error");
    }
  };

  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <Layout
        level={4}
        name="Team Gods"
        time="00:00:00"
        score="69420"
        backgroundPicURL={OldComputer}
        colors={{
          textColor: "#3b2a1a",
          boxBackgroundColor: "#c3a077",
          leaderboardHeaderColor: "black",
          iconColor: "white",
          leaderboardPositionColor: "#CCD3CA",
          hintTextColor: "white",
          leaderboardColor: "#c3a077",
          leaderboardTextColor: "black",
        }}
      >
        <div className='container__outer'>
          <input
            type="text"
            onChange={handleInputChange}
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
            <div style={{
              border: '4px solid #c3a077',
              borderRadius: '5px',
              padding: '10px'
            }}>
              {message === 'Success' ? (
                <button style={{
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
                }}>
                  ✅ Success
                </button>
              ) : (
                <button style={{
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
                  textShadow: '1px 1px #b87333'
                }}
                  disabled={!inputValue}
                  onClick={handleCheck}
                >
                  Check
                </button>
              )}
            </div>
            <div style={{
              border: '4px solid #c3a077',
              borderRadius: '5px',
              padding: '10px'
            }}>
              {message === 'Success' ? (
                <button style={{
                  fontFamily: 'monospace',
                  background: 'white',
                  border: '2px solid #c3a077',
                  borderRadius: '5px',
                  padding: '5px',
                  marginLeft: '10px',
                  width: '15vw',
                  fontSize: '1.3em',
                  fontWeight: 'bold',
                  textShadow: '1px 1px #b87333'
                }}
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              ) : (
                <button style={{
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
                }}>
                  {message === '' ? '😔 Not answered' : '❌ Wrong Password'}
                </button>
              )}
            </div>
          </div>
        </div>

      </Layout>
    </div>
  );
};

export default Level4a;
