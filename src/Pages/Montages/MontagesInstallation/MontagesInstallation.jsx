import React from 'react';
import './MontagesInstallation.scss'
import installation1 from '../../Home/Installation/InstallationIMG/installation1.svg'
import installation2 from '../../Home/Installation/InstallationIMG/installation2.svg'
import installation3 from '../../Home/Installation/InstallationIMG/installation3.svg'
import installation4 from '../../Home/Installation/InstallationIMG/installation4.svg'
import installation5 from '../../Home/Installation/InstallationIMG/installation5.svg'
import installation6 from '../../Home/Installation/InstallationIMG/installation6.svg'

const MontagesInstallation = () => {
    return (
        <section className='montages__installation'>
            <div className="container">
                <div className="installation__box">
    
                    <div className="installation__box__card1">
                        <img className='installation__box__card1__img' src={installation1} alt="" />
                        <h6 className='installation__box__card1__des'>Установка печи в доме</h6>
                        <p className='installation__box__card1__price'>от 20 000 руб.</p>
                    </div>
                    
                    <div className="installation__box__card2">
                        <img className='installation__box__card2__img' src={installation2} alt="" />
                        <h6 className='installation__box__card2__des'>Установка камина</h6>
                        <p className='installation__box__card2__price'>от 20 000 руб.</p>
                    </div>
                    
                    <div className="installation__box__card3">
                        <img className='installation__box__card3__img' src={installation3} alt="" />
                        <h6 className='installation__box__card3__des'>Установка печи в бане</h6>
                        <p className='installation__box__card3__price'>от 20 000 руб.</p>
                    </div>
                    
                    <div className="installation__box__card4">
                        <img className='installation__box__card4__img' src={installation4} alt="" />
                        <h6 className='installation__box__card4__des'>Установка котла</h6>
                        <p className='installation__box__card4__price'>от 20 000 руб.</p>
                    </div>
                    
                    <div className="installation__box__card5">
                        <img className='installation__box__card5__img' src={installation5} alt="" />
                        <h6 className='installation__box__card5__des'>Установка дымохода</h6>
                        <p className='installation__box__card5__price'>от 20 000 руб.</p>
                    </div>
                    
                    <div className="installation__box__card6">
                        <img className='installation__box__card6__img' src={installation6} alt="" />
                        <h6 className='installation__box__card6__des'>Изготовление дымохода</h6>
                        <p className='installation__box__card6__price'>от 20 000 руб.</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default MontagesInstallation;