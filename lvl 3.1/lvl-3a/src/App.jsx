import { useEffect } from 'react'
import './App.css'

function App() {

  const check = ()=>{
    document.querySelector(".answer-textbox").classList.remove("wrong");
    document.querySelector(".wrong-answer").style.display = "none";
    console.log(document.querySelector(".answer-textbox").value);
    var x = document.querySelector(".answer-textbox").value
    if(x.toUpperCase() != "HTML"){
      document.querySelector(".answer-textbox").classList.add("wrong");
      document.querySelector(".wrong-answer").style.display = "inline";
    } 
  }

  useEffect(()=>{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    setInterval(()=>{
       document.querySelector(".lp0").innerText = document.querySelector(".lp0").innerText.split("").map(letter => letters[Math.floor(Math.random()*52)]).join("");

       document.querySelector(".lp1").innerText = document.querySelector(".lp1").innerText.split("").map(letter => letters[Math.floor(Math.random()*52)]).join("");

       document.querySelector(".lp2").innerText = document.querySelector(".lp2").innerText.split("").map(letter => letters[Math.floor(Math.random()*52)]).join("");

       document.querySelector(".lp3").innerText = document.querySelector(".lp3").innerText.split("").map(letter => letters[Math.floor(Math.random()*52)]).join("");
    },60);
  },[]);


  return (<>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
            <div className='container'>
              <div className='inner-container'>
                <p className='q1'><span className="lp lp0">youtube.com/watch?v=Sag7hLly0qg</span></p>
                <p className='q2'><span className='lp lp1'>youtube.com/watch?v=A9dPtRFSfjg</span></p>
                <p className='q3'><span className='lp lp2'>https://youtu.be/68HrmbZiwaI</span></p>
                <p className='q4'><span className='lp lp3'>youtube.com/watch?v=iEmIJ3b-hvI</span></p>
                <span className='entry'><b>Enter your answer:</b></span>
                <input placeholder="Enter your answer" className='answer-textbox' type="text" />
                <span className='wrong-answer'>Wrong answer. Retry</span>
                <button className="btn" type="button" onClick={check}>ENTER</button>
              </div>
            </div>

          </>);
}

export default App
