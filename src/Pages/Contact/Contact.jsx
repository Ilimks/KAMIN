import React, { useEffect, useState } from 'react';
import ContactUpText from './ContactUpText/ContactUpText';
import ContactDetails from './ContactDetails/ContactDetails';
import ContactMap from './ContactMap/ContactMap';
import ContactAdress from './ContactAdress/ContactAdress';
import ContactCompany from './ContactCompany/ContactCompany';

const Contact = () => {

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
            <ContactUpText/>
            <ContactDetails/>
            <ContactMap/>
            <ContactAdress/>
            <ContactCompany/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default Contact;