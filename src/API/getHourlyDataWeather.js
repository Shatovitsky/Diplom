import { URL_WEATHER } from '../constants';

async function fetchGetHourlyWeather(weatherData) {
  const API_KEY = 'your-api-key';
  const response = await fetch(
    `${URL_WEATHER}forecast?q=${weatherData}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&cnt=5&units=metric`,
  );
  const data = await response.json();
  return data;
}

export default fetchGetHourlyWeather;
