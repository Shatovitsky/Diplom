import { URL_WEATHER, API_KEY, URL_WEATHERBIT } from '../constants';

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

export const getHourlyWeather = async (weatherData) => {
  try {
    const response = await fetch(
      `${URL_WEATHER}forecast?q=${weatherData.name}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&cnt=5&units=metric`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getDailyWeather = async (weatherData) => {
  try {
    const response = await fetch(
      `${URL_WEATHERBIT}daily?city=${weatherData.name}&NC&key=${process.env.REACT_APP_WEATHERBIT_KEY}&days=6`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getStaticCityWeather = async () => {
  try {
    const response = await fetch(
      `${URL_WEATHER}weather?q=Minsk&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getStaticHourlyWeather = async () => {
  try {
    const response = await fetch(
      `${URL_WEATHER}forecast?q=Minsk&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&cnt=5&units=metric`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getStaticDailyWeather = async () => {
  try {
    const response = await fetch(
      `${URL_WEATHERBIT}daily?city=Minsk&NC&key=${process.env.REACT_APP_WEATHERBIT_KEY}&days=6`,
    );

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
