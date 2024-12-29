import React, { useEffect, useState } from 'react';
import PortfolioPageTextUp from './PortfolioPageTextUp/PortfolioPageTextUp';
import PortfolioPageCartList from './PortfolioPageCartList/PortfolioPageCartList';
import PortfolioPageMontages from './PortfolioPageMontages/PortfolioPageMontages';
import PortfolioPageCulcCons from './PortfolioPageCulcCons/PortfolioPageCulcCons';
import PortfolioPageAdvantages from './PortfolioPageAdvantages/PortfolioPageAdvantages';
import PortfolioPageTextBottom from './PortfolioPageTextBottom/PortfolioPageTextBottom';

const PortfolioPage = () => {

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
            <PortfolioPageTextUp/>
            <PortfolioPageCartList/>
            <PortfolioPageMontages/>
            <PortfolioPageCulcCons/>
            <PortfolioPageAdvantages/>
            <PortfolioPageTextBottom/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default PortfolioPage;