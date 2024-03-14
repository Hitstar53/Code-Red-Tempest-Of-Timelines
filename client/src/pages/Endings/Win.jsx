import './win.css'
import React, { useRef, useEffect, useState } from 'react'
import image from '../../assets/images/agent.jpg'
import src from '../../assets/animations/background.mov'
function Win() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    const handleEnded = () => {
      video.play()
    }

    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  function Text({ text }) {
    const [displayedText, setDisplayedText] = useState('')

    useEffect(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        setDisplayedText(text.substring(0, currentIndex))
        currentIndex++
        if (currentIndex > text.length) clearInterval(interval)
      }, 100)
      return () => clearInterval(interval)
    }, [text])

    return <div className="typewriter">{displayedText}</div>
  }

  return (
    <>
      <h1 className="header">YOU'VE SUCCEEDED!</h1>
      <div className="card-container">
        <div className="card">
          <img className="card-image" src={image} alt="Image of an agent" />
          <p className="card-content">
            <Text text="Hello, TPA officer. I am the curator, the one who formed the TPA eons ago, at the dawn of all time. I know you expected to hear from Agent C now, but I hate to break it to you, he is dead. Agent C, or rather Andwyn which was his real name, was himself a variant tasked with cleaning up the mess he had once made by destroying two timelines in his mad pursuit of love. As soon as the two timelines were back up and running, he had no reason to exist out of the temporal continuum, and has now moved on to the afterlife. His final words to me were that he is thankful for everything you had to do for him. Well, so am I… so am I…" />
          </p>
        </div>
      </div>
      <div className="background-video-container">
        <video
          className="background-video"
          ref={videoRef}
          autoPlay
          muted
          style={{ width: '100%' }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}

export default Win
