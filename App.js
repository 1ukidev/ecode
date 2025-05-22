import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { headerOptions } from './src/Styles';
import Database from './src/Database';
import Login from './src/screens/Login';
import Singup from './src/screens/Singup';
import Home from './src/screens/Home';
import Classes from './src/screens/Classes';
import Questions from './src/screens/Questions';
import Screens from './src/screens/Screens';
import History from './src/screens/History';

const Stack = createStackNavigator();

export default App = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      const logged = await Database.getValue('logged');
      setInitialRoute(logged ? Screens.HOME : Screens.LOGIN);
    };

    checkLogin();
  }, []);

  if (initialRoute === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS
        }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen
          name={Screens.LOGIN}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Screens.SINGUP}
          component={Singup}
          options={headerOptions()}
        />
        <Stack.Screen
          name={Screens.HOME}
          component={Home}
          options={headerOptions(true)}
        />
        <Stack.Screen
          name={Screens.CLASSES}
          component={Classes}
          options={headerOptions()}
        />
        <Stack.Screen
          name={Screens.QUESTIONS}
          component={Questions}
          options={headerOptions(true)}
        />
        <Stack.Screen
          name={Screens.HISTORY}
          component={History}
          options={headerOptions()}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
