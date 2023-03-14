import { URL_WEATHER, API_KEY } from '../constants';

export const currentData = navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lot = position.coords.longitude;
  },
);

export const getDataWeather = async (city) => {
  const request = await fetch(
    `${URL_WEATHER}weather?q={city}&appid=${API_KEY}`,
  );
  return request.join;
};
