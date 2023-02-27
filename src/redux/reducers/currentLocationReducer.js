import { useEffect, useState } from 'react';

import { GET_CURRENT_LOCATION_SUCCEEDED } from '../../constants';

navigator.geolocation.getCurrentPosition((position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
});

const initialState = {
  lat: '',
  lon: '',
};

const CurrentLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LOCATION_SUCCEEDED: {
      const currentData = action.payload.data;
      return { ...state, currentData };
    }
    default:
      return state;
  }
};

export default CurrentLocationReducer;
