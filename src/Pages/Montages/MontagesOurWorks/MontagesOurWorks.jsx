import React from 'react';
import MontagesOurWorksSwiper from './MontagesOurWorksSwiper/MontagesOurWorksSwiper';

const MontagesOurWorks = () => {
    return (
        <section className='montages__our__works'>
            <div className="container">
                <h3 className='portfolio__name'>Портфолио</h3>
                <MontagesOurWorksSwiper/>
                <button className='portfolio__btn'>Все работы</button>
            </div>
        </section>
    );
};

export default MontagesOurWorks;