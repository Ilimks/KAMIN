import React from 'react';
import './Footer.scss'
import './FooterMobile.scss'
import inst from './FooterIMG/inst.svg'
import be from './FooterIMG/be.svg'
import pint from './FooterIMG/pint.svg'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">

                <div className="footer__box">

                    <div className="footer__left">
                        <h4 className='footer__left__text'>Информация</h4>
                        <ul className='footer__left__nav'>
                            <li className='footer__left__nav__li'><Link to="/about">О нас</Link></li>
                            <li className='footer__left__nav__li'><Link to='delivery'>Доставка и оплата</Link></li>
                            <li className='footer__left__nav__li'><Link to="manufact">Производители</Link></li>
                            <li className='footer__left__nav__li'><Link to='policy'>Политика конфиденциальности</Link></li>
                            <li className='footer__left__nav__li'><Link>Карта сайта</Link></li>
                        </ul>
                    </div>

                    <div className="footer__center">
                        <h4 className='footer__center__text'>Контакты</h4>
                        <div className="footer__center__place">
                            <p className='footer__center__place__adress__shop'>Адрес магазина</p>
                            <h5 className='footer__center__place__adress'>г. Санкт-Петербург,  ул. Ленсовета, 43</h5>
                        </div>
                        <div className="footer__center__map">
                           <YMaps query={{ apikey: '30676071-86db-4ef1-b543-0d4e04ef5dc5' }}>
                               <div className='footer__center__map__ymap'>
                                 <Map 
                                   defaultState={{ center: [42.875985, 74.603672], zoom: 10 }} 
                                   width="100%" 
                                   height="100%"
                                 >
                                   <Placemark geometry={[55.751244, 37.618423]} />
                                 </Map>
                               </div>
                           </YMaps>
                        </div>
                    </div>

                    <div className="footer__right">
                        <div className="footer__right__telephone">
                            <p className='footer__right__telephone__text'>Телефон</p>
                            <h5 className='footer__right__telephone__num'>+7 (812) 924-66-61</h5>
                        </div>
                        <div className="footer__right__email">
                            <p className='footer__right__email__text'>E-mail</p>
                            <h5 className='footer__right__email__ru'>pechkiru@mail.ru</h5>
                        </div>
                        <div className="footer__right__social__network">
                            <img className='footer__right__social__network__img' src={inst} alt="" />
                            <img className='footer__right__social__network__img' src={be} alt="" />
                            <img className='footer__right__social__network__img' src={pint} alt="" />
                        </div>
                        <h5 className='footer__right__text1'>Подписывайтесь на наши соцсети</h5>
                        <p className='footer__right__text2'>Мы размещаем свои работы и создаём полезный контент для людей интересующиеся печами, каминами и интерьером</p>
                    </div>

                </div>

                <div className="footer__line"></div>

                <p className='footer__bottom__text'>Печки © 2021. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;