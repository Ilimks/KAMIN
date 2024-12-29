import React from 'react';
import './Installation.scss'
import './InstallationMobile.scss'
import installation1 from './InstallationIMG/installation1.svg'
import installation2 from './InstallationIMG/installation2.svg'
import installation3 from './InstallationIMG/installation3.svg'
import installation4 from './InstallationIMG/installation4.svg'
import installation5 from './InstallationIMG/installation5.svg'
import installation6 from './InstallationIMG/installation6.svg'

const Installation = () => {
    return (
        <section className='installation'>
            <div className="container">
                <h3 className='installation__name'>Монтаж</h3>
                <p className='installation__text'>Даём гарантию на выполненные работы — 5 лет и предоставляем сервисное обслуживание.</p>
                <div className="installation__box">

                    <div className="installation__box__card1">
                        <img className='installation__box__card1__img' src={installation1} alt="" />
                        <h6 className='installation__box__card1__des'>Установка печи в доме</h6>
                        <p className='installation__box__card1__price'>от 20 000 руб.</p>
                    </div>

                    <div className="installation__box__card2">
                        <img className='installation__box__card2__img' src={installation2} alt="" />
                        <h6 className='installation__box__card2__des'>Установка камина</h6>
                        <p className='installation__box__card2__price'>от 20 000 руб.</p>
                    </div>

                    <div className="installation__box__card3">
                        <img className='installation__box__card3__img' src={installation3} alt="" />
                        <h6 className='installation__box__card3__des'>Установка печи в бане</h6>
                        <p className='installation__box__card3__price'>от 20 000 руб.</p>
                    </div>

                    <div className="installation__box__card4">
                        <img className='installation__box__card4__img' src={installation4} alt="" />
                        <h6 className='installation__box__card4__des'>Установка котла</h6>
                        <p className='installation__box__card4__price'>от 20 000 руб.</p>
                    </div>

                    <div className="installation__box__card5">
                        <img className='installation__box__card5__img' src={installation5} alt="" />
                        <h6 className='installation__box__card5__des'>Установка дымохода</h6>
                        <p className='installation__box__card5__price'>от 20 000 руб.</p>
                    </div>

                    <div className="installation__box__card6">
                        <img className='installation__box__card6__img' src={installation6} alt="" />
                        <h6 className='installation__box__card6__des'>Изготовление дымохода</h6>
                        <p className='installation__box__card6__price'>от 20 000 руб.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Installation;