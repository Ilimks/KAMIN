import React from 'react';
import './Catalog.scss'
import './CatalogMobile.scss'
import catalog1 from './CatalogIMG/catalog1.svg'
import catalog2 from './CatalogIMG/catalog2.svg'
import catalog3 from './CatalogIMG/catalog3.svg'
import catalog4 from './CatalogIMG/catalog4.svg'
import catalog5 from './CatalogIMG/catalog5.svg'
import catalog6 from './CatalogIMG/catalog6.svg'
import catalog7 from './CatalogIMG/catalog7.svg'
import catalog8 from './CatalogIMG/catalog8.svg'
import catalog9 from './CatalogIMG/catalog9.svg'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Catalog = () => {
    return (
        <section className='catalog'>
            <div className="container">
                <h3 className='catalog__name'>Каталог</h3>

                <div className="catalog__box__mobile">
                    <Swiper
                      slidesPerView={'auto'}
                      centeredSlides={false}
                      spaceBetween={24}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className="catalog__box__mobile1">
                            <Link to="StovesaAndFreplaces"><img className='catalog__box__mobile1__img' src={catalog1} alt="" /></Link>
                            <p className='catalog__box__mobile1__text'>Печи-камины</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog__box__mobile2">
                            <Link><img className='catalog__box__mobile2__img' src={catalog2} alt="" /></Link>
                            <p className='catalog__box__mobile2__text'>Печи</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog__box__mobile3">
                            <Link><img className='catalog__box__mobile3__img' src={catalog3} alt="" /></Link>
                            <p className='catalog__box__mobile3__text'>Банные печи</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog__box__mobile4">
                            <Link><img className='catalog__box__mobile4__img' src={catalog4} alt="" /></Link>
                            <p className='catalog__box__mobile4__text'>Камины</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog__box__mobile5">
                            <Link><img className='catalog__box__mobile5__img' src={catalog5} alt="" /></Link>
                            <p className='catalog__box__mobile5__text'>Котлы</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog__box__mobile6">
                            <Link><img className='catalog__box__mobile6__img' src={catalog6} alt="" /></Link>
                            <p className='catalog__box__mobile6__text'>Дымоходы</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog__box__mobile7">
                            <Link><img className='catalog__box__mobile7__img' src={catalog7} alt="" /></Link>
                            <p className='catalog__box__mobile7__text'>Топки</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog__box__mobile8">
                            <Link><img className='catalog__box__mobile8__img' src={catalog8} alt="" /></Link>
                            <p className='catalog__box__mobile8__text'>Барбекю</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog__box__mobile9">
                            <Link><img className='catalog__box__mobile9__img' src={catalog9} alt="" /></Link>
                            <p className='catalog__box__mobile9__text'>Монтаж</p>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>

                <div className="catalog__box__mobile2">
                    <div className="catalog__box__mobile2-1">
                        <Link to="StovesaAndFreplaces"><img className='catalog__box__mobile2-1__img' src={catalog1} alt="" /></Link>
                        <p className='catalog__box__mobile2-1__text'>Печи-камины</p>
                    </div>
                    <div className="catalog__box__mobile2-2">
                        <Link><img className='catalog__box__mobile2-2__img' src={catalog2} alt="" /></Link>
                        <p className='catalog__box__mobile2-2__text'>Печи-камины</p>
                    </div>
                    <div className="catalog__box__mobile2-3">
                        <Link><img className='catalog__box__mobile2-3__img' src={catalog3} alt="" /></Link>
                        <p className='catalog__box__mobile2-3__text'>Печи-камины</p>
                    </div>
                    <div className="catalog__box__mobile2-4">
                        <Link><img className='catalog__box__mobile2-4__img' src={catalog4} alt="" /></Link>
                        <p className='catalog__box__mobile2-4__text'>Печи-камины</p>
                    </div>
                    <div className="catalog__box__mobile2-5">
                        <Link><img className='catalog__box__mobile2-5__img' src={catalog5} alt="" /></Link>
                        <p className='catalog__box__mobile2-5__text'>Печи-камины</p>
                    </div>
                    <div className="catalog__box__mobile2-6">
                        <Link><img className='catalog__box__mobile2-6__img' src={catalog6} alt="" /></Link>
                        <p className='catalog__box__mobile2-6__text'>Печи-камины</p>
                    </div>
                    <div className="catalog__box__mobile2-7">
                        <Link><img className='catalog__box__mobile2-7__img' src={catalog7} alt="" /></Link>
                        <p className='catalog__box__mobile2-7__text'>Печи-камины</p>
                    </div>
                    <div className="catalog__box__mobile2-8">
                        <Link><img className='catalog__box__mobile2-8__img' src={catalog8} alt="" /></Link>
                        <p className='catalog__box__mobile2-8__text'>Печи-камины</p>
                    </div>
                    <div className="catalog__box__mobile2-9">
                        <Link><img className='catalog__box__mobile2-9__img' src={catalog9} alt="" /></Link>
                        <p className='catalog__box__mobile2-9__text'>Печи-камины</p>
                    </div>
                </div>


                <div className="catalog__box">
                    <div className="catalog__box__up">
                        <div className="catalog__box__up__1">
                            <Link to="StovesaAndFreplaces"><img className='catalog__box__up__1__img' src={catalog1} alt="" /></Link>
                            <p className='catalog__box__up__text'>Печи-камины</p>
                        </div>
                        <div className="catalog__box__up__2">
                            <img className='catalog__box__up__2__img' src={catalog2} alt="" />
                            <p className='catalog__box__up__text'>Печи</p>
                        </div>
                        <div className="catalog__box__up__3">
                            <img className='catalog__box__up__3__img' src={catalog3} alt="" />
                            <p className='catalog__box__up__text'>Банные печи</p>
                        </div>
                        <div className="catalog__box__up__4">
                            <img className='catalog__box__up__4__img' src={catalog4} alt="" />
                            <p className='catalog__box__up__text'>Камины</p>
                        </div>
                    </div>
                    <div className="catalog__box__bottom">
                        <div className="catalog__box__bottom__1">
                            <img className='catalog__box__bottom__1__img' src={catalog5} alt="" />
                            <p className='catalog__box__bottom__text'>Котлы</p>
                        </div>
                        <div className="catalog__box__bottom__2">
                            <img className='catalog__box__bottom__2__img' src={catalog6} alt="" />
                            <p className='catalog__box__bottom__text'>Дымоходы</p>
                        </div>
                        <div className="catalog__box__bottom__3">
                            <img className='catalog__box__bottom__3__img' src={catalog7} alt="" />
                            <p className='catalog__box__bottom__text'>Топки</p>
                        </div>
                        <div className="catalog__box__bottom__4">
                            <img className='catalog__box__bottom__4__img' src={catalog8} alt="" />
                            <p className='catalog__box__bottom__text'>Барбекю</p>
                        </div>
                        <div className="catalog__box__bottom__5">
                            <img className='catalog__box__bottom__5__img' src={catalog9} alt="" />
                            <p className='catalog__box__bottom__text'>Монтаж</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;