import React from 'react';
import './PortfolioPageCartList.scss'
import PortfolioIMG1 from '../PortfolioPageIMG/PortfolioIMG1.svg'
import PortfolioIMG2 from '../PortfolioPageIMG/PortfolioIMG2.svg'
import PortfolioIMG3 from '../PortfolioPageIMG/PortfolioIMG3.svg'
import PortfolioIMG4 from '../PortfolioPageIMG/PortfolioIMG4.svg'
import PortfolioIMG5 from '../PortfolioPageIMG/PortfolioIMG5.svg'
import PortfolioIMG6 from '../PortfolioPageIMG/PortfolioIMG6.svg'

const PortfolioPageCartList = () => {
    return (
        <section className='portfolio__page__cart__list'>
            <div className="container">

                <div className="portfolio__page__cart__list__box">

                    <div className="portfolio__page__cart__list__box1">
                        <img className='portfolio__page__cart__list__box1__img' src={PortfolioIMG1} alt="" />
                        <p className='portfolio__page__cart__list__box1__text'>Монтаж камина «ABX Norfolk» и облицовки </p>
                    </div>

                    <div className="portfolio__page__cart__list__box2">
                        <img className='portfolio__page__cart__list__box2__img' src={PortfolioIMG2} alt="" />
                        <p className='portfolio__page__cart__list__box2__text'>Монтаж печи-камина «Juno 12 / C»</p>
                    </div>

                    <div className="portfolio__page__cart__list__box3">
                        <img className='portfolio__page__cart__list__box3__img' src={PortfolioIMG3} alt="" />
                        <p className='portfolio__page__cart__list__box3__text'>Монтаж печи-камина «Jotul F 520»</p>
                    </div>

                    <div className="portfolio__page__cart__list__box4">
                        <img className='portfolio__page__cart__list__box4__img' src={PortfolioIMG4} alt="" />
                        <p className='portfolio__page__cart__list__box4__text'>Монтаж печи для бани</p>
                    </div>

                    <div className="portfolio__page__cart__list__box5">
                        <img className='portfolio__page__cart__list__box5__img' src={PortfolioIMG5} alt="" />
                        <p className='portfolio__page__cart__list__box5__text'>Красивый монтаж печи</p>
                    </div>

                    <div className="portfolio__page__cart__list__box6">
                        <img className='portfolio__page__cart__list__box6__img' src={PortfolioIMG6} alt="" />
                        <p className='portfolio__page__cart__list__box6__text'>Монтаж красной печи</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PortfolioPageCartList;