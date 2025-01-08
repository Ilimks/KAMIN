import React, { useState, useEffect, useContext } from 'react';
import './UserReg.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import closeEye from '../UserIMG/eye-password-hide.svg'
import openEye from '../UserIMG/eye-password-show (1).svg'
import { ThemeContext } from "../../../Theme/ThemeContext"




const UserReg = () => {

    const [reg, setReg] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    const [user, setUser] = useState(null); 
    const [password,setPassword] = useState(false)
    const [password1,setPassword1] = useState(false)
    const [password2,setPassword2] = useState(false) 
    const { theme, toggleTheme } = useContext(ThemeContext);
    let navigate = useNavigate()


    let handlePassword = ()=>{
      setPassword(!password)
    }

    let handlePassword1 = ()=>{
      setPassword1(!password1)
    }

    let handlePassword2 = ()=>{
      setPassword2(!password2)
    }



    useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem("user"));
      console.log("Данные localStorage:", savedData);
  
      if (savedData && savedData.user) {
          setUser(savedData.user); 
      } else {
          setUser(null); 
      }
    }, []);
  
    const Login = (e) => {
        e.preventDefault();
        let user = {
          email: e.target[0].value,
          password: e.target[1].value,
        };
        console.log(user)
    
        axios
          .post("http://localhost:3000/login", user)
          .then(({ data }) => {
            console.log(data);
            
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data.user);
            navigate("/"); 
          })
          .catch((err) => {
            console.error(err);
            alert("Неверный email или пароль!");
          });
    };

    const Register = (e) => {
        e.preventDefault();
        let newUser = {
          name: e.target[0].value,
          password: e.target[1].value,
          confirmPassword: e.target[2].value,
          email: e.target[3].value,
          phone: e.target[4].value,
        };
    
        
        if (newUser.password !== newUser.confirmPassword) {
          alert("Пароли не совпадают!");
          return;
        }
    
        axios
          .post("http://localhost:3000/register", newUser)
          .then(({ data }) => {
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data.user);
            alert("Регистрация успешна!");
            navigate("/"); 
          })
          .catch((err) => {
            console.error(err);
            alert("Ошибка регистрации!");
          });
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        localStorage.removeItem('user');
        navigate("/user"); 
    };
    console.log("Saved user in localStorage:", localStorage.getItem("user"));
    


    return (
        <section className='UserReg'>
            <div className="UserReg__container">
            {console.log("Текущее состояние user:", user)}
                {user ? (
                <div className="container">

                  <h2 className='user__entered__name'>Добро пожаловать, {user.name}!</h2>
                  <p className='user__entered__my'>Мой профиль</p>

                  <div className='user__entered'>

                    <div className="user__entered__text1">
                      <p className='user__entered__email__text'>Имя:</p>
                      <p className='user__entered__email'>{user.name}</p>
                    </div>

                    <div className="user__entered__line"></div>

                    <div className="user__entered__text2">
                      <p className='user__entered__email__text'>Фамилия:</p>
                      <p className='user__entered__email'>{user.name}</p>
                    </div>

                    <div className="user__entered__line"></div>

                    <div className="user__entered__text3">
                      <p className='user__entered__email__text'>Email:</p>
                      <p className='user__entered__email'>{user.email}</p>
                    </div>

                    <div className="user__entered__line"></div>

                    <div className="user__entered__text4">
                      <p className='user__entered__phone__text'>Телефон:</p>
                      <p className='user__entered__phone'>{user.phone}</p>
                    </div>

                    <div className="user__entered__line"></div>
                    
                    <button onClick={logout} className="user__entered__btn">Выйти</button>

                  </div>
                </div>
                ) : reg === false ? (
                <>
                    <h2 className='UserReg__name'>Логин</h2>
    
                    <div className="UserReg__box">
                        <form onSubmit={(e)=>Login(e)} action="">
    
                            <div className="UserReg__box__email">
                                <h4 className='UserReg__box__email__name'>Email</h4>
                                <label htmlFor="">
                                   <input className={theme === "dark" ? 'UserReg__box__email__input_dark' : 'UserReg__box__email__input'} type="email"  />
                                </label>
                            </div>
    
                            <div className="UserReg__box__password">
                                <h4 className='UserReg__box__password__name'>Пароль</h4>
                                <label htmlFor="">
                                   <input className={theme === "dark" ? 'UserReg__box__password__input_dark' : 'UserReg__box__password__input'} type={password?"text":"password"}  />
                                </label>
                                {password?<img className='UserReg__input__password__open' src={openEye} alt="" onClick={handlePassword}/>:<img className='UserReg__input__password__close' src={closeEye} alt="" onClick={(handlePassword)}/>}
                            </div>
    
                            <div className="UserReg__box__checkBox">
                                <label className="UserReg__box__checkBox__in">
                                    <input checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="UserReg__box__checkBox__input1" type="checkbox" />
                                    <span className="custom__checkbox__basket"></span>
                                </label>
    
                                <p className='UserReg__box__checkBox__forget'>Запомнить меня</p>
                            </div>
    
                            <button className='UserReg__box__btn'>Войти</button>
    
                        </form>
    
                        <p onClick={()=>setReg(true)} className='UserReg__box__reg'>Впервые у нас? <Link>Зарегистрироваться</Link></p>
                    </div>
                </>
                ) : (
                    <>
                           <h2 className="UserReg__name">Регистрация</h2>
                           <div className="UserReg__box">
                              <form onSubmit={(e) => Register(e)} action="">

                                  <div className='UserReg__box__reg1'>
                                    <h4 className='UserReg__box__reg1__name'>Имя</h4>
                                    <label htmlFor="">
                                      <input 
                                          className={theme === "dark" ? 'UserReg__box__input__reg__name_dark' : 'UserReg__box__input__reg__name'}
                                          type="text"
                                        />
                                      
                                    </label>
                                  </div>

                                <div className='UserReg__box__reg2'>
                                  <h4 className='UserReg__box__reg2__name'>Пароль</h4>
                                  <label htmlFor="">
                                    <input className={theme === "dark" ? 'UserReg__box__input__reg__password1_dark' : 'UserReg__box__input__reg__password1'} type={password1?"text":"password"} />
                                  </label>
                                  {password1?<img className='UserReg__input__password__open' src={openEye} alt="" onClick={handlePassword1}/>:<img className='UserReg__input__password__close' src={closeEye} alt="" onClick={(handlePassword1)}/>}
                                </div>

                                <div className='UserReg__box__reg3'>
                                  <h4 className='UserReg__box__reg3__name'>Подтвердите пароль</h4>
                                  <label htmlFor="">
                                    <input className={theme === "dark" ? 'UserReg__box__input__reg__password2_dark' : 'UserReg__box__input__reg__password2'} type={password2?"text":"password"} />
                                  </label>
                                  {password2?<img className='UserReg__input__password__open' src={openEye} alt="" onClick={handlePassword2}/>:<img className='UserReg__input__password__close' src={closeEye} alt="" onClick={(handlePassword2)}/>}
                                </div>

                                <div className='UserReg__box__reg4'>
                                  <h4 className='UserReg__box__reg4__name'>Email</h4>
                                  <label htmlFor="">
                                    <input className={theme === "dark" ? 'UserReg__box__input__reg__email_dark' : 'UserReg__box__input__reg__email'} type="email" />
                                  </label>
                                </div>

                                <div className='UserReg__box__reg5'>
                                  <h4 className='UserReg__box__reg5__name'>Телефон</h4>
                                  <label htmlFor="">
                                    <input className={theme === "dark" ? 'UserReg__box__input__reg__phone_dark' : 'UserReg__box__input__reg__phone'} type="text" />
                                  </label>
                                </div>

                                <button className="UserReg__box__btn">Зарегистрироваться</button>
                              </form>
                
                              <p
                                onClick={() => setReg(false)}
                                className="UserReg__box__reg"
                              >
                                Уже регистрировались? <Link>Войти</Link>
                              </p>
                            </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default UserReg; 