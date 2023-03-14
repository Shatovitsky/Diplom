import axios from 'axios';
import { useState, useEffect } from 'react';

function GetCurrentLocation() {
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
    console.log(currLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default GetCurrentLocation;
