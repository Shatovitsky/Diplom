/* eslint-disable no-undef */
const getDataWeather = async ({ latitude, longitude }) => {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3f687139d76a241aced27c87510e7987`,
  );
  // eslint-disable-next-line no-return-await
  return await request.json();
};

export default getDataWeather;
