import React from 'react';
import './Manufacturers.scss'
import './ManufacturersMobile.scss'
import ManufacturersIMG1 from './ManufacturersIMG/ManufacturersIMG1.svg'
import ManufacturersIMG2 from './ManufacturersIMG/ManufacturersIMG2.svg'
import ManufacturersIMG3 from './ManufacturersIMG/ManufacturersIMG3.svg'
import ManufacturersIMG4 from './ManufacturersIMG/ManufacturersIMG4.svg'
import ManufacturersIMG5 from './ManufacturersIMG/ManufacturersIMG5.svg'
import { Link } from 'react-router-dom';

const Manufacturers = () => {

    const logosManufacturers = [
        { img: ManufacturersIMG1 },
        { img: ManufacturersIMG2 },
        { img: ManufacturersIMG3 },
        { img: ManufacturersIMG4 },
        { img: ManufacturersIMG5 },
      ];
    
    return (
        <section className="manufacturers">
            <div className="container">
                <h3 className="manufacturers__name">Производители</h3>
                <div className="manufacturers__box">
                    <div className="manufacturers__marquee">
                        {logosManufacturers.map((logo, index) => (
                          <img
                            src={logo.img}
                            alt={`logo-${index}`}
                            key={index}
                            className="logo"
                          />
                        ))}
                        {logosManufacturers.map((logo, index) => (
                          <img
                            src={logo.img}
                            alt={`logo-copy-${index}`}
                            key={`copy-${index}`}
                            className="logo"
                          />
                        ))}
                    </div>
                </div>
                <Link to='manufact'><button className='manufacturers__btn'>Все производители</button></Link>
            </div>
        </section>
    );
};

export default Manufacturers;