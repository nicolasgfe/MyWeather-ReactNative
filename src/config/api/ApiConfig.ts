export const WEATHER_API = 'https://api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = '1e05ec3053b708b4f6d9eae44f260b6d';

export const GET_WEATHER = (lat: number, lon: number) =>
  `/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br`;
