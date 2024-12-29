import React from 'react';
import './AboutUsSection1.scss'
import aboutToHome from '../AboutUsIMG/Frame 36.svg'
import { Link } from 'react-router-dom';

const AboutUsSection1 = () => {
    return (
        <section className='about__us__section1'>
            <div className="container">

                <div className="about__us__section1__box">

                    <div className="about__us__section1__from__home__to__about__us">
                        <Link to='/'><img className='about__us__section1__from__home__to__about__us__img' src={aboutToHome} alt="" /></Link>
                        <p className='about__us__section1__from__home__to__about__us__name'>О нас</p>
                    </div>

                    <h1 className='about__us__section1__h1'>О нас</h1>
    
                    <h3 className='about__us__section1__name'>Интернет-магазин «ПитерКамин»:</h3>
    
                    <ul className='about__us__section1__list'>
                        <li className='about__us__section1__list__li'>Самый широкий ассортимент печей и каминов в Санкт-Петербурге</li>
                        <li className='about__us__section1__list__li'>Полное соответствие цен на сайте</li>
                        <li className='about__us__section1__list__li'>Самые полные характеристики товаров</li>
                        <li className='about__us__section1__list__li'>Опытные продавцы – грамотная техническая консультация и помощь в выборе</li>
                        <li className='about__us__section1__list__li'>Быстрая и удобная доставка – до 3х дней</li>
                        <li className='about__us__section1__list__li'>Возможность самовывоза из нескольких магазинов</li>
                        <li className='about__us__section1__list__li'>Собственное производство дымоходов из нержавеющей стали</li>
                        <li className='about__us__section1__list__li'>Своя монтажная бригада</li>
                        <li className='about__us__section1__list__li'>Только позитивные отзывы о нашем магазине</li>
                        <li className='about__us__section1__list__li'>Действительно выгодные цены</li>
                    </ul>
    
                    <p className='about__us__section1__text1'>Если покупать в комплексе отопительный прибор + дымоход, то цены будут самыми низкими и выгодными для нашего покупателя – это связано с собственным производством дымоходов.</p>
    
                    <p className='about__us__section1__text2'>На подавляющее большинство ассортимента мы имеем одни из самых низких цен в Санкт-Петербурге.</p>

                </div>
            </div>
        </section>
    );
};

export default AboutUsSection1;