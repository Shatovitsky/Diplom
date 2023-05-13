function setBackgroundMiddleImage(nameWeather) {
  if (nameWeather === 'Rain') {
    return 'https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_mlechnyj_put_oblaka_118697_3840x2400.jpg';
  }
  if (nameWeather === 'Clouds') {
    return 'https://images.wallpaperscraft.ru/image/single/most_konstruktsiia_beton_563056_3840x2400.jpg';
  }
  if (nameWeather === 'Haze') {
    return 'https://data.1freewallpapers.com/download/forest-road-winding-dark-nature.jpg';
  }
  if (nameWeather === 'Clear') {
    return 'https://images.wallpaperscraft.ru/image/single/neboskreby_zdaniia_gory_923697_3840x2400.jpg';
  }
  return console.error();
}
export default setBackgroundMiddleImage;
