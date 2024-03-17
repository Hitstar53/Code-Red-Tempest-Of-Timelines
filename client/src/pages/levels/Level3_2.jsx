import Layout from './Layout'
import React, { useState, useEffect } from 'react'
import backgroundPicURL from '../../assets/images/egypt.jpg'
import styles from './Level3_2.module.css'
import { useNavigate } from 'react-router-dom'
// import { Typed } from 'react-typed'
// import { TypeAnimation } from 'react-type-animation'  
import { getCurrentLevel,getScore,updateLevel,incrementLevel,checkisLooped,Level3_2Sol } from '../../api/General'
import { set } from 'lodash'

const Level3_2 = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [search, setSearch] = useState('')
  const [score,setScore] = useState(0)

  useEffect(() => {
    getCurrentLevel()
    getScore().then((res) => {setScore(res)})
    const handleKeyPress = async (e) => {
      if (e.key === 'Enter') {
        if (await Level3_2Sol(search)){
          if (await checkisLooped()){
            await incrementLevel()
            navigate('/levels/prelevel4')
          }
          else{
            await updateLevel()
            navigate('/levels/prelevel4')
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [search, navigate])

  const handleCheck = async () => {
    console.log('here')
    if (await Level3_2Sol(search)){
      if (await checkisLooped()){
        await incrementLevel()
        navigate('/levels/prelevel4')
      }
      else{
        await updateLevel()
        navigate('/levels/prelevel4')
      }
    }
    else{
      setSearch('')
    }
  }
  const hintText = "Seperate the odd one, divide the length quarterly, and give 'you'rself to each. It's a unique code…"
  
  // useEffect(() => {
  //   const textArray = [
  //     '-36.889889 145.184472',
  //     '-37.993139 141.721556',
  //     '-38.313389 145.140417',
  //     '-37.897028 144.746028',
  //     '-37.845139 144.995972',
  //     '-37.993139 141.721556'
  //   ];
  //   const interval = setInterval(() => {
  //     if (isTyping) {
  //       if (charIndex < textArray[index].length) {
  //         setText(prevText => prevText + textArray[index][charIndex]);
  //         setCharIndex(charIndex + 1);
  //       } else {
  //         setIsTyping(false);
  //         setTimeout(() => {
  //           setIsTyping(true);
  //           setCharIndex(0);
  //           setText('');
  //           setIndex((index + 1) % textArray.length);
  //         }, 2500); // Wait for 1 second before moving to the next text
  //       }
  //     } else {
  //       if (charIndex > 0) {
  //         setText(prevText => prevText.slice(0, -1));
  //         setCharIndex(charIndex - 1);
  //       } else {
  //         setIsTyping(true);
  //       }
  //     }
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, [index, charIndex, isTyping]);

  return (
    <Layout
      level={3}
      name="Team Gods"
        time="00:00:00"
        score="69420"
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
      backgroundPicURL={backgroundPicURL}
      hintText={hintText}
    >
      <div className={styles.text}>
      {text}
      </div>
      <div className={styles.inputContainer}>
        <input className={styles.level2input} value={search} type="text" placeholder="Enter Name" onChange={(e) => setSearch(e.target.value)}/>
        <button className={styles.level2btn} type="submit" onClick={handleCheck}>
          Login
        </button>
      </div>
    </Layout>
  )
}
export default Level3_2
