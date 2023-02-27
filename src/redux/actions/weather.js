import {
  GET_WEATHER_CITY,
  GET_WEATHER_NAVIGATOR,
  GET_WEATHER_DAILY,
  GET_WEATHER_HOURLY,
} from '../../constants';

export const getWeatherCity = (payload) => ({
  type: GET_WEATHER_CITY,
  payload,
});

export const getWeatherNavigator = (payload) => ({
  type: GET_WEATHER_NAVIGATOR,
  payload,
});

export const getWeatherDaily = (payload) => ({
  type: GET_WEATHER_DAILY,
  payload,
});

export const getWeatherHourly = (payload) => ({
  type: GET_WEATHER_HOURLY,
  payload,
});
