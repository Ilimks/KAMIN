import React from 'react';
import './MontagesTextUp.scss'
import { Link } from 'react-router-dom';
import MontagesToHome from '../../AboutUS/AboutUsIMG/Frame 36.svg'

const MontagesTextUp = () => {
    return (
        <section className='montages__text__up'>
            <div className="container">

                <div className="montages__text__up__box">
                    <div className="montages__text__up__box__to__montages">
                        <Link to='/'><img className='montages__text__up__box__to__montages__img' src={MontagesToHome} alt="" /></Link>
                        <p className='montages__text__up__box__to__montages__name'>Монтажи</p>
                    </div>
                    <h1 className='montages__text__up__box__h1'>Монтаж печей, каминов, дымоходов и котлов</h1>
                    <p className='montages__text__up__box__text__bottom'>В нашем магазине печей и каминов вы найдете не только изысканные модели, но и профессиональные монтажные решения, которые подчеркнут уют и стиль вашего дома. Мы заботимся о каждом этапе установки, создавая безопасные и эстетичные конструкции, идеально вписывающиеся в ваш интерьер. Качество, надежность и внимание к деталям – наша визитная карточка. Доверьте создание тепла и уюта специалистам, для которых ваша комфортная атмосфера – главный приоритет.</p>
                    
                </div>

            </div>
        </section>
    );
};

export default MontagesTextUp;