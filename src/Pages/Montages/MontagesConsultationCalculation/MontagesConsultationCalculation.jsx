import React from 'react';
import './MontagesConsultationCalculation.scss'

const MontagesConsultationCalculation = () => {
    return (
        <section className='montages__consultation__calculation'>
            <div className="container">

                <div className="montages__consultation__calculation__box">
                    <div className="montages__consultation__box">
                        <div className="consultation__box1">
                            <h3 className='consultation__box__name'>Консультируем и подбираем оборудование</h3>
                            <p className='consultation__box__text'>Наш специалист по товару задаст вам несколько вопросов и предложит подходящие варианты.</p>
                            <form className='consultation__box__form' action="">
                                <input className='consultation__box__form__in1' type="text" placeholder='Ваше имя'/>
                                <input className='consultation__box__form__in2' type="number" placeholder='Номер телефона'/>
                                <button className='consultation__box__form__btn'>Получить коснультацию</button>
                            </form>
                        </div>
                    </div>

                    <div className="montages__calculation__box">
                        <div className="form__calc__box2">
                            <h3 className='form__calc__box__name'>Расчёт стоимости установки</h3>
                            <p className='form__calc__box__text'>Если всё необходимое оборудование у вас уже есть и вам нужна только установка, то наши специалисты могут приехать на замер и рассчитать стоимость работы.</p>
                            <form className='form__calc__box__form' action="">
                                <input className='form__calc__box__form__in1' type="text" placeholder='Ваше имя'/>
                                <input className='form__calc__box__form__in2' type="number" placeholder='Номер телефона'/>
                                <button className='form__calc__box__form__btn'>Рассчитать стоимость</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MontagesConsultationCalculation;