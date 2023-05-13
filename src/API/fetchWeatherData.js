import { REACT_APP_OPENWEATHER_URL } from '../constants';

async function fetchWeatherData(cityName) {
  const response = await fetch(
    `${REACT_APP_OPENWEATHER_URL}q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`,
  );
  const data = await response.json();
  if (data.cod === '404') {
    alert('Город не найден');
    return null;
  }
  return data;
}

export default fetchWeatherData;
