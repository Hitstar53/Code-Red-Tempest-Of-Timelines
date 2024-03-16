import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackstoryVideo from "../assets/animations/CodeRedAnimation.mp4";
import "./Backstory.css";

const Backstory = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.getElementById("backstory-video");

    const handleVideoEnd = () => {
      setVideoEnded(true);
        setTimeout(() => {
            navigate("/levels/prelevel5");
        }, 10000);
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  const handleReplay = () => {
    const video = document.getElementById("backstory-video");
    video.currentTime = 0;
    video.play();
    setVideoEnded(false);
  };

  const handleNext = () => {
    // Navigate to the next page or perform actions for next
    navigate("/levels/prelevel5");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {!videoEnded ? (
        <video
          id="backstory-video"
          src={BackstoryVideo}
          autoPlay
          controls
          style={{ width: "100%", height: "100%" }}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="text-2xl font-bold">Backstory Ended</p>
          <p className="text-lg">Going to the next page in 10 seconds...</p>
          <button className="rplybtn" onClick={handleReplay}>
            <i className="material-symbols-outlined">replay</i> Replay
          </button>
          <button className="nxtbtn" onClick={handleNext}>
            Next<i className="material-symbols-outlined">navigate_next</i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Backstory;
