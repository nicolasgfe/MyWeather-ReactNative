export interface WeatherResult {
  cod: number;
  coord: Coordinates;
  weather: WeatherType;
  main: WeatherConditions;
  wind: Wind;
  clouds: Clouds;
  name: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherType {
  id: number;
  description: WeatherTypeValue;
}

export interface WeatherConditions {
  temp: number;
  feels_like: number;
  humidity: number;
}

export interface Wind {
  speed: number;
}

export interface Clouds {
  all: number;
}

export type WeatherTypeValue =
  | 'clear'
  | 'broken-clouds'
  | 'cloudy'
  | 'few-clouds'
  | 'mist'
  | 'rainy'
  | 'shower-rain'
  | 'snow'
  | 'thunderstorm';
