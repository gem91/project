import React, { useEffect, useRef } from 'react';
import styles from './ItemFadeEffect.module.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// components
import InfoText from './InfoText';
import ImageType from './ImageType';

const ItemFadeEffect = ({isPc}) => {

   const imgRef1 = useRef(null)
   const imgRef2 = useRef(null)
   const imgRef3 = useRef(null)
   const imgRef4 = useRef(null)

    
  useEffect(() => {      
    gsap.registerPlugin(ScrollTrigger);
    if(isPc) {
      // pc version
      gsap.to(imgRef1.current, {
        scrollTrigger: {
          trigger: imgRef1.current,
          start: 'top 30%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // scrub: true,
        },
        delay: 0.3,
        opacity: 1,
        duration: 1.5,
        Y: 100,
      });
      
      gsap.to(imgRef2.current, {
        scrollTrigger: {
          trigger: imgRef2.current,
          start: 'top 40%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.3,
        opacity: 1,
        duration: 1.5,
        Y: 100,
      });
      
      gsap.to(imgRef3.current, {
        scrollTrigger: {
          trigger: imgRef3.current,
          start: 'top 75%',
          // end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // scrub: true,
        },
        delay: 0.3,
        opacity: 1,
        duration: 1.5,
        Y: 100,
      });
      
      gsap.to(imgRef4.current, {
        scrollTrigger: {
          trigger: imgRef4.current,
          start: 'top 30%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
          // scrub: true,
        },
        delay: 0.3,
        opacity: 1,
        duration: 1.5,
        Y: 100,
      });
    } else {
      // pc version 아닐때
      gsap.to(imgRef1.current, {
      scrollTrigger: {
        trigger: imgRef1.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      delay: 0.3,
      opacity: 1,
      duration: 1.5,
      Y: 100,
    });

      gsap.to(imgRef2.current, {
        scrollTrigger: {
        trigger: imgRef2.current,
        start: 'top 40%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      delay: 0.3,
      opacity: 1,
      duration: 1.5,
      Y: 100,
    });

      gsap.to(imgRef3.current, {
        scrollTrigger: {
        trigger: imgRef3.current,
        start: 'top 30%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
      delay: 0.3,
      opacity: 1,
      duration: 1.5,
      Y: 100,
    });

    gsap.to(imgRef4.current, {
        scrollTrigger: {
        trigger: imgRef4.current,
        start: 'top 30%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
        // scrub: true,
      },
      delay: 0.3,
      opacity: 1,
      duration: 1.5,
      Y: 100,
    });
  }
  }, []);

  useEffect(()=>{
    window.addEventListener('scroll', setTranslate);
    return () => {
      window.removeEventListener('scroll', setTranslate);
    }
  })

// Util functions
function map(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Scroll image Animation (small Y movement)
const inners = document.getElementsByClassName('thumb');
const maxTranslate = 30;

const setTranslate = () => {
  Array.prototype.forEach.call(inners, function(item, i){
    const rect = item.getBoundingClientRect();
    const top = Math.min(0, Math.max(-100, (rect.top * 100) / rect.height));
    const bottom = Math.min(100,Math.max(0, ((rect.bottom - window.innerHeight) *100) / rect.height));
    
    let minAbsValue = 0;
    // If bot values are 0 it means the image is inside viewport
    
    // Always get biggest value
    if(Math.abs(top) > Math.abs(bottom)) {
      minAbsValue = top;
    }
    if(Math.abs(bottom) > Math.abs(top)) {
      minAbsValue = bottom;
    }
    // If image is smaller that viewport
    // Caculate closest percentage.
    // If the image extends to the top and the bottom the same height
    // then value will be 0
    if(top !== 0 && bottom!== 0) {
      minAbsValue = top + bottom;
    }
    // Then map it to a number between MaxTranslate negative and positive
    const mapped = map(minAbsValue,-100,100,-maxTranslate,maxTranslate).toFixed(6);
    item.style.transform = `translateY(${mapped*-1}%)`;
  });
  
}

  return (
    <>
     <div className={styles.imageFade}>
        <div className={styles.contLeft}>
          <div className={`${styles.imageBox} ${styles.image2}`}>
            <ImageType
              imgRef={imgRef1}
              type={'vertical'}
              imgSrc={require('../../../assets/images/my_img03.jpg')}
              title='Propulsive'
              tag='Good Point'
              small='view'
             />
            <InfoText title={'Propulsive'} tag='Good Point' small='view' />
          </div>
          <div className={`${styles.imageBox} ${styles.image4}`}>
            <ImageType
              imgRef={imgRef2}
              type={'horizon'}
              imgSrc={require('../../../assets/images/my_img02.jpg')} 
              title='Inquisitive'
              tag='UX • UI'
              small='view'
            />
            <InfoText title='Inquisitive' tag='UX • UI' small='view' />
          </div>
        </div>

        <div className={styles.contRight}>
          <div className={`${styles.imageBox} ${styles.image1}`}>
            <ImageType
              imgRef={imgRef3}
              type={'horizon'}
              imgSrc={require('../../../assets/images/my_img04.jpg')}
              title='Challenging'
              tag='Organization'
              small='view'
            />
            <InfoText title='Challenging' tag='Organization' small='view' />
          </div>
          <div className={`${styles.imageBox} ${styles.image3}`}>
            <ImageType
              imgRef={imgRef4}
              type={'square'}
              imgSrc={require('../../../assets/images/my_img01.jpg')}
              title='Inquisitive'
              tag='Lettering'
              small='view'
            />
            <InfoText title='Inquisitive' tag='Lettering' small='view' />
          </div>
        </div>
      </div>
    </>
  )
};

export default ItemFadeEffect;