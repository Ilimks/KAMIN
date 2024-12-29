import React from 'react';
import './PortfolioPageMontages.scss'
import PortfolioMontagesIMG1 from '../PortfolioPageIMG/PortfolioMontagesIMG1.svg'
import PortfolioMontagesIMG2 from '../PortfolioPageIMG/PortfolioMontagesIMG2.svg'
import PortfolioMontagesIMG3 from '../PortfolioPageIMG/PortfolioMontagesIMG3.svg'
import PortfolioMontagesIMG4 from '../PortfolioPageIMG/PortfolioMontagesIMG4.svg'
import PortfolioMontagesIMG5 from '../PortfolioPageIMG/PortfolioMontagesIMG5.svg'
import PortfolioMontagesIMG6 from '../PortfolioPageIMG/PortfolioMontagesIMG6.svg'
import PortfolioMontagesIMG7 from '../PortfolioPageIMG/PortfolioMontagesIMG7.svg'
import PortfolioMontagesIMG8 from '../PortfolioPageIMG/PortfolioMontagesIMG8.svg'

const PortfolioPageMontages = () => {
    return (
        <section className='portfolio__page__montages'>
            <div className="container">
                <h3 className='portfolio__page__montages__name'>Другие монтажи</h3>
                <div className="portfolio__page__montages__box">
                    <img className='portfolio__page__montages__box__img' src={PortfolioMontagesIMG1} alt="" />
                    <img className='portfolio__page__montages__box__img' src={PortfolioMontagesIMG2} alt="" />
                    <img className='portfolio__page__montages__box__img' src={PortfolioMontagesIMG3} alt="" />
                    <img className='portfolio__page__montages__box__img' src={PortfolioMontagesIMG4} alt="" />
                    <img className='portfolio__page__montages__box__img' src={PortfolioMontagesIMG5} alt="" />
                    <img className='portfolio__page__montages__box__img' src={PortfolioMontagesIMG6} alt="" />
                    <img className='portfolio__page__montages__box__img' src={PortfolioMontagesIMG7} alt="" />
                    <img className='portfolio__page__montages__box__img' src={PortfolioMontagesIMG8} alt="" />
                </div>
                <div className="portfolio__page__montages__btn__box">
                    <button className='portfolio__page__montages__btn'>Показать ещё</button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioPageMontages;