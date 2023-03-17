/* function getCurrentLocation(pos) {
  const crd = pos.coords;
  const lat = crd.latitude;
  const lon = crd.longitude;
  return { lat, lon };
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
 */

function showMap(position) {
  const { latitude } = position.coords;
  const { longitude } = position.coords;
  console.log(position);
  // давай покажем карту или сделаем что-нибудь интересное!
  return latitude;
}

const test = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => resolve(location),
      (error) => reject(error),
    );
  });

export default test;
