import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeParams } from '../../screens/Home';

export type AppStackParamList = {
  Loader: undefined;
  Home: HomeParams;
};

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>;
