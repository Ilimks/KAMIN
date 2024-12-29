import React from 'react';
import './DeliveryTextUp.scss'
import DeliveryHome from '../../AboutUS/AboutUsIMG/Frame 36.svg'
import { Link } from 'react-router-dom';

const DeliveryTextUp = () => {
    return (
        <section className='DeliveryTextUp'>
            <div className="container">
                <div className="DeliveryTextUp__home">
                    <Link to='/'><img className='DeliveryTextUp__home__img' src={DeliveryHome} alt="" /></Link>
                    <p className='DeliveryTextUp__home__name'>Доставка, оплата и гарантии</p>
                </div>

                <h1 className='DeliveryTextUp__h1'>Доставка, оплата и гарантии</h1>
            </div>
        </section>
    );
};

export default DeliveryTextUp;