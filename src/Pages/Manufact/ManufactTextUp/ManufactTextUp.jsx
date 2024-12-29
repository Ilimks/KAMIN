import React from 'react';
import './ManufactTextUp.scss'
import ManufactToHome from '../../AboutUS/AboutUsIMG/Frame 36.svg'
import { Link } from 'react-router-dom';

const ManufactTextUp = () => {
    return (
        <section className='ManufactTextUp'>
            <div className="container">

                <div className="ManufactTextUp__box">
                    <div className="ManufactTextUp__box__to__home">
                        <Link to='/'><img className='ManufactTextUp__box__to__home_img' src={ManufactToHome} alt="" /></Link>
                        <p className='ManufactTextUp__box__to__home__name'>Производители</p>
                    </div>
                    <h1 className='ManufactTextUp__box__h1'>Производители</h1>
                    <p className='ManufactTextUp__box__text__bottom'>Производители каминов предлагают широкий выбор моделей, от классических дровяных до современных электрических и биокаминов. Лидерами отрасли считаются бренды, такие как Dimplex, Planika, Supra и Jøtul. Они известны высоким качеством, надежностью и стильным дизайном. Камины изготавливаются с использованием инновационных технологий, что обеспечивает их безопасность и долговечность. Производители также предлагают индивидуальные решения, позволяя клиентам подобрать камин под интерьер и нужды.</p>
                </div>

            </div>
        </section>
    );
};

export default ManufactTextUp;