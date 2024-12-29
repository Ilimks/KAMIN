import React, { useEffect, useState } from 'react';
import ReviewsTextUp from './ReviewsTextUp/ReviewsTextUp';
import ReviewsPhotoText from './ReviewsPhotoText/ReviewsPhotoText';
import ReviewsTextBottom from './ReviewsTextBottom/ReviewsTextBottom';

const Reviews = () => {
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
            <ReviewsTextUp/>
            <ReviewsPhotoText/>
            <ReviewsTextBottom/>
            <button className={`scroll-to-top ${isScrollUp ? "show" : ""}`} onClick={scrollToTop}>↑</button>
        </main>
    );
};

export default Reviews;