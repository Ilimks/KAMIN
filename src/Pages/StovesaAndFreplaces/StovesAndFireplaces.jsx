import React, { useEffect, useState } from 'react';
import StovesaAndFreplacesTextUp from './StovesaAndFreplacesTextUp/StovesaAndFreplacesTextUp';
import StovesaAndFreplacesCarts from './StovesaAndFreplacesCarts/StovesaAndFreplacesCarts';
import StovesaAndFreplacesTextBottom from './StovesaAndFreplacesTextBottom/StovesaAndFreplacesTextBottom';

const StovesAndFireplaces = () => {

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
            <StovesaAndFreplacesTextUp/>
            <StovesaAndFreplacesCarts/>
            <StovesaAndFreplacesTextBottom/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default StovesAndFireplaces;