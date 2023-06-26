import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './interface';
import { Home } from '../../screens/Home';
import { Loader } from '../../screens/Loader';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loader"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Loader" component={Loader} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
