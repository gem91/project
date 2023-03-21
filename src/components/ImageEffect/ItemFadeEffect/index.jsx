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

  return (
    <>
     <div className={styles.imageFade}>
        <div className={styles.contLeft}>
          <div className={`${styles.imageBox} ${styles.image1}`}>
            <ImageType
              imgRef={imgRef1}
              type={'vertical'}
              imgURL={require('assets/images/my_img01.jpg')}
              title='Propulsion'
              tag='Good Point'
              small='생각을 행동으로 추진'
             />
            <InfoText title={'Propulsion'} tag='Good Point' small='생각을 행동으로 추진' />
          </div>
          <div className={`${styles.imageBox} ${styles.image2}`}>
            <ImageType
              imgRef={imgRef2}
              type={'horizon'}
              imgURL={require('assets/images/my_img02.jpg')} 
              title='Inquisitivity'
              tag='UX • UI'
              small='호기심이 많은'
            />
            <InfoText title='Inquisitivity' tag='UX • UI' small='호기심이 많은' />
          </div>
        </div>

        <div className={styles.contRight}>
          <div className={`${styles.imageBox} ${styles.image3}`}>
            <ImageType
              imgRef={imgRef3}
              type={'horizon'}
              imgURL={require('assets/images/my_img03.jpg')}
              title='Challenging'
              tag='Strength'
              small='도전적인 나'
            />
            <InfoText title='Challenging' tag='Strength' small='도전적인 나' />
          </div>
          <div className={`${styles.imageBox} ${styles.image4}`}>
            <ImageType
              imgRef={imgRef4}
              type={'square'}
              imgURL={require('assets/images/my_img04.jpg')}
              title='Receptive'
              tag='ORGANIZATION'
              small='수용적인 넓은 생각'
            />
            <InfoText title='Receptive' tag='ORGANIZATION' small='수용적인 넓은 생각' />
          </div>
        </div>
      </div>
    </>
  )
};

export default ItemFadeEffect;