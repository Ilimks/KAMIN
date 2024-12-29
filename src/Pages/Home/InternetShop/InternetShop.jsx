import React from 'react';
import './InternetShop.scss'
import './InternetShopMobile.scss'
import intiu from './InternetShopIMG/image 26.svg'

const InternetShop = () => {
    return (
        <section className='internet__shop'>
            <div className="container">
                <h2 className='internet__shop__name'>Интернет-магазин каминов, печей и котлов</h2>
                <img className='internet__shop__img' src={intiu} alt="" />
                <p className='internet__shop__text'>Интернет-магазин каминов собрал самое ценное, что имеется на современном рынке. Если вы ищите надежную технику для обогрева, приготовления пищи, созерцания огня и прочих потребностей, то вам обязательно следует посетить наш сайт. Интернет-портал ПИТЕР КАМИН! Располагает широчайшим ассортиментом технических приспособлений. У нас на виртуальной витрине представлены следующие категории:</p>
                <ul className='internet__shop__list'>
                    <li>1. Банные агрегаты;</li>
                    <li>2. Отопительно-варочные изделия;</li>
                    <li>3. Инновационные биокамины;</li>
                    <li>4. Грили, барбекю, мангалы;</li>
                    <li>5. Электрические приборы;</li>
                    <li>6. Сопутствующие комплектующие.</li>
                </ul>
                <p className='internet__shop__text__bottom'>Мы уверены, что вы обязательно отыщите желаемый тип модели.</p>
            </div>
        </section>
    );
};

export default InternetShop;