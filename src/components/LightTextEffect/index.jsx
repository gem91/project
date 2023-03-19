import React, {useRef, useEffect} from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './LightTextEffect.module.scss'

const LightTextEffect = ({title, text1, text2, text3}) => {
  const hadnleEffects = (e) => {
		const mouseX = e.clientX;
    const mouseY = e.clientY;
		gsap.to([effectRef1.current, effectRef2.current, effectRef3.current], {
			x: mouseX,
      y: mouseY,
      stagger: -0.1
    })
	}

	const effectRef1 = useRef(null)
  const effectRef2 = useRef(null)
  const effectRef3 = useRef(null)

  const textRef1 = useRef(null)
  const textRef2 = useRef(null)
  const textRef3 = useRef(null)
   
  useEffect(() => {      
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(textRef1.current, {
      scrollTrigger: {
        trigger: textRef1.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      delay: 0.2,
      opacity: 1,
      duration: 1,
      x: 0,
    });
    gsap.to(textRef2.current, {
      scrollTrigger: {
        trigger: textRef2.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      delay: 0.8,
      duration: 1.2,
      x: 0,
    });
    gsap.to(textRef3.current, {
      scrollTrigger: {
        trigger: textRef3.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      delay: 1.6,
      opacity: 1,
      duration: 1.2,
      x: 0,
    });
  }, []);


  return (
   <div className={styles.lightTextEffect}>
     <div className={styles.effects}>
        <div ref={effectRef1} className={`${styles.effect} ${styles.effect1}`}></div>
        <div ref={effectRef2} className={`${styles.effect} ${styles.effect2}`}></div>
        <div ref={effectRef3} className={`${styles.effect} ${styles.effect3}`}></div>
      </div>
      <div className={styles.topText} onMouseMove={hadnleEffects}>
        <h2>{title}</h2>
       <div className={styles.descBox}>
        <p ref={textRef1} className={styles.text}>{text1}</p>
        <p ref={textRef2} className={styles.text}>{text2}</p>
        <p ref={textRef3} className={styles.text}>{text3}</p>
       </div>
      </div>
   </div>
  )
};

export default LightTextEffect;