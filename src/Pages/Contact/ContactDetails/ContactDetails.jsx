import React from 'react';
import './ContactDetails.scss'
import { Link } from 'react-router-dom';

const ContactDetails = () => {
    return (
        <section className='contact__details'>
            <div className="container">

                <div className="contact__details__box">
                    <div className="contact__details__box1">
                        <h5 className='contact__details__box1__name'>Телефон</h5>
                        <p className='contact__details__box1__text'>+7 (812) 924-66-61</p>
                    </div>
                    <div className="contact__details__box2">
                        <h5 className='contact__details__box2__name'>Эл. адрес</h5>
                        <p className='contact__details__box2__text'><Link>info@piter-kamin.ru</Link></p>
                    </div>
                    <div className="contact__details__box3">
                        <h5 className='contact__details__box3__name'>Режим работы</h5>
                        <p className='contact__details__box3__text'>Пн-Пт: 10:00—19:00 Сб-Вс: Выходной</p>
                    </div>
                    <div className="contact__details__box4">
                        <h5 className='contact__details__box4__name'>Адрес</h5>
                        <p className='contact__details__box4__text'>г. Санкт-Петербург, ул. Ленсовета, 43</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactDetails;