import React from 'react';
// instalar o swiper versão 6
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// Colocando o Navigation e Pagination:
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Aqui estou instalando os Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import './CarouselHome.css';
import { Link } from 'react-router-dom';

function CarouselHome() {

    return (

        <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className='swiper-container'
            style={{marginLeft:'-20px', width:'100%', marginTop:'40px', borderRadius:'20px'}} >
            <SwiperSlide className='slide-item' >
                <Link to='/'>
                <img src="https://i.imgur.com/Z0DsPYk.png" alt="" width="500px" height="300px" />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="https://i.imgur.com/p2b9dNp.png" alt="" width="500px" height="300px" />
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="https://i.imgur.com/btMVehw.jpg" alt="" width="500px" height="300px" />
            </SwiperSlide>

        </Swiper>

    )
}

export default CarouselHome


