import React, { useEffect, useState } from 'react';
import ManufactTextUp from './ManufactTextUp/ManufactTextUp';
import ManufactTextBottom from './ManufactTextBottom/ManufactTextBottom';
import ManufactQuantity from './ManufactQuantity/ManufactQuantity';

const Manufact = () => {

    const [isScrollUp, setIsScrollUp] = useState(false);
    
    useEffect(() => {
        const UpScroll = () => {
          if (window.scrollY > 300) {
            setIsScrollUp(true);
          } else {
            setIsScrollUp(false);
          }
        };
    
        window.addEventListener("scroll", UpScroll);
        return () => window.removeEventListener("scroll", UpScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({top: 0, behavior: "smooth",});
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);


    return (
        <main>
            <ManufactTextUp/>
            <ManufactQuantity/>
            <ManufactTextBottom/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default Manufact;