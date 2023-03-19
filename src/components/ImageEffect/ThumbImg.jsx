import React from 'react';
import styles from './ThumbImg.module.scss';

const ThumbImg = ({imgURL, imgAlt, width, height}) => (
  <div className={styles.thumb} style={{width: `${width}%`, height: `${height}%`}}>
    <img src={imgURL} alt={imgAlt}  />
  </div>
  );

export default ThumbImg;