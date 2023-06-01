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

import Banner1 from '../../assets/ladingPage/Banner1.jpg'
import Banner2 from '../../assets/ladingPage/Banner 2.jpg'
import Banner3 from '../../assets/ladingpage/Banner 3.jpg'

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
        >
            <SwiperSlide className='slide-item'>
                <Link to='/'>
                <img src={Banner1} alt="" width="500px" height="300px" />
                </Link>
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src={Banner2} alt="" width="500px" height="300px" />
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src={Banner3} alt="" width="500px" height="300px" />
            </SwiperSlide>

        </Swiper>

    )
}

export default CarouselHome


