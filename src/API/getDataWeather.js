/* eslint-disable no-undef */
const getDataWeather = async () => {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=55&lon=44&appid=ca92d5d554730b0689860ca54b0d5b7f`,
  );
  // eslint-disable-next-line no-return-await
  return await request.json();
};

export default getDataWeather;
