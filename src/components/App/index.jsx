/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../redux/actions/weather';
import MainContent from '../MainContent';
import MoreFacilities from '../MoreFacilities';
import Search from '../Search';

import './index.scss';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  console.log('data:', users);
  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='wrapper'>
      <button className='btn' onClick={() => dispatch(fetchUsers())}>
        ПОЛУЧИТЬ
      </button>
      <Search />
      <MainContent />
      <MoreFacilities />
    </div>
  );
}

export default App;
