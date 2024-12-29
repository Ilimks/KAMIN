import React from 'react';
import './Banner.scss'
import './BannerMobile.scss'
import LogoMobile from './BannerIMG/full logo.svg'
import LogoMobilePhone from './BannerIMG/Vector (6).svg'

const Banner = () => {

    const scrollToConsultation = () => {
        window.scrollTo({top: 2400, behavior: "smooth",});
    };

    return (
        <section className='banner'>
            <div className="container">
                <div className="banner__mobile">
                    <div className="banner__mobile__burger"></div>
                    <img src={LogoMobile} alt="" />
                    <img src={LogoMobilePhone} alt="" />
                </div>
                <h1 className='banner__h1'>Печи и камины 🔥 под ключ в Санкт-Петербурге</h1>
                <p className='banner__text'>Поможем подобрать печь или камин в ваш дом и возьмем все заботы по установке на себя</p>
                <button onClick={scrollToConsultation} className='banner__btn'>Получить консультацию</button>
            </div>
        </section>
    );
};

export default Banner;