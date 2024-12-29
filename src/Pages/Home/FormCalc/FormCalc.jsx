import React from 'react';
import './FormCalc.scss'
import './FormCalcMobile.scss'

const FormCalc = () => {
    return (
        <section className='form__calc'>
            <div className="container">
                <div className="form__calc__box">
                    <h3 className='form__calc__box__name'>Расчёт стоимости установки</h3>
                    <p className='form__calc__box__text'>Если всё необходимое оборудование у вас уже есть и вам нужна только установка, то наши специалисты могут приехать на замер и рассчитать стоимость работы.</p>
                    <form className='form__calc__box__form' action="">
                        <input className='form__calc__box__form__in1' type="text" placeholder='Ваше имя'/>
                        <input className='form__calc__box__form__in2' type="number" placeholder='Номер телефона'/>
                        <button className='form__calc__box__form__btn'>Рассчитать стоимость</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormCalc;