import { useEffect, useRef } from 'react'
import style from './Wrong_choice_ending_styles.module.css'
import { useNavigate } from 'react-router-dom'
function Wrong_choice_ending() {
  const navigate = useNavigate()
  const opacityIMG = useRef(null)
  useEffect(() => {
    console.log('hi')
    // document.addEventListener("click",()=>{
    //   document.querySelector('.img').classList.add('removing');
    // })
    console.log(opacityIMG)
    setTimeout(() => {
      opacityIMG.current.style.opacity = 0.8
    }, 3000)
    setTimeout(() => {
      opacityIMG.current.style.opacity = 0.6
    }, 6000)
    setTimeout(() => {
      opacityIMG.current.style.opacity = 0.4
    }, 9000)
    setTimeout(() => {
      opacityIMG.current.style.opacity = 0.2
    }, 12000)
    setTimeout(() => {
      opacityIMG.current.style.opacity = 0.0
    }, 15000)
    setTimeout(() => {
      navigate('/levels/level1')
    }, 18000)
  }, [navigate])

  return (
    <div className={style.body}>
      <div className={style.img} ref={opacityIMG}></div>
    </div>
  )
}

export default Wrong_choice_ending
