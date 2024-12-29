import React from 'react';
import './DeliveryGuarantees.scss'

const DeliveryGuarantees = () => {
    return (
        <section className='DeliveryGuarantees'>
            <div className="container">

                <h3 className='DeliveryGuarantees__name'>Гарантии</h3>

                <div className="DeliveryGuarantees__box">

                    <div className="DeliveryGuarantees__box__left">
                        <div className="DeliveryGuarantees__box__left1">
                            <h4 className='DeliveryGuarantees__box__left1__name'>Гарантия на товар — 5 лет</h4>
                            <p className='DeliveryGuarantees__box__left1__text'>Доставка товара по Санкт-Петербургу до терминала транспортной компании стоит 1000 руб. Услуги транспортной компании оплачиваются отдельно. Стоимость перевозки груза из СПб в Ваш населённый пункт Вы можете самостоятельно уточнить в филиале выбранной транспортной компании.</p>
                        </div>
                        <div className="DeliveryGuarantees__box__left2">
                            <h4 className='DeliveryGuarantees__box__left2__name'>Способы оплаты</h4>
                            <ul className='DeliveryGuarantees__box__left2__list'>
                                <li className='DeliveryGuarantees__box__left2__list__li'>Наличными</li>
                                <li className='DeliveryGuarantees__box__left2__list__li'>Безналичными</li>
                            </ul>
                        </div>
                    </div>

                    <div className="DeliveryGuarantees__box__right">
                        <div className="DeliveryGuarantees__box__right1">
                            <h4 className='DeliveryGuarantees__box__right1__name'>Гарантия на монтаж — 5 лет</h4>
                            <p className='DeliveryGuarantees__box__right1__text'>Если требуется помощь водителя в разгрузке, то это оговаривается заранее и рассчитывается отдельно, т.к. помощь водителя в разгрузке в стоимость доставки не входит!</p>
                        </div>
                        <div className="DeliveryGuarantees__box__right2">
                            <h4 className='DeliveryGuarantees__box__right2__name'>Возврат</h4>
                            <p className='DeliveryGuarantees__box__right2__text'>В течении 14 дней.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default DeliveryGuarantees;