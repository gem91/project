import React from 'react';
import styles from './ItemFadeEffect.module.scss'

const InfoText = ({title, tag, small}) => (
  <div className={styles.textBox}>
    <h4 className={styles.tag}>{tag}</h4>
    <h2 className={styles.title}>{title}</h2>
    <h5 className={styles.smText}><span className='line'></span>{small}</h5>
  </div>
  );

export default InfoText;