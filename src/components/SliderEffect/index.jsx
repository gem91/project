import React, { useEffect } from "react";
import styles from './slider.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/scrollbar";

// import required modules
import { Mousewheel, Scrollbar, Autoplay } from "swiper";


// autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
const SliderEffects = ({imageData}) => {
  
  useEffect(() => {
   console.log(imageData);
  }, []);
  return (
    <>
    { imageData && 
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        freeMode={true}
        mousewheel={true}
        scrollbar={{
        hide: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Scrollbar, Mousewheel, Autoplay]}
        className="mySwiper"
      >
        {
          imageData.map( ({id, company, imgURL},idx) => (
            <SwiperSlide key={idx} >
              <span className={styles.imgThumb}>
                <img src={imgURL} alt={`${company} 로고이미지`} />
              </span>
          </SwiperSlide>
          ))
        }
      </Swiper> 
    }
    { !imageData && 
        <Swiper>
          <SwiperSlide>
             <span>test222222</span>
          </SwiperSlide>
      </Swiper> 
    }
    </>
  )
};

export default SliderEffects;