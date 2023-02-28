import React from 'react';
import styles from './FlowText.module.scss';

const WideFlow = (props) => {
  return (
  <div className={styles.marquee}>
    <div className={styles.track}>
      <span className={styles.textR}>Nicolas.
        <span className={styles.green}>Nicolas.</span>
        </span>
      <span className={styles.textR}>Nicolas.<span className={styles.green}>Nicolas.</span></span>
      <span className={styles.textR}>Nicolas.<span className={styles.green}>Nicolas.</span></span>
      <span className={styles.textR}>Nicolas.<span className={styles.green}>Nicolas.</span> 
      </span>
    </div>
  </div>
  )
};

export default WideFlow;