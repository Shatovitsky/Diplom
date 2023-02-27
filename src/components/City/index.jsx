import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss';
import { Loader } from 'semantic-ui-react';

function City() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [currLocation, setCurrLocation] = useState('');
  const getLocation = async () => {
    const location = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ca92d5d554730b0689860ca54b0d5b7f`,
      )
      .then((response) => {
        setCurrLocation(response.data);
      });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(currLocation);
  return (
    <div className='site'>
      <h2 className='site__city'>{currLocation.name}</h2>
      <h3 className='site__country-prefix'>kl</h3>
    </div>
  );
}

export default City;
