import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GetCurrentLocation from '../../API/currentLocation';
import MainContent from '../MainContent';
import MoreFacilities from '../MoreFacilities';
import Search from '../Search';

import './index.scss';

function App() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lot = position.coords.longitude;
    console.log(lat, lot);
  });
  const dispatch = useDispatch();
  return (
    <div className='wrapper'>
      <Search />
      <MainContent />
      <MoreFacilities />
    </div>
  );
}

export default App;
