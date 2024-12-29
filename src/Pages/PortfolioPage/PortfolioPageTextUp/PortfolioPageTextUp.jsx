import React from 'react';
import './PortfolioPageTextUp.scss'
import { Link } from 'react-router-dom';
import PortfolioToHome from '../../AboutUS/AboutUsIMG/Frame 36.svg'

const PortfolioPageTextUp = () => {
    return (
        <section className='portfolio__page__text__up'>
            <div className="container">
                <div className="portfolio__page__text__up__to__portfolio">
                    <Link to='/'><img className='portfolio__page__text__up__to__portfolio__img' src={PortfolioToHome} alt="" /></Link>
                    <p className='portfolio__page__text__up__to__portfolio__name'>Портфолио</p>
                </div>
                <h1 className='portfolio__page__text__up__h1'>Портфолио</h1>
                <p className='portfolio__page__text__up__text__bottom'>Портфолио для печей и каминов – это визитная карточка мастера, демонстрирующая качество работы и творческий подход. Оно включает фотографии выполненных проектов, от классических печей до современных дизайнерских каминов, а также описания используемых материалов и технологий. Важно показать разнообразие стилей: от рустика до минимализма. Портфолио помогает клиенту выбрать подходящий вариант и убедиться в профессионализме мастера. Упор на детали и эстетика – залог успеха.</p>
            </div>
        </section>
    );
};

export default PortfolioPageTextUp;