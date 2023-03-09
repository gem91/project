import React from 'react';
import styles from './ThumbImage.module.scss';

const ThumbImage = ({imgSrc, imgAlt, width, height}) => (
  <div className={styles.thumb} style={{width: `${width}%`, height: `${height}%`}}>
    <img src={imgSrc} alt={imgAlt}  />
  </div>
  );

export default ThumbImage;