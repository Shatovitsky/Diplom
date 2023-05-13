import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchWeatherData } from '../../redux/actions/weather';
import setBackgroundMainImage from '../../utils/setBackgroundMainImage';
import MainContent from '../MainContent';
import MoreFacilities from '../MoreFacilities';
import Search from '../Search';
import './index.scss';

function App() {
  const dispatch = useDispatch();
  const nameWeather = useSelector((state) => state.searchData.nameWeather);
  const backgroundImage = setBackgroundMainImage(nameWeather);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className='wrapper'
    >
      <Search />
      <MainContent />
      <MoreFacilities />
    </div>
  );
}

export default App;
