import React from 'react';
import './ContactAdress.scss'
import contactAdressIMG from './ContactAdressIMG/placement_sm.webp'

const ContactAdress = () => {
    return (
        <section className='contact__adress'>
            <div className="container">
                <div className="contact__adress__box">
                    <div className="contact__adress__box1">
                        <img className='contact__adress__box1__img' src={contactAdressIMG} alt="" />
                        <div className="contact__adress__box1__adress__list">
                            <h3 className='contact__adress__box1__adress__list__name'>Офис продаж</h3>
                            <p className='contact__adress__box1__adress__list__text1'>г. Санкт-Петербург, ул. Ленсовета, 43</p>
                            <p className='contact__adress__box1__adress__list__text2'>Пн-Пт: 10:00—19:00 Сб-Вс: Выходной</p>
                        </div>
                    </div>
                    <div className="contact__adress__box2">
                        <h3 className='contact__adress__box2__name'>Контактная информация</h3>
                        <p className='contact__adress__box2__number'>+7 (812) 924-66-61</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactAdress;