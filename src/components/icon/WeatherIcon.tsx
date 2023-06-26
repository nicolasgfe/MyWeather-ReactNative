import { memo } from 'react';
import { WeatherIconProps } from './interface';
import { Image } from 'react-native';

const icons = {
  clear: require('../../../assets/img/clear-sky.png'),
  'broken-clouds': require('../../../assets/img/broken-clouds.png'),
  cloudy: require('../../../assets/img/cloudy.png'),
  'few-clouds': require('../../../assets/img/few-clouds.png'),
  mist: require('../../../assets/img/mist.png'),
  rainy: require('../../../assets/img/rainy.png'),
  'shower-rain': require('../../../assets/img/shower-rain.png'),
  snow: require('../../../assets/img/snow.png'),
  thunderstorm: require('../../../assets/img/thunderstorm.png'),
};

const WeatherIcon = ({ type }: WeatherIconProps) => {
  const icon = icons[type];

  return <Image style={{ alignSelf: 'center' }} source={icon} />;
};

export default memo(WeatherIcon);
