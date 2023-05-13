import { REACT_APP_OPENWEATHER_URL } from '../constants';

const getDataWeather = async ({ latitude, longitude }) => {
  const request = await fetch(
    `${REACT_APP_OPENWEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`,
  );

  return await request.json();
};

export default getDataWeather;
