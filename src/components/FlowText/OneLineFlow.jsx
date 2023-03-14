import React from 'react';
import styles from './FlowText.module.scss';

const OneLineFlow = (props) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <p className={styles.text}>&nbsp;&nbsp;Frond-End Developer&nbsp;&nbsp;Designer&nbsp;&nbsp;UX&nbsp;·UI&nbsp;&nbsp;&nbsp;Publisher&nbsp;&nbsp;I&nbsp;&nbsp;Love&nbsp;&nbsp;Web&nbsp;&nbsp;&&nbsp;&nbsp;App</p>
        <p className={styles.text}>&nbsp;&nbsp;Frond-End Developer&nbsp;&nbsp;Designer&nbsp;&nbsp;UX&nbsp;·UI&nbsp;&nbsp;&nbsp;Publisher&nbsp;&nbsp;I&nbsp;&nbsp;Love&nbsp;&nbsp;Web&nbsp;&nbsp;&&nbsp;&nbsp;App</p>
        <p className={styles.text}>&nbsp;&nbsp;Frond-End Developer&nbsp;&nbsp;Designer&nbsp;&nbsp;UX&nbsp;·UI&nbsp;&nbsp;&nbsp;Publisher&nbsp;&nbsp;I&nbsp;&nbsp;Love&nbsp;&nbsp;Web&nbsp;&nbsp;&&nbsp;&nbsp;App</p>
        <p className={styles.text}>&nbsp;&nbsp;Frond-End Developer&nbsp;&nbsp;Designer&nbsp;&nbsp;UX&nbsp;·UI&nbsp;&nbsp;&nbsp;Publisher&nbsp;&nbsp;I&nbsp;&nbsp;Love&nbsp;&nbsp;Web&nbsp;&nbsp;&&nbsp;&nbsp;App</p>
      </div>
    </div>
  )
};

export default OneLineFlow;