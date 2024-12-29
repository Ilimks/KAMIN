import React, { useEffect, useState } from 'react';
import BasketTextUp from './BasketTextUp/BasketTextUp';

const Basket = () => {

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
        <>
            <BasketTextUp/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </>
    );
};

export default Basket;