import React, { useContext, useEffect, useState } from 'react';
import './Header.scss'
import './HeaderMobile.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import headerLogo from './HeaderIMG/full logo.svg'
import headerLogo2 from './HeaderIMG/full logo2.svg'
import headerBasket1 from './HeaderIMG/Корзина.svg'
import ScrollIMG1 from './HeaderIMG/ScrollIMG1.svg'
import ScrollIMG2 from './HeaderIMG/ScrollIMG2.svg'
import inst from '../Footer/FooterIMG/inst.svg'
import be from '../Footer/FooterIMG/be.svg'
import pint from '../Footer/FooterIMG/pint.svg'
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../Store/ProductsSlice/ProductsSlice';
import { ThemeContext } from "../../Theme/ThemeContext";
import SearchInputIMG from './HeaderIMG/SearchInputHeader.svg'


const Header = () => {

    const basket = useSelector((state) => state.basketSlice.basket );
    const search = useSelector(state=>state.productsSlice.search);
    const dispatch = useDispatch()
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate()

    const [Openkatalog, setOpenKatalog] = useState(false)
    const [OpenNumber, setOpenNumber] = useState(false);
    const [OpenNumber1, setOpenNumber1] = useState(false)
    const [OpenIMG, setOpenIMG] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [NumberBtnCon, setNumberBtnCon] = useState(false)
    const [visible, setVisible] = useState(false)

    const BasketCountNumber = basket.reduce((acc, el) => acc + el.count, 0);



    const togglePopup = () => {
        setOpenNumber((popupRef) => !popupRef);
    };

    const togglePopupIMG = () =>{
        setOpenIMG((popupRef)=>!popupRef);
    }

    const togglePopupKatalog = () => {
        setOpenKatalog((popupRef)=>!popupRef);
    }

    const togglePopupOne = () => {
        setOpenNumber1((popupRef)=>!popupRef);
    }

    const togglePopupNumBtn = () => {
        setNumberBtnCon((popupRef)=>!popupRef);
    }

    

    


    useEffect(()=>{
        const headScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', headScroll);
        return () => window.removeEventListener('scroll', headScroll);
    }, []);


    
    let handleVisible = (e)=>{
         if(e===''){
            setVisible(false)
         }   
         else{
            setVisible(true)
         }
    }

    const location = useLocation();

    useEffect(() => {
        setOpenIMG(false);
        setOpenKatalog(false);
        setOpenNumber(false);
        setOpenNumber1(false);
        setVisible(false)
    }, [location.pathname]);

    

    return (
        <header className={`header ${scrolled ? 'header__scroll' : ''}`}>
            <div className="container">
                
                <div className="header__top">
                    <Link to='/'><img className={theme !== "dark" ? "header__logo" : "header__logo1"} src={headerLogo} alt="" /></Link>
                    <Link to='/'><img className={theme === "dark" ? "header__log_dark" : "header__log_dark1"} src={headerLogo2} alt="" /></Link>
                    {scrolled && (
                        <div className="header__top__katalog__scroll">
                            <img className='header__top__katalog__scroll__img1' src={ScrollIMG1} alt="" />
                            {OpenIMG ? <img onClick={togglePopupIMG} className='header__top__katalog__scroll__img2' src={ScrollIMG2} alt="" />:<img onClick={togglePopupIMG} className='header__top__katalog__scroll__img2' src={ScrollIMG2} alt="" /> }
                            {OpenIMG && (
                                <div className={theme === "dark" ? "header__top__katalog__scroll__img2__popup_dark" : "header__top__katalog__scroll__img2__popup"} >
                                    <ul className='header__top__katalog__scroll__img2__popup__nav'>
                                        <li className='header__top__katalog__scroll__img2__popup__nav__li'><Link>Дымоходы</Link></li>
                                        <li className='header__top__katalog__scroll__img2__popup__nav__li'><Link to='montages'>Монтаж</Link></li>
                                        <li className='header__top__katalog__scroll__img2__popup__nav__li'><Link to='portfolio'>Портфолио</Link></li>
                                        <li className='header__top__katalog__scroll__img2__popup__nav__li'><Link to='delivery'>Доставка и оплата</Link></li>
                                        <li className='header__top__katalog__scroll__img2__popup__nav__li'><Link to='reviews'>Отзывы</Link></li>
                                        <li className='header__top__katalog__scroll__img2__popup__nav__li'><Link to='contact'>Контакты</Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="header__input__search">
                        <form className='header__form' action="">
                            <input 
                            className='header_input' type="text" 
                            placeholder='Искать...'
                            onChange={(e)=>{handleVisible(e.target.value)
                            dispatch(searchProducts(e.target.value))}}
                            />
                            <div className="header__search"></div>
                        </form>
                        
                            {visible?
                                <div className={`header__searchBox ${scrolled ? 'header__searchBox__scroll' : ''}`}>
                                    {search.map((el)=>(
                                        <div onClick={() => navigate(`/single/${el.id}`)} className= {theme === "dark" ? 'search__cart__dark' : 'search__cart'}>
                                            <img className='search__cart__img' src={el.image} alt=""/>
                                            <div className="search__cart__text">
                                               <p className='search__cart__title'>{el.title}</p>
                                               <p className='search__cart__price'>{el.price} ₽</p>
                                            </div>
                                        </div>  
                                    ))}
                                </div>
                            :''}
                        </div>
                    <div className="header__baskets">
                        <Link to='basket'>
                           <img className='header__basket' src={headerBasket1} alt="" />
                           <div className={BasketCountNumber !== 0 ? 'header__basket__count' : ''}>
                           {BasketCountNumber > 0 && <span className="header__basket__count-cart">{BasketCountNumber}</span>}
                           </div>
                        </Link>
                        <Link to='user'><div className="header__user"></div></Link>
                        <div className="toggle__theme__box">
                            <label>
                                <input
                                  className="toggle-checkbox"
                                  type="checkbox"
                                  checked={theme === "dark"}
                                  onChange={toggleTheme}
                                />
                                <div className="toggle-slot">
                                  <div className="sun-icon-wrapper">
                                    <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                                  </div>
                                  <div className="toggle-button"></div>
                                  <div className="moon-icon-wrapper">
                                    <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                                  </div>
                                </div>
                            </label>
                        </div>

                    </div>
                    {scrolled && (
                        <div className='header__bottom__scroll'>
                            <p className='header__bottom__number' onClick={togglePopup}>
                                {OpenNumber ? '+7 (812) 924-66-61' : '+7 (812) 924-66-61'}
                            </p>
                            {OpenNumber && (
                                <div className={theme === "dark" ? "header__bottom__number__popup-box_dark" : "header__bottom__number__popup-box"}>
                                    <div className="header__bottom__number__popup-box__adress">
                                        <p className='header__bottom__number__popup-box__adress__text'>Адрес магазина</p>
                                        <p className='header__bottom__number__popup-box__adress__city'>г. Санкт-Петербург, ул. Ленсовета, 43</p>
                                    </div>

                                    <div className="header__bottom__number__popup-box__number">
                                        <p className='header__bottom__number__popup-box__number__text'>Телефон</p>
                                        <p className='header__bottom__number__popup-box__number__num'>+7 (812) 924-66-61</p>
                                    </div>

                                    <div className="header__bottom__number__popup-box__email">
                                        <p className='header__bottom__number__popup-box__email__text'>E-mail</p>
                                        <p className='header__bottom__number__popup-box__email__mail'>pechkiru@mail.ru</p>
                                    </div>

                                    <button onClick={togglePopupNumBtn} className='header__bottom__number__popup-box__btn'>Консультация</button>
                                    {NumberBtnCon && (
                                        <div className="header__bottom__number__popup-box__btn__box">
                                            <div className="header__bottom__number__popup-box__btn__box__close" onClick={togglePopupNumBtn}></div>
                                            <div className={theme === "dark" ? "header__bottom__number__popup-box__btn__box__content_dark" : "header__bottom__number__popup-box__btn__box__content"}>
                                                <h3 className='header__bottom__number__popup-box__btn__box__content__name'>Консультируем и подбираем оборудование</h3>
                                                <p className='header__bottom__number__popup-box__btn__box__content__text'>Наш специалист по товару задаст вам несколько вопросов и предложит подходящие варианты.</p>
                                                <form className='header__bottom__number__popup-box__btn__box__content__form' action="">
                                                    <input className='header__bottom__number__popup-box__btn__box__content__form__input1' type="text"  placeholder='Ваше имя'/>
                                                    <input className='header__bottom__number__popup-box__btn__box__content__form__input2' type="number" placeholder='Номер телефона'/>
                                                    <button className='header__bottom__number__popup-box__btn__box__content__btn'>Получить коснультацию</button>
                                                </form>
                                            </div>
                                        </div>
                                    )}

                                    <div className="header__bottom__number__popup-box__social__network">
                                        <img src={inst} alt="" />
                                        <img src={be} alt="" />
                                        <img src={pint} alt="" />
                                    </div>

                                    <p className='header__bottom__number__popup-box__text__bottom'>мы размещаем свои работы и создаём полезный контент для людей интересующиеся печами, каминами и интерьером</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {!scrolled && (
                   <div className={theme === "dark" ? 'headre__bootom__dark' : 'header__bottom'}>
   
                       <div onClick={togglePopupKatalog} className="header__bottom__katalog">
                           <h4 className='header__bottom__katalog__text'>Каталог</h4>
                       </div>
                       {Openkatalog && (
                           <div  className={theme === "dark" ? "header__bottom__katalog__box_dark" : "header__bottom__katalog__box"}>
                               <ul className='header__bottom__katalog__box__nav'>
                                   <li className='header__bottom__katalog__box__nav__1'>Печи для бани</li>
                                   <li className='header__bottom__katalog__box__nav__2'>Печи для дачи</li>
                                   <li className='header__bottom__katalog__box__nav__3'><Link to='StovesaAndFreplaces'>Печи-камины</Link></li>
                                   <li className='header__bottom__katalog__box__nav__4'>Котлы</li>
                                   <li className='header__bottom__katalog__box__nav__5'>Камины</li>
                                   <li className='header__bottom__katalog__box__nav__6'>Каминные топки</li>
                                   <li className='header__bottom__katalog__box__nav__7'>Садовые печи</li>
                               </ul>
                           </div>
                       )}
                       <ul className="header__bottom__nav">
                               <li onClick={()=>{
                                setOpenKatalog(false)
                               }} className='header__bottom__li1'><Link>Дымоходы</Link></li>
                               <li className='header__bottom__li2'><Link to='montages'>Монтаж</Link></li>
                               <li className='header__bottom__li3'><Link to='portfolio'>Портфолио</Link></li>
                               <li className='header__bottom__li4'><Link to='delivery'>Доставка и оплата</Link></li>
                               <li className='header__bottom__li5'><Link to='reviews'>Отзывы</Link></li>
                               <li className='header__bottom__li6'><Link to='contact'>Контакты</Link></li>
                           </ul>
                       <p onClick={togglePopupOne} className='header__bottom__number'>{OpenNumber1  ? '+7 (812) 924-66-61' : '+7 (812) 924-66-61'}</p>
                       <>
                         {OpenNumber1 && (
                            <div className={theme === "dark" ? "header__bottom__number__popup-box2_dark" : "header__bottom__number__popup-box2"}>
                                <div className="header__bottom__number__popup-box__adress">
                                    <p className='header__bottom__number__popup-box__adress__text'>Адрес магазина</p>
                                    <p className='header__bottom__number__popup-box__adress__city'>г. Санкт-Петербург, ул. Ленсовета, 43</p>
                                </div>
    
                                <div className="header__bottom__number__popup-box__number">
                                    <p className='header__bottom__number__popup-box__number__text'>Телефон</p>
                                    <p className='header__bottom__number__popup-box__number__num'>+7 (812) 924-66-61</p>
                                </div>
    
                                <div className="header__bottom__number__popup-box__email">
                                    <p className='header__bottom__number__popup-box__email__text'>E-mail</p>
                                    <p className='header__bottom__number__popup-box__email__mail'>pechkiru@mail.ru</p>
                                </div>
    
                                <button onClick={togglePopupNumBtn} className='header__bottom__number__popup-box__btn'>Консультация</button>
                                {NumberBtnCon && (
                                    <div className="header__bottom__number__popup-box__btn__box">
                                        <div className="header__bottom__number__popup-box__btn__box__close" onClick={togglePopupNumBtn}></div>
                                        <div className={theme === "dark" ? "header__bottom__number__popup-box__btn__box__content_dark" : "header__bottom__number__popup-box__btn__box__content"}>
                                            <h3 className='header__bottom__number__popup-box__btn__box__content__name'>Консультируем и подбираем оборудование</h3>
                                            <p className='header__bottom__number__popup-box__btn__box__content__text'>Наш специалист по товару задаст вам несколько вопросов и предложит подходящие варианты.</p>
                                            <form className='header__bottom__number__popup-box__btn__box__content__form' action="">
                                                <input className='header__bottom__number__popup-box__btn__box__content__form__input1' type="text"  placeholder='Ваше имя'/>
                                                <input className='header__bottom__number__popup-box__btn__box__content__form__input2' type="number" placeholder='Номер телефона'/>
                                                <button className='header__bottom__number__popup-box__btn__box__content__btn'>Получить коснультацию</button>
                                            </form>
                                        </div>
                                    </div>
                                )}
    
                                <div className="header__bottom__number__popup-box__social__network">
                                    <img src={inst} alt="" />
                                    <img src={be} alt="" />
                                    <img src={pint} alt="" />
                                </div>
    
                                <p className='header__bottom__number__popup-box__text__bottom'>мы размещаем свои работы и создаём полезный контент для людей интересующиеся печами, каминами и интерьером</p>
                        </div>
                         )}
                       </>
                   </div>
                )}

            </div>
        </header>
    );
};

export default Header;