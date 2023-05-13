import { combineReducers } from 'redux';

import hourlyWeatherReducer from './hourlyWeatherReducer';
import searchWeatherDataReducer from './searchWeatherDataReducer';
import weatherDataReducer from './weatherDataReducer';
import weeklyWeatherReducer from './weeklyWeatherReducer';

const rootReducer = combineReducers({
  weather: weatherDataReducer,
  weeklyWeather: weeklyWeatherReducer,
  hourlyWeather: hourlyWeatherReducer,
  searchData: searchWeatherDataReducer,
});

export default rootReducer;
