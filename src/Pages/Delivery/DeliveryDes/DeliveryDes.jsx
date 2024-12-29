import React from 'react';
import './DeliveryDes.scss'

const DeliveryDes = () => {
    return (
        <section className='DeliveryDes'>
            <div className="container">

                <h3 className='DeliveryDes__name'>Доставка</h3>

                <div className="DeliveryDes__box">

                    <div className="DeliveryDes__box__left">

                        <div className="DeliveryDes__box__left1">
                            <h4 className='DeliveryDes__box__left1__name'>Доставка по Санкт-Петербургу</h4>
                            <p className='DeliveryDes__box__left1_des'>Крайними точками КАД считать развязку КАД с Таллинским шоссе (на юге), развязку КАД с Выборгским шоссе (на севере)</p>
                            <h5 className='DeliveryDes__box__left1__prise'>Стоимость доставки - 1000 ₽</h5>
                        </div>

                        <div className="DeliveryDes__box__left2">
                            <h4 className='DeliveryDes__box__left2__name'>Доставка по Ленинградской области</h4>
                            <p className='DeliveryDes__box__left2_des1'>Бесплатно 50 км от КАД - при заказе на сумму {'>'} 50 000 руб.  с комплектом дымохода не менее 5 м </p>
                            <p className='DeliveryDes__box__left2_des2'>Свыше 50 км ― 1000 руб. + 35 руб./км Если к Вашему дому 55 км, то стоимость доставки будет 35*5+1000 = 1175 руб.). В остальных случаях доставка товара рассчитывается по формуле: 35 руб. за 1 км. от КАД + 1000 руб.</p>
                            <p className='DeliveryDes__box__left2_des3'>Крайними точками КАД считать развязку КАД с Таллинским шоссе (на юге), развязку КАД с Выборгским шоссе (на севере).</p>
                            <p className='DeliveryDes__box__left2_des4'>Осуществляется доставка с ПН по СБ с 10:00 до 22:00</p>
                            <h5 className='DeliveryDes__box__left2__prise'>Бесплатно или 1000 ₽ + 35 ₽/км</h5>
                        </div>

                        <div className="DeliveryDes__box__left3">
                            <h4 className='DeliveryDes__box__left3__name'>Доставка в регионы России</h4>
                            <p className='DeliveryDes__box__left3__des'>Доставка товара по Санкт-Петербургу до терминала транспортной компании стоит 1000 руб. Услуги транспортной компании оплачиваются отдельно. Стоимость перевозки груза из СПб в Ваш населённый пункт Вы можете самостоятельно уточнить в филиале выбранной транспортной компании.</p>
                            <h5 className='DeliveryDes__box__left3__prise'>1000 ₽ до терминала транспортной компании</h5>
                        </div>

                    </div>

                    <div className="DeliveryDes__box__right">

                        <div className="DeliveryDes__box__right1">
                            <h4 className='DeliveryDes__box__right1__name'>Разгрузка товара в стоимость не входит</h4>
                            <p className='DeliveryDes__box__right1__des1'>Если требуется разгрузка, то она рассчитывается индивидуально — с менеджером — при оформлении заказа! В противном случае — в​​​ыгрузка товара из машины осуществляется исключительно силами покупателя!</p>
                            <p className='DeliveryDes__box__right1__des2'>Если требуется помощь водителя в разгрузке, то это оговаривается заранее и рассчитывается отдельно, т.к. помощь водителя в разгрузке в стоимость доставки не входит!</p>
                            <p className='DeliveryDes__box__right1__des3'>Разгрузка подразумевает собой снятие товара с машины и занос его на первый этаж до места установки отопительного прибора. Разгрузка производится, если на объекте созданы нормальные условия для её осуществления.</p>
                        </div>

                        <div className="DeliveryDes__box__right2">
                            <h4 className='DeliveryDes__box__right2__name'>Самовывоз из магазина</h4>
                            <div className="DeliveryDes__box__right2__time1">
                                <h5 className='DeliveryDes__box__right2__time1__name'>Санкт-Петербург, ул. Ленсовета 43</h5>
                                <p className='DeliveryDes__box__right2__time1__week'>Пн-Пт — с 10:00 до 19:00 СБ — с 11:00 до 18:00 Вс — Выходной</p>
                            </div>
                            <div className="DeliveryDes__box__right2__time2">
                                <h5 className='DeliveryDes__box__right2__time2__name'>Санкт-Петербург, Глухоозерское шоссе, 12 И</h5>
                                <p className='DeliveryDes__box__right2__time2__week'>Пн-Чт с 10:00 до 19:00 Пт с 10:00 до 16:00 СБ-Вс — Выходной</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default DeliveryDes;