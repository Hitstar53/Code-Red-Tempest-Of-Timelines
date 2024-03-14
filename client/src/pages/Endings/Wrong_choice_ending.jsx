import { useEffect } from 'react'
import style from './Wrong_choice_ending_styles.module.css'
import { useNavigate } from 'react-router-dom'
function Wrong_choice_ending() {
  const navigate = useNavigate()
  useEffect(() => {
    console.log('hi')
    // document.addEventListener("click",()=>{
    //   document.querySelector('.img').classList.add('removing');
    // })
    setTimeout(() => {
      document.querySelector({style.img}).style.opacity = 0.8
    }, 3000)
    setTimeout(() => {
      document.querySelector({style.img}).style.opacity = 0.6
    }, 6000)
    setTimeout(() => {
      document.querySelector({style.img}).style.opacity = 0.4
    }, 9000)
    setTimeout(() => {
      document.querySelector({style.img}).style.opacity = 0.2
    }, 12000)
    setTimeout(() => {
      document.querySelector({style.img}).style.opacity = 0.0
    }, 15000)
    setTimeout(() => {
      navigate('/levels/level1')
    }, 18000)
  }, [navigate])

  return (
    <div className={style.bg}>
      <div className={style.img}></div>
    </div>
  )
}

export default Wrong_choice_ending
