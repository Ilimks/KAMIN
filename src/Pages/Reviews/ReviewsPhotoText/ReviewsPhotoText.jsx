import React from 'react';
import './ReviewsPhotoText.scss'
import review1 from '../ReviewsIMG/reviews1.svg'
// import review2 from '../ReviewsIMG/reviews2.svg'
import review3 from '../ReviewsIMG/reviews3.svg'

const ReviewsPhotoText = () => {
    return (
        <section className='ReviewsPhotoText'>
            <div className="container">

                <div className="ReviewsPhotoText__box">

                    <div className="ReviewsPhotoText__box1">
                        <img className='ReviewsPhotoText__box1__img' src={review1} alt="" />
                        <div className="ReviewsPhotoText__box1__review">
                            <p className='ReviewsPhotoText__box1__review__text'>Отличная печь! Реально — качество и внешний вид на высоте. Рекомендую всем, кто может себе позволить, брать именно этот вариант!</p>
                            <h5 className='ReviewsPhotoText__box1__review__name'>Пауль</h5>
                            <p className='ReviewsPhotoText__box1__review__look'>Смотреть работу</p>
                        </div>
                    </div>

                    <div className="ReviewsPhotoText__box2">
                        <img className='ReviewsPhotoText__box2__img' src={review1} alt="" />
                        <div className="ReviewsPhotoText__box2__review">
                            <p className='ReviewsPhotoText__box2__review__text'>Точность, пунктуальность, ранний привоз, интелегентность, всё в сборе. Удачи в бизнесе.</p>
                            <h5 className='ReviewsPhotoText__box2__review__name'>Юркова Анна</h5>
                            <p className='ReviewsPhotoText__box2__review__look'>Смотреть работу</p>
                        </div>
                    </div>

                    <div className="ReviewsPhotoText__box3">
                        <img className='ReviewsPhotoText__box3__img' src={review3} alt="" />
                        <div className="ReviewsPhotoText__box3__review">
                            <p className='ReviewsPhotoText__box3__review__text'>Всё отлично! доставка быстрая. Коллектив компании очень внимательный и дружелюбный. Буду советовать друзьям! Обращаемся уже за второй печью и очень довольна!</p>
                            <h5 className='ReviewsPhotoText__box3__review__name'>Олег</h5>
                            <p className='ReviewsPhotoText__box3__review__look'>Смотреть работу</p>
                        </div>
                    </div>

                </div>

                <div className="ReviewsPhotoText__box__btn">
                    <button className='look__btn'>Показать ещё</button>
                </div>

            </div>
        </section>
    );
};

export default ReviewsPhotoText;