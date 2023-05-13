import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DailyInformation from '../DailyInformation';
import HourlyInformation from '../HourlyInformation';
import ButtonDaily from '../UI/ButtonDaily';
import ButtonHourly from '../UI/ButtonHourly';
import './index.scss';

function MainInformationWeather() {
  const tempToday = useSelector((state) => state.searchData.temp);
  const mainImage = useSelector((state) => state.searchData.image);
  const data = useSelector((state) => state.weather.today);

  const [weatherComponent, setWeatherComponent] = useState('hourly');
  return (
    <div className='inforamtion-weather-now'>
      <div className='container'>
        <ul className='weather-week'>
          <li className='weather-week__today'>
            {data.weather && (
              <img
                className='weather-week__day_main-icon'
                alt=''
                src={`https://openweathermap.org/img/wn/${mainImage}@2x.png`}
              />
            )}
            <div className='weather-week__day_container'>
              <div className='weather-week__day_main-name'>TODAY</div>
              <h3 className='weather-week__day_main-degree'>
                {Math.round(tempToday)}°
              </h3>
            </div>
          </li>
          {weatherComponent === 'hourly' ? (
            <HourlyInformation />
          ) : (
            <DailyInformation />
          )}
        </ul>
      </div>
      <li className='weather-week__buttons'>
        <button
          type='button'
          className='button-daily'
          onClick={() => setWeatherComponent('daily')}
        >
          Daily
        </button>
        <button
          className='button-hourly'
          type='button'
          onClick={() => setWeatherComponent('hourly')}
        >
          Hourly
        </button>
      </li>
    </div>
  );
}

export default MainInformationWeather;
