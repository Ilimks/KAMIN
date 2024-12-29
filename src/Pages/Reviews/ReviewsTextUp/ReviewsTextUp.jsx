import React from 'react';
import './ReviewsTextUp.scss'
import ReviewsToHome from '../../AboutUS/AboutUsIMG/Frame 36.svg'
import { Link } from 'react-router-dom';

const ReviewsTextUp = () => {
    return (
        <section className='ReviewsTextUp'>
            <div className="container">
                <div className="ReviewsTextUp__box">

                    <div className="ReviewsTextUp__box__to__home">
                        <Link to='/'><img className='ReviewsTextUp__box__to__home__img' src={ReviewsToHome} alt="" /></Link>
                        <p className='ReviewsTextUp__box__to__home__name'>Отзывы</p>
                    </div>

                    <h1 className='ReviewsTextUp__box__h1'>Отзывы</h1>

                    <p className='ReviewsTextUp__box__text__bottom'>Камины всегда остаются популярным элементом интерьера, создающим уют и тепло в доме. Пользователи отмечают их практичность, эстетичный внешний вид и способность стать центром любой комнаты. Современные камины, будь то дровяные, электрические или биокамины, получают положительные отзывы благодаря простоте установки и эксплуатации. Особенно ценится их эффективность в холодное время года. Многие покупатели также подчеркивают экономичность и экологичность современных моделей.</p>

                </div>
            </div>
        </section>
    );
};

export default ReviewsTextUp;