import portfolio1 from '../PortfolioIMG/Portfolio1.svg'
import portfolio2 from '../PortfolioIMG/Portfolio2.svg'
import portfolio3 from '../PortfolioIMG/Portfolio3.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './PortfolioSwiper.scss'
import { Pagination } from 'swiper/modules';

const PortfolioSwiper = () => {
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
               <div className="portfolio__swiper1">
                   <img className='portfolio__swiper1__img' src={portfolio1} alt="" />
                   <p className='portfolio__swiper1__text'>Монтаж камина «ABX Norfolk» и облицовки</p>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="portfolio__swiper1">
                   <img className='portfolio__swiper1__img' src={portfolio2} alt="" />
                   <p className='portfolio__swiper1__text'>Монтаж печи-камина «Jotul F 520»</p>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="portfolio__swiper1">
                   <img className='portfolio__swiper1__img' src={portfolio3} alt="" />
                   <p className='portfolio__swiper1__text'>Монтаж печи-камина «Juno 12 / C»</p>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="portfolio__swiper1">
                   <img className='portfolio__swiper1__img' src={portfolio1} alt="" />
                   <p className='portfolio__swiper1__text'>Монтаж камина «ABX Norfolk» и облицовки</p>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="portfolio__swiper1">
                   <img className='portfolio__swiper1__img' src={portfolio2} alt="" />
                   <p className='portfolio__swiper1__text'>Монтаж печи-камина «Jotul F 520»</p>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               <div className="portfolio__swiper1">
                   <img className='portfolio__swiper1__img' src={portfolio3} alt="" />
                   <p className='portfolio__swiper1__text'>Монтаж печи-камина «Juno 12 / C»</p>
               </div>
           </SwiperSlide>
           </Swiper>
        </>
    );
};

export default PortfolioSwiper;


