import React from 'react';
import styles from './ThumbImg.module.scss';

const ThumbImg = ({imgSrc, imgAlt, width, height}) => (
  <div className={styles.thumb} style={{width: `${width}%`, height: `${height}%`}}>
    <img src={imgSrc} alt={imgAlt}  />
  </div>
  );

export default ThumbImg;