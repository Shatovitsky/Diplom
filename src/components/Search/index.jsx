import React from 'react';
import Autocomplete from 'react-google-autocomplete';

import ButtonSearch from '../UI/ButtonSearch';

import Input from '../UI/Input';
import './index.scss';

function Search() {
  return (
    <div className='search'>
      {/*       <Autocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
      />
 */}
      <Input />
      <ButtonSearch />
    </div>
  );
}

export default Search;
