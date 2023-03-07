import React from "react";
import styles from './slider.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/css/navigation";

// import required modules
import { Mousewheel, Autoplay, Navigation, } from "swiper";


const SliderEffects = ({imageData}) => {
  
  return (
    <>
    { imageData && 
      <Swiper
        breakpoints= {{
          768: { 
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
        spaceBetween={15}
        freeMode={true}
        mousewheel={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[ Mousewheel, Autoplay, Navigation,]}
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
    </>
  )
};

export default SliderEffects;