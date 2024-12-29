import React from 'react';
import './ContactUpText.scss'
import { Link } from 'react-router-dom';
import aboutToContact from '../../AboutUS/AboutUsIMG/Frame 36.svg'

const ContactUpText = () => {
    return (
        <section className='contact__up__text'>
            <div className="container">
                <div className="contact__up__text__box">
                    
                    <div className="contact__up__text__box__to__contact">
                        <Link to='/'><img className='contact__up__text__box__to__contact__img' src={aboutToContact} alt="" /></Link>
                        <p className='contact__up__text__box__to__contact__text'>Контакты</p>
                    </div>
                    <h1 className='contact__up__text__h1'>Контакты</h1>
                    <p className='contact__up__text__box__text__up'>«Питер Камин» — магазин печей, каминов и дымоходов. Уже более 10 лет предлагаем покупателям продукцию всемирно известных брендов.</p>

                </div>
            </div>
        </section>
    );
};

export default ContactUpText;