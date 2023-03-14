import { type } from '@testing-library/user-event/dist/type';

import {
  GET_WEATHER_CITY,
  GET_WEATHER_NAVIGATOR,
  GET_WEATHER_DAILY,
  GET_WEATHER_HOURLY,
  GET_CURRENT_LOCATION_REQUESTED,
  GET_CURRENT_LOCATION_FAILED,
  GET_CURRENT_LOCATION_SUCCEEDED,
  FETCH_USERS,
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

export const Requested = (payload) => ({
  type: GET_CURRENT_LOCATION_REQUESTED,
  payload,
});

export const Failed = (payload) => ({
  type: GET_CURRENT_LOCATION_FAILED,
  payload,
});

export const Succeeded = (payload) => ({
  type: GET_CURRENT_LOCATION_SUCCEEDED,
  payload,
});

export const fetchUsers = () => ({ type: FETCH_USERS });
