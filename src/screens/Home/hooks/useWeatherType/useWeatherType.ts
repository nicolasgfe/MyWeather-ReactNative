import { UseWeatherTypeResult } from './interface';

const useWeatherType = (id: number): UseWeatherTypeResult => {
  if (id === 801) {
    return {
      type: 'few-clouds',
      color: '#64B5F6',
    };
  }

  if (id === 802) {
    return {
      type: 'cloudy',
      color: '#B0BEC5',
    };
  }

  if (id === 803 || id === 804) {
    return {
      type: 'broken-clouds',
      color: '#B0BEC5',
    };
  }

  if (id >= 500 && id < 600) {
    return {
      type: 'rainy',
      color: '#64B5F6',
    };
  }

  if (id >= 600 && id < 700) {
    return {
      type: 'snow',
      color: '#FFFFFF',
    };
  }

  if (id >= 700 && id < 800) {
    return {
      type: 'mist',
      color: '#FFFFFF',
    };
  }

  if (id >= 200 && id < 300) {
    return {
      type: 'shower-rain',
      color: '#607D8B',
    };
  }

  if (id >= 300 && id < 400) {
    return {
      type: 'thunderstorm',
      color: '#607D8B',
    };
  }

  return {
    type: 'clear',
    color: '#64B5F6',
  };
};

export default useWeatherType;
