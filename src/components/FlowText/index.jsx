import React from 'react';
import styles from './FlowText.module.scss';

const FlowText = (props) => {
  return (
    <>
    <div className={styles.animatedTitle}>
      <div className={styles.track}>
        <p className={styles.content}>
          &nbsp;&nbsp;Frond-End Developer&nbsp;&nbsp;Designer&nbsp;&nbsp;UX&nbsp;·UI&nbsp;&nbsp;&nbsp;Publisher&nbsp;&nbsp;I&nbsp;&nbsp;Love&nbsp;&nbsp;Web&nbsp;&nbsp;&&nbsp;&nbsp;App
          &nbsp;&nbsp;Frond-End Developer&nbsp;&nbsp;Designer&nbsp;&nbsp;UX&nbsp;·UI&nbsp;&nbsp;&nbsp;Publisher&nbsp;&nbsp;I&nbsp;&nbsp;Love&nbsp;&nbsp;Web&nbsp;&nbsp;&&nbsp;&nbsp;App
          &nbsp;&nbsp;Frond-End Developer&nbsp;&nbsp;Designer&nbsp;&nbsp;UX&nbsp;·UI&nbsp;&nbsp;&nbsp;Publisher&nbsp;&nbsp;I&nbsp;&nbsp;Love&nbsp;&nbsp;Web&nbsp;&nbsp;&&nbsp;&nbsp;App
          &nbsp;&nbsp;Frond-End Developer&nbsp;&nbsp;Designer&nbsp;&nbsp;UX&nbsp;·UI&nbsp;&nbsp;&nbsp;Publisher&nbsp;&nbsp;I&nbsp;&nbsp;Love&nbsp;&nbsp;Web&nbsp;&nbsp;&&nbsp;&nbsp;App
        </p>
      </div>
    </div>

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
    </>
  )
};

export default FlowText;