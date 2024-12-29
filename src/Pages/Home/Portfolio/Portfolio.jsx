import React from 'react';
import './Portfolio.scss'
import './PortfolioMobile.scss'
import PortfolioSwiper from './PortfolioSwiper/PortfolioSwiper';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <div className="container">
                <h3 className='portfolio__name'>Портфолио</h3>
                <PortfolioSwiper/>
                <Link to='portfolio'><button className='portfolio__btn'>Все работы</button></Link>
            </div>
        </section>
    );
};

export default Portfolio;