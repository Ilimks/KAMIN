import React from 'react';
import './AboutUsSection2.scss'

const AboutUsSection2 = () => {
    return (
        <section className='about__us__section2'>
            <div className="container">

                <div className="about__us__section2__box">

                    <h3 className='about__us__section2__name'>Продаём:</h3>

                    <ul className='about__us__section2__list'>
                        <li className='about__us__section2__list__li'>Печи для бани и сауны</li>
                        <li className='about__us__section2__list__li'>Отопительные печи для жилых и нежилых помещений</li>
                        <li className='about__us__section2__list__li'>Отопительно-варочные печи для дома</li>
                        <li className='about__us__section2__list__li'>Печи-камины для дачи</li>
                        <li className='about__us__section2__list__li'>Дровяные камины, каминные топки и облицовки</li>
                        <li className='about__us__section2__list__li'>Электрокамины и биокамины</li>
                        <li className='about__us__section2__list__li'>Твердотопливные и электрические котлы отопления</li>
                        <li className='about__us__section2__list__li'>Грили, мангалы, барбекю</li>
                        <li className='about__us__section2__list__li'>Чугунное печное литьё</li>
                        <li className='about__us__section2__list__li'>Широкий спектр сопутствующих товаров и аксессуаров для различных отопительных приборов.</li>
                    </ul>

                </div>

            </div>
        </section>
    );
};

export default AboutUsSection2;