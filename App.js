import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { useEffect, useState } from "react";
import Database from "./src/Database";
import About from "./src/screens/About";
import Classes from "./src/screens/Classes";
import History from "./src/screens/History";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Questions from "./src/screens/Questions";
import Screens from "./src/screens/Screens";
import Singup from "./src/screens/Singup";
import { createHeaderOptions } from "./src/Styles";

const Stack = createStackNavigator();

export default App = () => {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    (async () => {
      const logged = await Database.getValue("logged");
      setInitialRoute(logged ? Screens.HOME : Screens.LOGIN);
    })();
  }, []);

  if (initialRoute === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen
          name={Screens.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.SINGUP}
          component={Singup}
          options={createHeaderOptions()}
        />
        <Stack.Screen
          name={Screens.HOME}
          component={Home}
          options={createHeaderOptions(true)}
        />
        <Stack.Screen
          name={Screens.CLASSES}
          component={Classes}
          options={createHeaderOptions()}
        />
        <Stack.Screen
          name={Screens.QUESTIONS}
          component={Questions}
          options={createHeaderOptions(true)}
        />
        <Stack.Screen
          name={Screens.HISTORY}
          component={History}
          options={createHeaderOptions()}
        />
        <Stack.Screen
          name={Screens.ABOUT}
          component={About}
          options={createHeaderOptions()}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
