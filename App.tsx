import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/app';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
