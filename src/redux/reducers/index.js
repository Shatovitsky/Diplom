import { combineReducers } from 'redux';

import currentLocationReducer from './currentLocationReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  navigator: currentLocationReducer,
});

export default rootReducer;
