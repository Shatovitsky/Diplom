import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import { Loader } from 'semantic-ui-react';

function City() {
  const users = useSelector((state) => state.users.data);
  return (
    <div className='site'>
      <h2 className='site__city'>{users.name}</h2>
      <h3 className='site__country-prefix'>j</h3>
    </div>
  );
}

export default City;
