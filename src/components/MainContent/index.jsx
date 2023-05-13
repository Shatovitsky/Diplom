import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

import setBackgroundMiddleImage from '../../utils/setBackgroundMiddleImage';
import City from '../City';
import Date from '../Date';
import MainInformationWeather from '../MainInformationWeather';

function MainContent() {
  const nameWeather = useSelector((state) => state.searchData.nameWeather);
  const backgroundImage = setBackgroundMiddleImage(nameWeather);
  return (
    <div
      className='main'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='container'>
        <Date />
        <City />
      </div>
      <MainInformationWeather />
    </div>
  );
}

export default MainContent;
