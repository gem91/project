import React from 'react';
import styles from './ImageFadeEffect.module.scss'

import InfoText from './InfoText';
import ThumbImg from './ThumbImg';

const ImageType = ({imgRef, type, imgSrc}) => {
  return (
      <div ref={imgRef} className={`${styles.item} ${styles[type]}`}>
        <ThumbImg 
          imgSrc={imgSrc}
          imgAlt='test'
        />
        <InfoText title='Inquisitive' tag='Good Point' small='view' />
      </div>
  )
};

export default ImageType;