import React, { useEffect, useState } from 'react';
import './BasketTextUp.scss'
import { Link } from 'react-router-dom';
import BasketToHome from '../../AboutUS/AboutUsIMG/Frame 36.svg'
import { useDispatch, useSelector } from 'react-redux';
import { minusCount, plusCount, basketDel, remove } from '../../../Store/BasketSlice/BasketSlice';
import PortfolioSwiper from '../../Home/Portfolio/PortfolioSwiper/PortfolioSwiper';
import minus from '../BasketIMG/Minus.svg'
import plus from '../BasketIMG/Plus.svg'
import del from '../BasketIMG/Del.svg'
import { SpeedDialAction } from '@mui/material';

const BasketTextUp = () => {

    const [design, setDesign] = useState(false)
    const [order, setOrder] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [textInput, setTextInput] = useState(""); 
    const [selectedRadio, setSelectedRadio] = useState(""); 
    const [errors, setErrors] = useState({}); 
    const [orderSuccess, setOrderSuccess] = useState(false); 
    const [orderDetails, setOrderDetails] = useState(null); 

    const ScrollUp = () => {
            window.scrollTo(0, 0);
    }

   

    const validate = () => {
        const newErrors = {};
        if (!textInput.trim()) {
          newErrors.textInput = "Заполните поля";
        }
        if (!selectedRadio) {
          newErrors.selectedRadio = "Выберите один из вариантов";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validate()) {
            setOrderSuccess(true);
            setOrderDetails({ textInput, selectedRadio });
            setTextInput(""); 
            setSelectedRadio("");
            setErrors({});
          } else {
            setOrderSuccess(false);
        }

        ScrollUp()
    };
    

    const dispatch = useDispatch()
    const basket = useSelector((state) => state.basketSlice.basket );

    const PopupCloseOpen = () => {
        setOrder((e)=>!e);
    }

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    

    
    return (
        <section className='basket'>
            <div className="container">
                <div className="basket__box">
                    
                    <div className="basket__box__home">
                        <Link to='/'><img className='basket__box__home__img' src={BasketToHome} alt="" /></Link>
                        <p className='basket__box__home__name'>Корзина</p>
                    </div>

                    {orderSuccess === false ? (
                    <>
                    {basket.length > 0 ? (
                        <>
                        <h2 className='basket__box__text1'>Корзина покупок</h2>
                            {basket.map((el) => (
                            <>
                                <div className="basket__box__carts">
        
                                    <img className='basket__box__carts__img' src={el.image} alt="" />
        
                                    <div className="basket__box__carts__description">
                                        <h4 className='basket__box__carts__description__title'>{el.title}</h4>
                                        <p className='basket__box__carts__description__code'>Код товара: {el.code}</p>
                                        <h3 className='basket__box__carts__description__price'>{el.price} ₽</h3>
                                    </div>
        
                                    <div className="basket__box__carts__quantity">
    
                                        <div className="basket__box__carts__quantity__minus">
                                            <img onClick={()=>dispatch(minusCount(el))} className='basket__box__carts__quantity__minus__img' src={minus} alt="" />
                                        </div>
    
                                        <div className="basket__box__carts__quantity__count">
                                            <p className='basket__box__carts__quantity__count__number'>{el.count}</p>
                                        </div>
    
                                        <div  className="basket__box__carts__quantity__pluse">
                                            <img onClick={()=>dispatch(plusCount(el))} className='basket__box__carts__quantity__pluse__img' src={plus} alt="" />
                                        </div>
                                        
                                    </div>
        
                                    <div className="basket__box__carts__del">
                                        <img onClick={()=>dispatch(remove(el.id))} className='basket__box__carts__del__img' src={del} alt="" />
                                    </div>
        
                                </div>
    
                            </>

                            ))}

                            {design === false ? (
                                <>
                                    <div className="basket__box__allPrices">
                                      <p className='basket__box__allPrices__text'>
                                          Общая сумма: <span>{basket.reduce((acc,el)=>{
                                             return acc + el.count * el.price
                                          },0)} ₽</span>
                                      </p>
                                    </div>
                                    
                                    <div className="basket__box__btns">
                                        <Link to='/'><button className='basket__box__btns1'>Продолжить покупки</button></Link>
                                        <button onClick={PopupCloseOpen} className='basket__box__btns2'>заказ в 1 клик</button>
                                        {order && (
                                            <div className="basket__box__btns2__order">
                                                <div onClick={PopupCloseOpen} className="basket__box__btns2__order__close"></div>
                                                <div className="basket__box__btns2__order__content">

                                                    <h3 className='basket__box__btns2__order__content__name'>Заказ в 1 клик</h3>
                                                    <p className='basket__box__btns2__order__content__text'>Наш специалист перезвонит вам и оформит заказ.</p>
                                                    <form className='basket__box__btns2__order__content__form' action="">
                                                        <label className='basket__box__btns2__order__content__form__label' htmlFor="">
                                                            <input className='basket__box__btns2__order__content__form__in' type="text" placeholder='Ваше имя'/>
                                                        </label>
                                                        <label className='basket__box__btns2__order__content__form__label' htmlFor="">
                                                            <input className='basket__box__btns2__order__content__form__in' type="number" placeholder='Номер телефона'/>
                                                        </label>
                                                        <button className='basket__box__btns2__order__content__btn'>заказ в 1 клик</button>
                                                    </form>
                                                    

                                                </div>
                                            </div>
                                        )}
                                        <button onClick={()=>setDesign(true)} className='basket__box__btns3'>Оформить заказ</button>
                                    </div>
        
                                    <div className="basket__box__portfolio">
                                        <h3 className='portfolio__name'>Портфолио</h3>
                                        <PortfolioSwiper/>
                                    </div>
        
                                    <div className="basket__box__consultation">
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
                                </>

                            ) : (
                                <>
                                   <div className="basket__box__address">
                                    
                                        <form onSubmit={handleSubmit} className='basket__box__address__inputs' action="">

                                            <label htmlFor="">
                                                <h4 className='basket__box__address__input__name'>Контактные данные</h4>
                                               <input value={textInput} onChange={(e) => setTextInput(e.target.value)} className='basket__box__address__inputs1' type="text" name="" id="" placeholder='Имя'/>
                                               <input className='basket__box__address__inputs1' type="number" name="" id="" placeholder='Телефон'/>
                                            </label>

                                            <label htmlFor="">
                                               <h4 className='basket__box__address__input__name'>Адрес</h4>
                                               <input className='basket__box__address__inputs1' type="text" name="" id="" placeholder='Город'/>
                                               <input className='basket__box__address__inputs1' type="text" name="" id="" placeholder='Адрес доставки'/>
                                            </label>
                                            {errors.textInput && <p className='inputs__error' style={{ color: "red" }}>{errors.textInput}</p>}

                                        </form>
    
                                        <form className='basket__box__address__area' action="">
                                            <textarea className='basket__box__address__area1' name="" id="" placeholder='Коментарий'></textarea>
                                        </form>

                                   </div>

                                   <div className="basket__box__payment">

                                        <form onSubmit={handleSubmit} className='basket__box__payment__inputs' action="">

                                            <h4 className='basket__box__payment__inputs__name'>Способ оплаты</h4>

                                            <div className="basket__box__payment__box">
                                                <label className='basket__box__payment__label' htmlFor="">
                                                    <input id='cat1__in' className='basket__box__payment__input1' type="radio" name='payment' value="option1" checked={selectedRadio === "option1"} onChange={(e) => setSelectedRadio(e.target.value)}/>
                                                    <span className="custom__radio"></span>
                                                </label>
                                                <label htmlFor="cat1__in">
                                                    <p className='basket__box__payment__name'>Наличными</p>
                                                </label>
                                            </div>

                                            <div className="basket__box__payment__box">
                                                <label className='basket__box__payment__label' htmlFor="">
                                                    <input id='cat2__in' className='basket__box__payment__input1' type="radio" name='payment' value="option2" checked={selectedRadio === "option2"} onChange={(e) => setSelectedRadio(e.target.value)}/>
                                                    <span className="custom__radio"></span>
                                                </label>
                                                <label htmlFor="cat2__in">
                                                <p className='basket__box__payment__name'>Безналичными</p>
                                                </label>
                                                
                                            </div>

                                        </form>

                                        <form className='basket__box__delivery__inputs' action="">

                                            <h4 className='basket__box__delivery__inputs__name'>Доставка</h4>

                                            <div className="basket__box__delivery__box1">
                                                <label className='basket__box__delivery__label' htmlFor="">
                                                    <input id='cat3__in' className='basket__box__delivery__input1' type="radio" name='delivery'/>
                                                    <span className="custom__radio"></span>
                                                </label>
                                                <label htmlFor="cat3__in">
                                                <div className="basket__box__delivery__text1">
                                                    <p className='basket__box__delivery__name'>Доставка по Санкт-Петербургу</p>
                                                    <p className='basket__box__delivery__price'>1000 ₽</p>
                                                </div>
                                                </label>
                                            </div>

                                            <div className="basket__box__delivery__box2">
                                                <label className='basket__box__delivery__label' htmlFor="">
                                                    <input id='cat4__in' className='basket__box__delivery__input2' type="radio" name='delivery'/>
                                                    <span className="custom__radio"></span>
                                                </label>

                                                <label htmlFor="cat4__in">
                                                <div className="basket__box__delivery__text2">
                                                    <p className='basket__box__delivery__name'>Доставка по Ленинградской области</p>
                                                    <p className='basket__box__delivery__price'>1000 ₽ + 35 ₽ за 1 км от КАД</p>
                                                    <p className='basket__box__delivery__des'>Бесплатно 50 км от КАД - при покупке товара с комплектом дымохода 5 м и сумме заказа 50 000 руб.</p>
                                                </div>
                                                </label>
                                            </div>

                                            <div className="basket__box__delivery__box3">

                                                <label className='basket__box__delivery__label' htmlFor="">
                                                    <input id='cat5__in' className='basket__box__delivery__input3' type="radio" name='delivery'/>
                                                    <span className="custom__radio"></span>
                                                </label>

                                                <label htmlFor="cat5__in">
                                                <div className="basket__box__delivery__text3">
                                                   <p className='basket__box__delivery__name'>Доставка в регионы России</p>
                                                   <p className='basket__box__delivery__price'>1000 ₽ до терминала по СПБ</p>
                                                </div>
                                                </label>

                                            </div>
                                            
                                        </form>
                                        {errors.selectedRadio && (<p className='inputs__error__radio1' style={{ color: "red" }}>{errors.selectedRadio}</p>)}
                                   </div>

                                   <div className="basket__box__description">

                                       <div className="basket__box__description1">
                                           <p className='basket__box__description1__text'>Доставка осуществляется с понедельника по субботу с 12:00 до 17:00. </p>
                                       </div>

                                       <div className="basket__box__description2">
                                           <p className='basket__box__description1__text'>Разгрузка товара в стоимость не входит. Стоимость уточняйте у менеджера!</p>
                                       </div>

                                   </div>

                                   <div className="basket__box__count">
                                       <p className='basket__box__count__text1'>
                                          Общая сумма: <span>{basket.reduce((acc,el)=>{
                                             return acc + el.count * el.price
                                          },0)} ₽</span>
                                       </p>
                                       <p className='basket__box__count__text2'>без учёта стоимости доставки, разгрузки и монтажа</p>
                                   </div>

                                   <div className="basket__box__conditions">
                                    <label className="basket__box__conditions__label">
                                        <input checked={isChecked} onChange={handleCheckboxChange} className="basket__box__conditions__input1" type="checkbox" />
                                        <span className="custom__checkbox__basket"></span>
                                    </label>
                                       <p className='basket__box__conditions__text'>Я прочитал и согласен с <Link>правилами</Link></p>
                                   </div>

                                   <div className="basket__box__bottom__design">
                                       <button onClick={handleSubmit} disabled={!isChecked} className={isChecked ? 'basket__box__bottom__design__btn__check' : 'basket__box__bottom__design__btn'}>Оформить заказ</button>
                                   </div>

                                </>
                            )}
                        </>
                    ) : (
                      <>
                        <h2 className='basket__box__text2'>Корзина покупок</h2>
                        <p className='basket__box__empty__text'>Корзина пустая. Возвращайтесь в каталог и добавьте товар в корзину.</p>
                        <Link to='/'><button className='basket__box__home__btn'>Продолжить покупки</button></Link>
                      </>
                    )}
                    </>
                    ) : (
                        <>
                         <div className='basket__box__accepted'>
                             <h2 className='basket__box__accepted__name'>Ваш заказ принят!</h2>
                             <p className='basket__box__accepted__number'>Номер заказа: №2317</p>
                             
                             {basket.map((tit) => (
                             <>
                              <div className="basket__box__accepted__carts">

                                  <div className="basket__box__accepted__carts__box">
    
                                    <img className='basket__box__accepted__carts__img' src={tit.image} alt="" />
    
                                    <div className="basket__box__accepted__carts__description">
                                       <h4 className='basket__box__accepted__carts__description__title'>{tit.title}</h4>
                                       <p className='basket__box__accepted__carts__description__code'>Код товара: {tit.code}</p>
                                       <h3 className='basket__box__accepted__carts__description__price'>{tit.price} ₽</h3>
                                    </div>
  
                                  </div>

                                  <div className="basket__box__accepted__carts__count__box">
  
                                    <div className="basket__box__accepted__carts__count">
                                       <p className='basket__box__accepted__carts__count__number'>{tit.count}</p>
                                    </div>
                                    <p className='basket__box__accepted__carts__piece'>шт.</p>

                                  </div>

                              </div>
                             </>
                            ))}

                            <div className="basket__box__accepted__all">
                                <p className='basket__box__count__text1'>
                                    Общая сумма: <span>{basket.reduce((acc,el)=>{
                                       return acc + el.count * el.price
                                    },0)} ₽</span>
                                </p>
                                <p className='basket__box__count__text2'>без учёта стоимости доставки, разгрузки и монтажа</p>
                            </div>

                            <div className="basket__box__accepted__call">
                               <p className='basket__box__accepted__call__text'>Если у Вас возникли вопросы, пожалуйста, <Link>свяжитесь с нами.</Link> Или наш менеджер сам свяжеться с вами в течении дня.</p>
                               <p className='basket__box__accepted__call__text2'>Спасибо за покупки в нашем интернет-магазине!</p>
                               <h3 className='basket__box__accepted__call__montage'>Монтаж</h3>
                               <p className='basket__box__accepted__call__montage__text'>Также мы делаем монтаж «под ключ» по Ленинградской области, с бесплатным выездом на замер. Если вас интересует монтаж, то вы можете <Link>узнать о нём подробнее</Link> или <Link>рассчитать стоимость монтажа.</Link></p>
                            </div>

                            <Link to="/"><button onClick={()=>dispatch(basketDel())} className='basket__box__accepted__btn'>Главная</button></Link>


                             {/* <ul>
                                 <li>Текст: {orderDetails.textInput}</li>
                                 <li>Выбранный вариант: {orderDetails.selectedRadio}</li>
                             </ul> */}
                            </div>
                        </>
                    )}
                </div> 
            </div>
        </section>
    );
};

export default BasketTextUp;