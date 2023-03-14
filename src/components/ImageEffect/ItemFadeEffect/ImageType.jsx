import React from 'react';
import styles from './ItemFadeEffect.module.scss'

import InfoText from './InfoText';
import ThumbImg from '../ThumbImg';

const ImageType = ({imgRef, type, imgSrc, title, tag, small}) => {
  return (
      <div ref={imgRef} className={`${styles.item} ${styles[type]}`}>
        <ThumbImg 
          imgSrc={imgSrc}
          imgAlt='test'
        />
        <InfoText title={title} tag={tag} small={small} />
      </div>
  )
};

export default ImageType;