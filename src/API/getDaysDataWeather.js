import { URL_WEATHERBIT } from '../constants';

async function fetchGetDaysWeather(weatherData) {
  const response = await fetch(
    `${URL_WEATHERBIT}daily?city=${weatherData}&NC&key=${process.env.REACT_APP_WEATHERBIT_KEY}&days=6`,
  );
  const data = await response.json();
  return data;
}

export default fetchGetDaysWeather;
