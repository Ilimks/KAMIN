import React, { useEffect, useState } from 'react';
import './Home.scss'
import Banner from './Banner/Banner';
import Catalog from './Catalog/Catalog';
import InternetShop from './InternetShop/InternetShop';
import FormCalc from './FormCalc/FormCalc';
import Portfolio from './Portfolio/Portfolio';
import Installation from './Installation/Installation';
import Consultation from './Consultation/Consultation';
import Popular from './Popular/Popular';
import Manufacturers from './Manufacturers/Manufacturers';

const Home = () => {

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
            <Banner/>
            <Catalog/>
            <Manufacturers/>
            <Popular/>
            <Consultation/>
            <Installation/>
            <FormCalc/>
            <Portfolio/>
            <InternetShop/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default Home;