import React from 'react';

import './index.scss';
import eventIcon from '../../statics/assets/icons/event.svg';
import signIcon from '../../statics/assets/icons/sign.svg';

function MoreFacilities() {
  return (
    <div className='more-facilities'>
      <ul className='more-facilities-container'>
        <li className='more-facilities__item'>
          <img src={signIcon} alt='' />
          <h4>Sign In</h4>
        </li>
        <li className='more-facilities__item'>
          <img src={eventIcon} alt='' />
          <h4>Show Events</h4>
        </li>
      </ul>
    </div>
  );
}

export default MoreFacilities;
