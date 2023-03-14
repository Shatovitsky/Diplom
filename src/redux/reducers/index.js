import { combineReducers } from 'redux';

import currentLocationReducer from './currentLocationReducer';
import userReducer from './weatherReducer';

const rootReducer = combineReducers({
  users: userReducer,
  navigator: currentLocationReducer,
});

export default rootReducer;
