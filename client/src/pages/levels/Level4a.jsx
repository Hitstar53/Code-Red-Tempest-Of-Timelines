import React, { useState } from 'react'
import Layout from './Layout'
import background from '../../assets/images/bastille.jpg'
import TextFieldImage from '../../assets/images/old-computer.jpg';
import './Level4a.css';

const Level4a = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  // const button = document.querySelector('.check-button');
  // const proceed = document.querySelector('.proceed-button');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (message === 'Congratulations') {
      window.location.href = 'level4-2';
    } else {
      setMessage('Pls enter the correct code');
      setMessage('Enter Answer');
    }
  };
  const handleCheckClick = () => {
    if (inputValue.trim() === 'Storming of Bastille') {
      setMessage('Congratulations');
    } else {
      setMessage('Error');
    }
  };

  return (
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
        <div className="rectangle-vertical" style={{ backgroundImage: `url(${TextFieldImage})`, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', height: '450px', width: '37rem', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '38rem' }}>
          <input
            type="text"
            placeholder="Decode by Add/Sub"
            value={inputValue}
            onChange={handleInputChange}
            style={{
              width: '34%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginTop: '5rem',
              fontSize: '16px', // Font size for input field
              textAlign: 'center', // Center text in input field
            }}
          />
          <p
            className="result"
            style={{
              fontWeight: 'bold',
              marginTop: '20px', // Adjust vertical alignment
              color: message === 'Congratulations' ? '#00ff00' : '#ff0000',
              fontSize: '23px', // Font size
            }}
          >
            {message}
          </p>
          <button
            className="check-button"
            style={{
              backgroundColor: 'red', 
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              width: '120px', // Increase button width
              height: '40px', // Increase button height
              color: 'white', // Text color
              fontSize: '16px', // Font size
              fontWeight: 'bold', // Font weight
              borderRadius: '5px', // Button border radius
              marginTop: '8rem', // Add spacing between input and button
            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = 'darkred' }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = 'red' }}
            onClick={handleCheckClick}
          >
            CHECK
          </button>
          <button
            className="proceed-button"
            onClick={handleButtonClick}
            style={{
              backgroundColor: 'blue', 
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              width: '120px', // Increase button width
              height: '40px', // Increase button height
              color: 'white', // Text color
              fontSize: '16px', // Font size
              fontWeight: 'bold', // Font weight
              borderRadius: '5px', // Button border radius
              // marginTop: '200px', // Add spacing between input and button
              marginLeft: '800px',

            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = 'darkblue' }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = 'blue' }}
          >
            PROCEED NEXT
          </button>
        </div>
      </Layout>
    </div>
  )
}

export default Level4a
