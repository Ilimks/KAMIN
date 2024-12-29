import React from 'react';
import './StovesaAndFreplacesTextUp.scss'
import Catalog from '../../AboutUS/AboutUsIMG/Frame 36.svg'
import { Link } from 'react-router-dom';

const StovesaAndFreplacesTextUp = () => {
    return (
        <section className='stovesa__and__freplaces__text__up'>
            <div className="container">

                <div className="stovesa__and__freplaces__text__up__box">

                    <div className="stovesa__and__freplaces__text__up__box__to__home">
                        <Link to='/'><img className='stovesa__and__freplaces__text__up__box__to__home__img' src={Catalog} alt="" /></Link>
                        <p className='stovesa__and__freplaces__text__up__box__to__home__name1'>Каталог</p>
                        <p className='stovesa__and__freplaces__text__up__box__to__home__name2'>Печи-камины</p>
                    </div>

                    <h1 className='stovesa__and__freplaces__text__up__box__h1'>Печи-камины</h1>

                    <p className='stovesa__and__freplaces__text__up__box__bottom'>Печи-камины — это стильное и функциональное решение для обогрева и уюта. Они сочетают эффективность печи и красоту камина. Легки в установке, экономичны и подходят для дома или дачи.</p>

                    <ul className='stovesa__and__freplaces__text__up__box__list'>
                        <li className='stovesa__and__freplaces__text__up__box__list__li'>Подберем подходящий вариант </li>   
                        <li className='stovesa__and__freplaces__text__up__box__list__li'>Бесплатный выезд на замер</li>   
                        <li className='stovesa__and__freplaces__text__up__box__list__li'>Монтаж «под ключ»</li>   
                        <li className='stovesa__and__freplaces__text__up__box__list__li'>Тут перекл. на друг. вариант</li>   
                    </ul>

                    <div className="stovesa__and__freplaces__text__up__box__btns">
                        <button className='stovesa__and__freplaces__text__up__box__btns1'>Дровяные</button>
                        <button className='stovesa__and__freplaces__text__up__box__btns2'>Длительного горения</button>
                        <button className='stovesa__and__freplaces__text__up__box__btns3'>Чугунные</button>
                        <button className='stovesa__and__freplaces__text__up__box__btns4'>Керамические</button>
                        <button className='stovesa__and__freplaces__text__up__box__btns5'>Стальные</button>
                        <button className='stovesa__and__freplaces__text__up__box__btns6'>С плитой</button>
                        <button className='stovesa__and__freplaces__text__up__box__btns7'>С духовкой</button>
                        <button className='stovesa__and__freplaces__text__up__box__btns8'>Угловые</button>
                    </div>
                    
                </div>

            </div>
        </section>
    );
};

export default StovesaAndFreplacesTextUp;