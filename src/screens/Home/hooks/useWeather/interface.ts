import { WeatherResult } from '../../../../data/model';

export interface UseWeatherResult {
  weather: WeatherResult | undefined;
  loading: boolean;
}
