import { useEffect } from 'react';
import './Wrong_choice_ending.css'

function Wrong_choice_ending() {
  
  useEffect(()=>{
    console.log("hi")
    // document.addEventListener("click",()=>{
    //   document.querySelector('.img').classList.add('removing');
    // })
    setTimeout(()=>{document.querySelector('.img').style.opacity= 0.8},3000);
    setTimeout(()=>{document.querySelector('.img').style.opacity= 0.6},6000);
    setTimeout(()=>{document.querySelector('.img').style.opacity= 0.4},9000);
    setTimeout(()=>{document.querySelector('.img').style.opacity= 0.2},12000);
    setTimeout(()=>{document.querySelector('.img').style.opacity= 0.0},15000);
  },[]);

  return (<>
            <div className='img'>
            </div>
        </>);
}

export default Wrong_choice_ending