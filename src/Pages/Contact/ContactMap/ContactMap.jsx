import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const ContactMap = () => {
    return (
        <section className='contact__map'>
            <div className="container">
                <YMaps query={{ apikey: '30676071-86db-4ef1-b543-0d4e04ef5dc5' }}>
                    <div style={{ width: '1280px', height: '400px', borderRadius: '24px', overflow: 'hidden' }}>
                      <Map 
                        defaultState={{ center: [42.875985, 74.603672], zoom: 10 }} 
                        width="100%" 
                        height="100%"
                      >
                        <Placemark geometry={[55.751244, 37.618423]} />
                      </Map>
                    </div>
                </YMaps>
            </div>
        </section>
    );
};

export default ContactMap;