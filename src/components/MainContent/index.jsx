import React from 'react';

import './index.scss';
import City from '../City';
import Date from '../Date';
import MainInformationWeather from '../MainInformationWeather';

function MainContent() {
  return (
    <div className='main'>
      <div className='container'>
        <Date />
        <City />
      </div>
      <MainInformationWeather />
    </div>
  );
}

export default MainContent;
