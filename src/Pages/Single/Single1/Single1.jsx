import React, { useEffect, useState } from 'react';
import './Single1.scss'
import { Link, useLocation } from 'react-router-dom';
import SingleHome from '../../AboutUS/AboutUsIMG/Frame 36.svg'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SingleKey from '../SingleIMG/SingleKey.svg'

const Single1 = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({})
  
    useEffect(()=>{
        axios(`http://localhost:3000/products/${location.pathname.replace('/single/','')}`)
        .then(({data})=>setProduct(data))
    },[])
 
 
    const characteristics = [
        { name: "Объём помещения (м³)", value: product.volume },
        { name: "Мощность (кВт)", value: product.power },
        { name: "Расположение", value: product.location },
        { name: "Подключение к дымоходу", value: product.chimneyConnection },
        { name: "Материал топки", value: product.fireboxMaterial },
        { name: "Диаметр дымохода (мм)", value: product.chimneyDiameter },
        { name: "Ширина (мм)", value: product.width },
        { name: "Высота (мм)", value: product.hight },
        { name: "Глубина (мм)", value: product.depth },
        { name: "Вес (кг)", value: product.weight },
        { name: "Длительное горение", value: product.longBurning },
        { name: "Духовка", value: product.oven },
        { name: "Вид топлива", value: product.fuelType },
        { name: "Система «Чистое стекло»", value: product.systemCleanGlass },
        { name: "Гарантия (месяцев)", value: product.warrantyMonths },
        { name: "Страна производитель", value: product.countryOfOrigin },
        { name: "Предназначения", value: product.purpose },
        { name: "Модельный ряд", value: product.modelRange },
    ]

    return (
            <section className='single1'>
                <div className="container">
                    <div className="single1__box">

                        <div className="single1__box__to">
                            <Link to='/'><img className='single1__box__to__img' src={SingleHome} alt="" /></Link>
                            <p className='single1__box__to__name1'>Каталог</p>
                            <p className='single1__box__to__name2'>Печи-камины</p>
                            <p className='single1__box__to__name3'>{product.title}</p>
                        </div>

                        <div className="single1__box__cart">

                            <div className="single1__box__cart__left">
                                <img className='single1__box__cart__left__img' src={`../${product.image}`} alt="" />
                            </div>

                            <div className="single1__box__cart__right">
                                <h2 className='single1__box__cart__right__name'>{product.title}</h2>
                                <p className='single1__box__cart__right__code'>Код товара: {product.code}</p>
                                <div className="single1__box__cart__right__btn">
                                    <div className="single1__box__cart__price">
                                        <p className='single1__box__cart__price__old'>{product.oldPrice}</p>
                                        <h3 className='single1__box__cart__price__new'>{product.price} ₽</h3>
                                    </div>
                                    <button className='single1__btn'>В КОРЗИНУ</button>
                                </div>
                                <div className="single1__box__cart__right__key">
                                    <div className="single1__box__cart__right__key__ni">
                                        <h3 className='single1__box__cart__right__key__name'>Рассчёт под ключ</h3>
                                        <img className='single1__box__cart__right__key__img' src={SingleKey} alt="" />
                                    </div>
                                    <p className='single1__box__cart__right__key__text'>Бесплатно рассчитаем стоимость печи  «под ключ»: с дымоходом, монтажом и облицовкой, если нужно.</p>
                                    <div className='single1__box__cart__right__key__inputs'>
                                        <input className='single1__box__cart__right__key__input' type="text" placeholder='Ваше имя'/>
                                        <input className='single1__box__cart__right__key__input' type="number" placeholder='Номер телефона'/>
                                    </div>
                                    <button className='single1__box__cart__right__key__btn'>Рассчитать стоимость</button>
                                </div>
                                <h3 className='single1__box__cart__right__des'>Описание</h3>
                                <p className='single1__box__cart__right__des__text'>{product.description}</p>
                                <h3 className='single1__box__cart__right__char'>Характеристики</h3>
                                <div className="single1__box__cart__right__char__lists">
                                    
                                    {characteristics.map((el, idx) => (
                                       <div key={idx} className="single1__box__cart__right__char__list">
                                         <p className="single1__box__cart__right__char__list__name">{el.name}</p>
                                         <p className="single1__box__cart__right__char__list__mean">{el.value}</p>
                                       </div>
                                    ))}

                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
       
    );
};

export default Single1;