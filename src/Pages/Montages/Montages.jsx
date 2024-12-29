import React, { useEffect, useState } from 'react';
import MontagesTextUp from './MontagesTextUp/MontagesTextUp'
import MontagesInstallation from './MontagesInstallation/MontagesInstallation';
import MontagesAdvantages from './MontagesAdvantages/MontagesAdvantages';
import MontagesConsultationCalculation from './MontagesConsultationCalculation/MontagesConsultationCalculation';
import MontagesOurWorks from './MontagesOurWorks/MontagesOurWorks';
import MontagesTextBottom from './MontagesTextBottom/MontagesTextBottom';

const Montages = () => {

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
            <MontagesTextUp/>
            <MontagesInstallation/>
            <MontagesAdvantages/>
            <MontagesConsultationCalculation/>
            <MontagesOurWorks/>
            <MontagesTextBottom/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default Montages;