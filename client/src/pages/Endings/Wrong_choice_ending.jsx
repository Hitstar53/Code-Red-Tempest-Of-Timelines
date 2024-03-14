import { useEffect } from 'react'
import './Wrong_choice_ending_styles.css'
import { useNavigate } from 'react-router-dom'
function Wrong_choice_ending() {
  const navigate = useNavigate()
  useEffect(() => {
    console.log('hi')
    // document.addEventListener("click",()=>{
    //   document.querySelector('.img').classList.add('removing');
    // })
    setTimeout(() => {
      document.querySelector('.img').style.opacity = 0.8
    }, 3000)
    setTimeout(() => {
      document.querySelector('.img').style.opacity = 0.6
    }, 6000)
    setTimeout(() => {
      document.querySelector('.img').style.opacity = 0.4
    }, 9000)
    setTimeout(() => {
      document.querySelector('.img').style.opacity = 0.2
    }, 12000)
    setTimeout(() => {
      document.querySelector('.img').style.opacity = 0.0
    }, 15000)
    setTimeout(() => {
      navigate('/levels/level1')
    }, 18000)
  }, [navigate])

  return (
    <div className="body">
      <div className="img"></div>
    </div>
  )
}

export default Wrong_choice_ending
