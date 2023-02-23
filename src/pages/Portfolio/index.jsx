import React, { useEffect, useRef, useState } from 'react';
import styles from './Portfolio.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs';
import DefaultButton from '../../components/Button/DefaultButton';

const Portfolio = (props) => {
  const fullImgRef = useRef(null)

  useEffect(()=>{
    console.log(fullImgRef);
  }, [])

  const handleCardImg = (e) => {
    const target = e.currentTarget;
    const { src, alt } = target
    fullImgRef.current.setAttribute('src', src)
    fullImgRef.current.setAttribute('alt', alt)
  }
  const goToPage = () => {
    console.log('사이트로 이동중입니다.')
  }

  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
         <BreadCrumbs text={'Project'}></BreadCrumbs>
        <div className={styles.projectWrap}>
          <div className={styles.cardWrap}>
            <div className={styles.cardCont}>
              <div className={styles.contentLeft}>
                  <img ref={fullImgRef} 
                    className={styles.fullImg} 
                    src="https://images.unsplash.com/photo-1592431454781-ec4870757ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" 
                    alt="Unsplash" />
              </div>
              <div className={styles.contentRight}>
                  <div className={styles.button}>
                    <DefaultButton type={'Go To Site'} onClick={goToPage}></DefaultButton>
                  </div>
                  <div className={styles.textBox}>
                    <h3 className={styles.title}>Outdoor Experience</h3>
                    <p>It’s windy. The cool breeze of the lake. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
                  </div>
                  <div className={styles.miniImgs}>
                      <img className={styles.miniImg} 
                        src="https://images.unsplash.com/photo-1593346279196-b971a8e46966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80" 
                        alt="Unsplash" 
                        onClick={handleCardImg} />
                      <img className={styles.miniImg} 
                        src="https://images.unsplash.com/photo-1594884592479-1f5bad0b696d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80" 
                        alt="Unsplash" 
                        onClick={handleCardImg} />
                      <img className={styles.miniImg} 
                        src="https://images.unsplash.com/photo-1592431454781-ec4870757ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" 
                        alt="Unsplash" 
                        onClick={handleCardImg} />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Portfolio;