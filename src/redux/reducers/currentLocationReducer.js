import { useEffect, useState } from 'react';

import { Succeeded } from '../actions/weather';

const initialState = {
  data: '',
};

const CurrentLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Succeeded: {
      const currentData = action.payload.data;
      return { ...state, data: currentData };
    }
    default:
      return state;
  }
};

export default CurrentLocationReducer;
