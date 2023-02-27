import React from 'react';

import threeIcon from '../../statics/assets/icons/3.svg';
import rainIcon from '../../statics/assets/icons/rain.svg';
import sunnyIcon from '../../statics/assets/icons/sunny.svg';
import ButtonDaily from '../UI/ButtonDaily';
import ButtonHourly from '../UI/ButtonHourly';

import './index.scss';

function MainInformationWeather() {
  return (
    <div className='inforamtion-weather-now'>
      <div className='container'>
        <ul className='weather-week'>
          <li className='weather-week__today'>
            <img
              className='weather-week__day_main-icon'
              src={sunnyIcon}
              alt=''
            />
            <div className='weather-week__day_container'>
              <div className='weather-week__day_main-name'>TODAY</div>
              <h3 className='weather-week__day_main-degree'>1°</h3>
            </div>
          </li>
          <li className='weather-week-container'>
            <li className='weather-week__day'>
              <div className='weather-week__day_name'>WED</div>
              <img className='weather-week__day_icon' src={rainIcon} alt='' />
              <h3 className='weather-week__day_degree'>-4°</h3>
            </li>
            <li className='weather-week__day'>
              <div className='weather-week__day_name'>THU</div>
              <img className='weather-week__day_icon' src={sunnyIcon} alt='' />
              <h3 className='weather-week__day_degree'>4°</h3>
            </li>
            <li className='weather-week__day'>
              <div className='weather-week__day_name'>FRI</div>
              <img className='weather-week__day_icon' src={rainIcon} alt='' />
              <h3 className='weather-week__day_degree'>9°</h3>
            </li>
            <li className='weather-week__day'>
              <div className='weather-week__day_name'>SAT</div>
              <img className='weather-week__day_icon' src={threeIcon} alt='' />
              <h3 className='weather-week__day_degree'>0°</h3>
            </li>
            <li className='weather-week__day'>
              <div className='weather-week__day_name'>SUN</div>
              <img className='weather-week__day_icon' src={sunnyIcon} alt='' />
              <h3 className='weather-week__day_degree'>2°</h3>
            </li>
            <li className='weather-week__day'>
              <div className='weather-week__day_name'>MON</div>
              <img className='weather-week__day_icon' src={sunnyIcon} alt='' />
              <h3 className='weather-week__day_degree'>-18°</h3>
            </li>
          </li>
          <li className='weather-week__buttons'>
            <ButtonDaily />
            <ButtonHourly />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainInformationWeather;
