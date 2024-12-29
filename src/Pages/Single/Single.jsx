import React, { useEffect } from 'react';
import Single1 from './Single1/Single1';

const Single = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <main>
            <Single1/>
        </main>
    );
};

export default Single;