import React from 'react';
import styles from './FlowText.module.scss';

const TwoTypeFlow = ({tit, em}) => {
  return (
  <div className={styles.marqueeR}>
    <div className={styles.track}>
      <p className={styles.text}>{tit}<span className={styles.em}>{em}</span></p>
      <p className={styles.text}>{tit}<span className={styles.em}>{em}</span></p>
      <p className={styles.text}>{tit}<span className={styles.em}>{em}</span></p>
      <p className={styles.text}>{tit}<span className={styles.em}>{em}</span></p>
    </div>
  </div>
  )
};

export default TwoTypeFlow;