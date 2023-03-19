import React, { useEffect, useRef, useState } from 'react';
import styles from './ItemFadeEffect.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const InfoText = ({title, tag, small}) => {
  
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  let isMobile = winWidth <= 768
  let isTablet = winWidth <= 1024
  let isPc = winWidth > 1024

  const handleResize = () => setWinWidth(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const textRef = useRef(null)

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    if( isPc ) {
      gsap.to(textRef.current, {
        scrollTrigger: {
         trigger: textRef.current,
          start: 'top 40%',
         end: 'bottom 20%',
         toggleActions: 'play none none reverse',
       },
       opacity: 1,
       duration: .4,
       x: 0,
     });
    } else {
      gsap.to(textRef.current, {
        scrollTrigger: {
         trigger: textRef.current,
          start: 'top 40%',
        //  end: 'bottom 20%',
         toggleActions: 'play none none reverse',
       },
       opacity: 1,
       duration: .4,
       x: 0,
     });
    }
  })

  return (
    <div ref={textRef} className={styles.textBox}>
      <h4 className={styles.tag}>{tag}</h4>
      <h2 className={styles.title}>{title}</h2>
      <h5 className={styles.smText}><span className='line'></span>{small}</h5>
    </div>
  )
};

export default InfoText;