import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination,Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination,Autoplay]);

export default function App() {

  return (
    
    <>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} loop={true} 
      autoplay={{ delay: 2000, disableOnInteraction:false}}
    coverflowEffect={{
  "rotate": 60,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} pagination={{dynamicBullets: true}} className="mySwiper">
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" class="image" />
    <div class="overlay">Event 1</div>
    </div>  
  </SwiperSlide>
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-2.jpg" class="image" />
    <div class="overlay">Event 2</div>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-3.jpg" class="image" />
    <div class="overlay">Event 3</div>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-4.jpg" class="image" />
    <div class="overlay">Event 4</div>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-5.jpg" class="image" />
    <div class="overlay">Event 5</div>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-6.jpg" class="image" />
    <div class="overlay">Event 6</div>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-7.jpg" class="image" />
    <div class="overlay">Event 7</div>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-8.jpg" class="image" />
    <div class="overlay">Event 8</div>
    </div> 
  </SwiperSlide>
  <SwiperSlide>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-9.jpg" class="image" />
    <div class="overlay">Event 9</div>
    </div>
  </SwiperSlide>
  </Swiper>
    </>
  )
  
}