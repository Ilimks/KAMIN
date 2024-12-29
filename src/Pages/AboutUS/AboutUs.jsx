import React, { useEffect, useState } from 'react';
import AboutUsSection1 from './AboutUsSection1/AboutUsSection1'
import AboutUsSection2 from './AboutUsSection2/AboutUsSection2';
import AboutUsSection3 from './AboutUsSection3/AboutUsSection3';
import AboutUsSection4 from './AboutUsSection4/AboutUsSection4';


const AboutUs = () => {

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
            <AboutUsSection1/>
            <AboutUsSection2/>
            <AboutUsSection3/>
            <AboutUsSection4/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default AboutUs;