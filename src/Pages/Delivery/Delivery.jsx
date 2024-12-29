import React, { useEffect, useState } from 'react';
import DeliveryTextUp from './DeliveryTextUp/DeliveryTextUp';
import DeliveryDes from './DeliveryDes/DeliveryDes';
import DeliveryGuarantees from './DeliveryGuarantees/DeliveryGuarantees';

const Delivery = () => {

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
            <DeliveryTextUp/>
            <DeliveryDes/>
            <DeliveryGuarantees/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default Delivery;