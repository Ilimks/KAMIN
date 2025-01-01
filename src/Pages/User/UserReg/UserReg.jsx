import React, { useState, useEffect } from 'react';
import './UserReg.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const UserReg = () => {

    const [reg, setReg] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);
    const [user, setUser] = useState(null); // Данные авторизованного пользователя
    let navigate = useNavigate()


    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) setUser(savedUser);
    }, []);

    const login = (e) => {
        e.preventDefault();
        let user = {
          email: e.target[0].value,
          password: e.target[1].value,
        };
    
        axios
          .post("http://localhost:3000/users", user) // Проверь, что API на 3000 порту поддерживает POST-запрос для входа
          .then(({ data }) => {
            // Сохраняем данные пользователя в localStorage
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
            navigate("/"); // Редирект на главную
          })
          .catch((err) => {
            console.error(err);
            alert("Неверный email или пароль!");
          });
    };

    const register = (e) => {
        e.preventDefault();
        let newUser = {
          name: e.target[0].value,
          password: e.target[1].value,
          confirmPassword: e.target[2].value,
          email: e.target[3].value,
          phone: e.target[4].value,
        };
    
        // Проверяем совпадение паролей
        if (newUser.password !== newUser.confirmPassword) {
          alert("Пароли не совпадают!");
          return;
        }
    
        axios
          .post("http://localhost:3000/users", newUser)
          .then(({ data }) => {
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);
            alert("Регистрация успешна!");
            navigate("/"); // Редирект на главную
          })
          .catch((err) => {
            console.error(err);
            alert("Ошибка регистрации!");
          });
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/user"); // Перенаправление на страницу логина
    };

    


    return (
        <section className='UserReg'>
            <div className="UserReg__container">

                {/* Если пользователь авторизован */}
                {user ? (
                  <div>
                    <h2>Добро пожаловать, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    <p>Телефон: {user.phone}</p>
                    <button onClick={logout} className="UserReg__box__btn">
                      Выйти
                    </button>
                  </div>
                ) : reg === false ? (
                <>
                    <h2 className='UserReg__name'>Логин</h2>
    
                    <div className="UserReg__box">
                        <form onSubmit={(e)=>login(e)} action="">
    
                            <div className="UserReg__box__email">
                                <h4 className='UserReg__box__email__name'>Email</h4>
                                <label htmlFor="">
                                   <input className='UserReg__box__email__input' type="email"  />
                                </label>
                            </div>
    
                            <div className="UserReg__box__password">
                                <h4 className='UserReg__box__password__name'>Пароль</h4>
                                <label htmlFor="">
                                   <input className='UserReg__box__password__input' type="password"  />
                                </label>
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
                              <form onSubmit={(e) => register(e)} action="">

                                <div className='UserReg__box__reg1'>
                                  <h4 className='UserReg__box__reg1__name'>Имя</h4>
                                  <label htmlFor="">
                                    <input className='UserReg__box__input__reg__name' type="text" />
                                  </label>
                                </div>

                                <div className='UserReg__box__reg2'>
                                  <h4 className='UserReg__box__reg2__name'>Пароль</h4>
                                  <label htmlFor="">
                                    <input className='UserReg__box__input__reg__password1' type="password" />
                                  </label>
                                </div>

                                <div className='UserReg__box__reg3'>
                                  <h4 className='UserReg__box__reg3__name'>Подтвердите пароль</h4>
                                  <label htmlFor="">
                                    <input className='UserReg__box__input__reg__password2' type="password" />
                                  </label>
                                </div>

                                <div className='UserReg__box__reg4'>
                                  <h4 className='UserReg__box__reg4__name'>Email</h4>
                                  <label htmlFor="">
                                    <input className='UserReg__box__input__reg__email' type="email" />
                                  </label>
                                </div>

                                <div className='UserReg__box__reg5'>
                                  <h4 className='UserReg__box__reg5__name'>Телефон</h4>
                                  <label htmlFor="">
                                    <input className='UserReg__box__input__reg__phone' type="text" />
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