import React, { useState } from 'react';
import './Popular.scss'
import './PopularMobile.scss'
import Swiper1 from './SwiperAll/Swiper1/Swiper1';
import Swiper2 from './SwiperAll/Swiper2/Swiper2';
import Swiper3 from './SwiperAll/Swiper3/Swiper3';
import Swiper4 from './SwiperAll/Swiper4/Swiper4';
import Swiper5 from './SwiperAll/Swiper5/Swiper5';

const Popular = () => {
    const [slide, setSlide] = useState('slide1')

    let PopularContent = () => {
        if (slide === "slide1") {
            return (
                <Swiper1/>
            )
        } else if (slide === "slide2") {
            return (
                <Swiper2/>
            )
        }else if (slide === "slide3") {
            return (
                <Swiper3/>
            )
        }else if (slide === "slide4") {
            return (
                <Swiper4/>
            )
        }else if (slide === "slide5") {
            return (
                <Swiper5/>
            )
        }
        return null;
    }
    
    return (
        <section className='popular'>
            <div className="container">
                <h3 className='popular__name'>Популярные товары</h3>
                <div className="popular__btns">
                    <button onClick={()=>setSlide('slide1')} className={slide === "slide1"?'popular__btn1-1':'popular__btn1'}>Печи-камины</button>
                    <button onClick={()=>setSlide('slide2')} className={slide === "slide2"?'popular__btn2-2':'popular__btn2'}>Печи</button>
                    <button onClick={()=>setSlide('slide3')} className={slide === "slide3"?'popular__btn3-3':'popular__btn3'}>Топки</button>
                    <button onClick={()=>setSlide('slide4')} className={slide === "slide4"?'popular__btn4-4':'popular__btn4'}>Банные печи</button>
                    <button onClick={()=>setSlide('slide5')} className={slide === "slide5"?'popular__btn5-5':'popular__btn5'}>Электрокамины</button>
                </div>

                <div className="popular__swiper__box">
                    {PopularContent()}
                </div>
            </div>
        </section>
    );
};

export default Popular;