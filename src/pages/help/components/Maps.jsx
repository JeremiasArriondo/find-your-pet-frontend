import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';
import { veterinaryData } from '../data.js';

const Maps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_APP_KEY_GOOGLE_MAPS
    });
    return (
        <div style={{height: '100vh'}}>
            {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: '100%', height: '100%'}}
              center={{
                  lat: -34.197757,
                  lng: -60.733432
              }}
              zoom={15}
            >
                {
                  veterinaryData.map(({coor, name, numberPhone}) => {
                    return <Marker key={numberPhone + name} position={coor}
                        options={{
                            label: {
                                text: name
                            }
                        }}
                    />
                  })
                }
            </GoogleMap>
        ) : <></>}
    </div>  
    )
};

export default React.memo(Maps);