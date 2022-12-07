import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../";

// import required modules
import { Pagination, Navigation } from "swiper";
import CardParty from "./CardParty";
const SwipperContainer = () => {
    return ( 
        <>
        <Swiper
        //   slidesPerView={4}
        //   spaceBetween={30}
        //   slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            600: {
             
              slidesPerView: 2,
            },
            // when window width is >= 768px
            960: {
              
              slidesPerView: 3,
            },
            1000: {
            
              slidesPerView: 4,
            },
          }}
        >
        
          <SwiperSlide><CardParty/></SwiperSlide>
          <SwiperSlide><CardParty/></SwiperSlide>
          <SwiperSlide><CardParty/></SwiperSlide>
          <SwiperSlide><CardParty/></SwiperSlide>
          <SwiperSlide><CardParty/></SwiperSlide>
          <SwiperSlide><CardParty/></SwiperSlide>
          <SwiperSlide><CardParty/></SwiperSlide>
          <SwiperSlide><CardParty/></SwiperSlide>
          <SwiperSlide><CardParty/></SwiperSlide>
        </Swiper>
      </>
     );
}
 
export default SwipperContainer;

