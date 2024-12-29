import React from 'react';
import './ContactCompany.scss'

const ContactCompany = () => {
    return (
        <section className='contact__company'>
            <div className="container">

                <div className="contact__company__box">
                    <h3 className='contact__company__box__name'>Реквизиты компании</h3>
                    <ul className='contact__company__box__list'>
                        <li className='contact__company__box__list__li'>ИП: Ежов Дмитрий Владимирович</li>
                        <li className='contact__company__box__list__li'>ОГРН: 316784700146299</li>
                        <li className='contact__company__box__list__li'>ИНН: 781149255527</li>
                    </ul>
                </div>
                
            </div>
        </section>
    );
};

export default ContactCompany;