import React from 'react';
import styles from './FlowText.module.scss';

const WideFlow = ({tit, em}) => {
  return (
  <div className={styles.marquee}>
    <div className={styles.track}>
      <span className={styles.text}>{tit}<span className={styles.em}>{em}</span></span>
      <span className={styles.text}>{tit}<span className={styles.em}>{em}</span></span>
      <span className={styles.text}>{tit}<span className={styles.em}>{em}</span></span>
      <span className={styles.text}>{tit}<span className={styles.em}>{em}</span> 
      </span>
    </div>
  </div>
  )
};

export default WideFlow;