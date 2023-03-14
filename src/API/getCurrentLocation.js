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

function test() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(showMap);
  }
}

export default test;
