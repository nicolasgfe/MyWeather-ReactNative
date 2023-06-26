import axios from 'axios';
import { ApiConfig } from '../../config/api';

const httpClient = axios.create({
  baseURL: ApiConfig.WEATHER_API,
});

httpClient.interceptors.request.use(config => {
  if (!config.params) {
    config.params = {};
  }

  config.params['appid'] = ApiConfig.WEATHER_API_KEY;

  return config;
});

export default httpClient;
