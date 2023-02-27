import React from 'react';

import styles from './BlogImage.module.scss';

const BlogCard = ({imgData,mainImg, setMainImg, setMainAlt, fullImgRef}) => {
  const handleCardImg = (e) => {
    const target = e.currentTarget;
    const { src, alt } = target
    if (src === mainImg) return;
    fullImgRef.current.setAttribute('src', setMainImg(src))
    fullImgRef.current.setAttribute('alt', setMainAlt(alt))
  }

  return (
    <ul className={styles.imgLists}>
      {
        imgData.map(({src, alt}, idx) => (
          <li key={idx}>
            <img src={src}alt={alt} onClick={handleCardImg} />
          </li>
        ))
      }
    </ul>
  )
};

export default BlogCard;