'use client'

import { FC, useMemo, useState } from 'react'
import { useLoadScript, GoogleMap, MarkerF, Marker } from '@react-google-maps/api';
import type { NextPage } from 'next';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import PlacesAutocomplete from '@/components/PlacesAutocomplete';

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {

    const [lat, setLat] = useState(38.5449);
    const [lng, setLng] = useState(-121.7405);

    const libraries = useMemo(() => ['places'], [])
    const mapCenter = useMemo(() => (
            { lat: lat, lng: lng }
        ), [lat, lng] 
    )

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
    })

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
        disableDefaultUI: true,
        clickableIcons: true,
        scrollwheel: true,
        }),
        []
    )


    if (!isLoaded) {
        return <p>Loading...</p>
    }


    return (
        <div className=''>

            <PlacesAutocomplete 
                onAddressSelect={(address) => {
                getGeocode({ address: address }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);

                    setLat(lat);
                    setLng(lng);

                    {console.log(mapCenter.lat)}

            });
          }}
            />

            <GoogleMap
                options={mapOptions}
                zoom={14}
                center={mapCenter}
                mapTypeId={google.maps.MapTypeId.ROADMAP}
                mapContainerStyle={{ width: '800px', height: '800px' }}
                onLoad={() => console.log('Map component loaded...')} >

                <MarkerF position={mapCenter}/>
            </GoogleMap>

        </div>
    )
}

export default page