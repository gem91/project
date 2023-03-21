import React from 'react';

import styles from './BlogImage.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/css/navigation";

// import required modules
import { Mousewheel, Navigation } from "swiper";



const BlogCardLists = ({imgData, mainImg, setMainImg, setMainAlt, fullImgRef, setTitle, setDesc, setLink, onPopup, isMobile}) => {
  const handleCardImg = (e) => {
    e.preventDefault();
    const target = e.currentTarget;
    const { src, alt } = target
    if (src === mainImg) return;
    fullImgRef.current.setAttribute('src', setMainImg(src))
    fullImgRef.current.setAttribute('alt', setMainAlt(alt))

    imgData.map(({title, desc, imgURL, link}) => {
      if( src === imgURL ){
        setTitle(title)
        setDesc(desc)
        setLink(link)
      }
    })
  }


  return (
    <div className={styles.imgLists}>
      <Swiper
        breakpoints= {{
          678: { 
            slidesPerView: 1, 
          },
          960: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        spaceBetween={10}
        mousewheel={true}
        // scrollbar={{
        // hide: false,
        // }}
        speed={2000}
        modules={[ Mousewheel, Navigation ]}
      >
      { imgData.map(({imgURL, alt, id}) => (
        <SwiperSlide key={id}>
          <span className={styles.thumb} onClick={ isMobile ? onPopup : undefined}>
            <img src={imgURL} alt={alt} onClick={handleCardImg} />
          </span>
        </SwiperSlide>
      ))}
      </Swiper> 
    </div>
  )
};

export default BlogCardLists;