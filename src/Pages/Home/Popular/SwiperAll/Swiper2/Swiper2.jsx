import React from 'react';
import './Swiper2.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SwiperIMG1 from '../PopularIMG/SwiperIMG1.svg'
import SwiperIMG2 from '../PopularIMG/SwiperIMG2.svg'
import SwiperIMG3 from '../PopularIMG/SwiperIMG3.svg'
import SwiperIMG4 from '../PopularIMG/SwiperIMG4.svg'

const Swiper2 = () => {
    return (
            <>
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
                <div className="popular__swiper1__card1">
                   <img className='popular__swiper1__card1__img' src={SwiperIMG2} alt="" />
                   <p className='popular__swiper1__card1__text'>Печь-камин Бавария панорама пристенная</p>
                   <p className='popular__swiper1__card1__price'>48 990 ₽</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="popular__swiper1__card2">
                   <img className='popular__swiper1__card2__img' src={SwiperIMG1} alt="" />
                   <p className='popular__swiper1__card2__text'>Печь-камин Бавария панорама пристенная</p>
                   <p className='popular__swiper1__card2__price'>48 990 ₽</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="popular__swiper1__card3">
                   <img className='popular__swiper1__card3__img' src={SwiperIMG4} alt="" />
                   <p className='popular__swiper1__card3__text'>Печь-камин Jotul F3 IVE</p>
                   <p className='popular__swiper1__card3__price'>209 000 ₽</p>
                   <span className='popular__swiper1__card3__price__old'>232 440 ₽</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="popular__swiper1__card4">
                   <img className='popular__swiper1__card4__img' src={SwiperIMG3} alt="" />
                   <p className='popular__swiper1__card4__text'>Печь-камин   Jotul F 602 ECO BP</p>
                   <p className='popular__swiper1__card4__price'>101 165 ₽</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="popular__swiper1__card5">
                   <img className='popular__swiper1__card5__img' src={SwiperIMG1} alt="" />
                   <p className='popular__swiper1__card5__text'>Печь-камин Бавария панорама пристенная</p>
                   <p className='popular__swiper1__card5__price'>48 990 ₽</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="popular__swiper1__card6">
                   <img className='popular__swiper1__card6__img' src={SwiperIMG2} alt="" />
                   <p className='popular__swiper1__card6__text'>Печь-камин Бавария панорама пристенная</p>
                   <p className='popular__swiper1__card6__price'>48 990 ₽</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="popular__swiper1__card7">
                   <img className='popular__swiper1__card7__img' src={SwiperIMG3} alt="" />
                   <p className='popular__swiper1__card7__text'>Печь-камин Jotul F3 IVE</p>
                   <p className='popular__swiper1__card7__price'>209 000 ₽</p>
                   <span className='popular__swiper1__card7__price__old'>232 440 ₽</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="popular__swiper1__card8">
                   <img className='popular__swiper1__card8__img' src={SwiperIMG4} alt="" />
                   <p className='popular__swiper1__card8__text'>Печь-камин   Jotul F 602 ECO BP</p>
                   <p className='popular__swiper1__card8__price'>101 165 ₽</p>
                </div>
              </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Swiper2;