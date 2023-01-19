import React from 'react';

import MainContent from '../MainContent';
import MoreFacilities from '../MoreFacilities';
import Search from '../Search';

import './index.scss';

function App() {
  return (
    <div className='wrapper'>
      <Search />
      <MainContent />
      <MoreFacilities />
    </div>
  );
}

export default App;
