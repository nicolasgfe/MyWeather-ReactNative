import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../../navigation/app/interface';

export type HomeParams = {
  lat: number;
  lon: number;
};

export type HomeRouteProp = RouteProp<AppStackParamList, 'Home'>;
