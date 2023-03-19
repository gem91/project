import React from 'react';
import styles from './ItemFadeEffect.module.scss'

import InfoText from './InfoText';
import ThumbImg from '../ThumbImg';

const ImageType = ({imgRef, type, imgURL, title, tag, small}) => {
  return (
      <div ref={imgRef} className={`${styles.item} ${styles[type]}`}>
        <ThumbImg 
          imgURL={imgURL}
          imgAlt='test'
        />
        <InfoText title={title} tag={tag} small={small} />
      </div>
  )
};

export default ImageType;