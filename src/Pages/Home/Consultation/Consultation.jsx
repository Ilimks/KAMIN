import React from 'react';
import './Consultation.scss'
import './ConsultationMobile.scss'

const Consultation = () => {
    return (
        <section className='consultation'>
            <div className="container">
                <div className="consultation__box">
                    <h3 className='consultation__box__name'>Консультируем и подбираем оборудование</h3>
                    <p className='consultation__box__text'>Наш специалист по товару задаст вам несколько вопросов и предложит подходящие варианты.</p>
                    <form className='consultation__box__form' action="">
                        <input className='consultation__box__form__in1' type="text" placeholder='Ваше имя'/>
                        <input className='consultation__box__form__in2' type="number" placeholder='Номер телефона'/>
                        <button className='consultation__box__form__btn'>Получить коснультацию</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Consultation;