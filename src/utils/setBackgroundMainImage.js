function setBackgroundMainImage(nameWeather) {
  if (nameWeather === 'Rain') {
    return 'https://images.wallpaperscraft.ru/image/single/doroga_razmetka_oblaka_119319_3840x2400.jpg';
  }
  if (nameWeather === 'Clouds') {
    return 'https://images.wallpaperscraft.ru/image/single/skaly_more_bereg_117132_3840x2400.jpg';
  }
  if (nameWeather === 'Haze') {
    return 'https://get.wallhere.com/photo/cloud-sky-mountain-plant-ecoregion-world-snow-Natural-landscape-highland-slope-sunlight-tree-atmospheric-phenomenon-Terrain-morning-glacial-landform-landscape-mountainous-landforms-valley-sunrise-cumulus-geological-phenomenon-sunset-hill-mountain-range-Massif-winter-hill-station-Freezing-geology-evening-fell-plateau-arete-glacier-meteorological-phenomenon-rock-summit-ridge-forest-conifer-batholith-grassland-badlands-ice-cap-moraine-afterglow-horizon-tundra-cirque-Alps-dusk-pine-family-2057461.jpg';
  }
  if (nameWeather === 'Clear') {
    return 'https://images.wallpaperscraft.ru/image/single/palmy_nebo_derevia_123969_3840x2400.jpg';
  }
  return console.error();
}
export default setBackgroundMainImage;
