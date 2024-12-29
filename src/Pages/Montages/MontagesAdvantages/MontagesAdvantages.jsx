import React from 'react';
import './MontagesAdvantages.scss'
import advantagesIMG1 from '../MontagesIMG/cogwheel 1.svg'
import advantagesIMG2 from '../MontagesIMG/guarantee 1.svg'
import advantagesIMG3 from '../MontagesIMG/checklist 1.svg'
import advantagesIMG4 from '../MontagesIMG/003-best-seller.svg'

const MontagesAdvantages = () => {
    return (
        <section className='montages__advantages'>
            <div className="container">

                <div className="montages__advantages__box">
                    <div className="montages__advantages__box1">
                        <img className='montages__advantages__box1__img' src={advantagesIMG1} alt="" />
                        <p className='montages__advantages__box1__text'>Сервисное обслуживание</p>
                    </div>
                    <div className="montages__advantages__box2">
                        <img className='montages__advantages__box2__img' src={advantagesIMG2} alt="" />
                        <p className='montages__advantages__box2__text'>Гарантия — 3 года</p>
                    </div>
                    <div className="montages__advantages__box3">
                        <img className='montages__advantages__box3__img' src={advantagesIMG3} alt="" />
                        <p className='montages__advantages__box3__text'>159+ выполненных заказов</p>
                    </div>
                    <div className="montages__advantages__box4">
                        <img className='montages__advantages__box3__img' src={advantagesIMG4} alt="" />
                        <p className='montages__advantages__box4__text'>Опыт работы — 20 лет</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MontagesAdvantages;