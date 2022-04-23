import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Maps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCnhhYXzMX1cphqbPZRtaHurWaTYG-57J0"
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
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
            </GoogleMap>
        ) : <></>}
    </div>  
    )
};

export default Maps;