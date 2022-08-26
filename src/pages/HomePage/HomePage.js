import React from 'react'
//external components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Autoplay, Navigation} from 'swiper'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
//internal components 
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/footer'
import imgBackground1 from '../../assets/home_background_1.jpeg'
import imgBackground2 from '../../assets/home_background_2.jpeg'
import imgBackground3 from '../../assets/home_background_3.jpeg'
import imgBackground4 from '../../assets/home_background_4.jpeg'
import { useTranslation } from 'react-i18next';
//style
import './HomePage.scss'
import './HomePage_MobileResponsive.scss'
import 'swiper/css';

export default function HomePage(){
    const [t, i18n] = useTranslation("global")
    return(
        <div className='homepage-container'>
            <header className='homepage-header'>
                <Navbar/>
                <div className='header-background-img'>
                    <Swiper
                        allowTouchMove={false}
                        centeredSlides
                        loop
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        pagination
                        modules={[Autoplay, Pagination, Navigation]}
                        className='swiper-backgrounds-img'
                        >
                        <SwiperSlide><img src={imgBackground1} alt='background_1'/></SwiperSlide>
                        <SwiperSlide><img src={imgBackground3} alt='background_3'/></SwiperSlide>
                        <SwiperSlide><img src={imgBackground2} alt='background_2'/></SwiperSlide>
                        <SwiperSlide><img src={imgBackground4} alt='background_4'/></SwiperSlide>
                    </Swiper>
                </div>
                <div className='header-background-text'>
                    <Swiper
                        allowTouchMove={false}
                        centeredSlides
                        loop
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        pagination
                        modules={[Autoplay, Pagination, Navigation]}
                        className='swiper-backgrounds-text'
                        >
                        <SwiperSlide>{t("header.carousel.sports")}</SwiperSlide>
                        <SwiperSlide>{t("header.carousel.entertainment")}</SwiperSlide>
                        <SwiperSlide>{t("header.carousel.gastronomy")}</SwiperSlide>
                        <SwiperSlide>{t("header.carousel.bets")}</SwiperSlide>
                    </Swiper>
                </div>
                <div className='header-scroll-down-icon'>
                    <a href="#info"><ArrowCircleDownIcon /></a>
                    <span>scroll down</span>
                </div>
            </header>
            <div className='homepage-main'>
                <div className='main-info' id='info'>
                    <p>{t("main.homepage.text-1")}</p>
                    <p>{t("main.homepage.text-2")}</p>
                    <p>{t("main.homepage.text-3")}</p>
                    <p>{t("main.homepage.text-4")}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
