import React, {useState,useEffect} from 'react'
import './BackToTop.css'
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility=()=>{
        if(window.pageYOffset > 900){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }
    const scrollToTop=()=>{
        window.scrollTo(
            {
                top:0,
                behavior:"smooth"
            }
        )
    }
    useEffect(()=>{
        window.addEventListener("scroll",toggleVisibility)
        return ()=>{
            window.removeEventListener("scroll",toggleVisibility)
        }
    })
  return (
    <div className='scroll-to-top'>
        {isVisible && (
            <div onClick={scrollToTop} className='back-top-container'>
            Bact To Top
            </div>
        )}
    </div>
  )
}

export default BackToTop