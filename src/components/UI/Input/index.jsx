import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api';
import React, { useRef } from 'react';
import './index.scss';

function Input() {
  const inputRef = useRef();

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      /* console.log(place.formatted_address);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng()); */
    }
  };
  return (
    <form>
      {/* <input type='text' placeholder='Input city' /> */}
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        libraries={['places']}
      >
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <input
            type='text'
            className='form-control'
            placeholder='Input city'
          />
        </StandaloneSearchBox>
      </LoadScript>
    </form>
  );
}

export default Input;
