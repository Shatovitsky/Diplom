import React from 'react';

import ButtonSearch from '../UI/ButtonSearch';

import Input from '../UI/Input';
import './index.scss';

function Search() {
  return (
    <div className='search'>
      <Input />
      <ButtonSearch />
    </div>
  );
}

export default Search;
