import React, { Component, useRef, useState } from "react";

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

// import background video
import video from "./backgroundvideo/video.mp4";

// import Modal
import {Button, Modal} from 'react-bootstrap';

import Gallery from 'react-photo-gallery';

// import popup
import 'reactjs-popup/dist/index.css';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination,Autoplay]);

export default function App() {
  const[show,popup]=useState(false);
  const modalOpen = () => popup(true);
  const modalClose = () => popup(false);
  const PHOTO_SET = [
    {
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
      width: 20,
      height: 20
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-6.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
      width: 20,
      height: 20
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-6.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
      width: 20,
      height: 20
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-6.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
      width: 20,
      height: 20
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-6.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-10.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
      width: 20,
      height: 20
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-6.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
      width: 20,
      height: 20
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-6.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
      width: 20,
      height: 20
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-6.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-3.jpg',
      width: 20,
      height: 20
    },
    {
      src: 'https://swiperjs.com/demos/images/nature-6.jpg',
      width: 1,
      height: 1
    }
  ];

  return (

    <>
    
    <video
      autoPlay loop muted 
      style={{
        position:"absolute",
        width:"100%",
        left:"50%",
        top:"50%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(-50%,-50%)",
        zIndex:"-1"
      }}
    >
      <source src={video} type="video/mp4" />
    </video>

    <Modal class="modal" id="Modal"
      show={show} 
      onHide={modalClose}
      scrollable={true}
      style={{
        position:"relative",
        width:"100%",
        left:"100%",
        top:"100%",
        bottom:"100%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(100%,100%)",
      }}
    >
      <Modal.Header>
      <div class ="button-close">
      <Button onClick={modalClose}>X</Button>
      </div>
        <Modal.Title>
          <h1 class="center">Event 1 Photos</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
        <Gallery photos={PHOTO_SET} />
        </div>
      </Modal.Body>
    </Modal>

    <div>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} loop={true} 
      autoplay={{ delay: 2000, disableOnInteraction:false}}
    coverflowEffect={{
    "rotate": 60,
    "stretch": 0,
    "depth": 100,
    "modifier": 1,
    "slideShadows": true
    }} pagination={{dynamicBullets: true}} className="mySwiper">

  <SwiperSlide onClick={modalOpen}>
    <div class="container" >
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" class="image" />
    <div class="overlay">Event 1</div>
    </div>
    <center>Event Name</center>  
  </SwiperSlide>
  <SwiperSlide onClick={modalOpen}>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-2.jpg" class="image" />
    <div class="overlay">Event 2</div>
    </div> 
    <center>Event Name</center>
  </SwiperSlide>
  <SwiperSlide onClick={modalOpen}>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-3.jpg" class="image" />
    <div class="overlay">Event 3</div>
    </div> 
    <center>Event Name</center>
  </SwiperSlide>
  <SwiperSlide onClick={modalOpen}>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-4.jpg" class="image" />
    <div class="overlay">Event 4</div>
    </div> 
    <center>Event Name</center>
  </SwiperSlide>
  <SwiperSlide onClick={modalOpen}>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-5.jpg" class="image" />
    <div class="overlay">Event 5</div>
    </div> 
    <center>Event Name</center>
  </SwiperSlide>
  <SwiperSlide onClick={modalOpen}>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-6.jpg" class="image" />
    <div class="overlay">Event 6</div>
    </div> 
    <center>Event Name</center>
  </SwiperSlide>
  <SwiperSlide onClick={modalOpen}>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-7.jpg" class="image" />
    <div class="overlay">Event 7</div>
    </div> 
    <center>Event Name</center>
  </SwiperSlide>
  <SwiperSlide onClick={modalOpen}>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-8.jpg" class="image" />
    <div class="overlay">Event 8</div>
    </div> 
    <center>Event Name</center>
  </SwiperSlide>
  <SwiperSlide onClick={modalOpen}>
    <div class="container">
    <img src="https://swiperjs.com/demos/images/nature-9.jpg" class="image" />
    <div class="overlay">Event 9</div>
    </div>
    <center>Event Name</center>
  </SwiperSlide>
  </Swiper>
  </div>
    </>
  )
}