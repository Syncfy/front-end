import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Home: undefined;
  Login: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          component={Home}
        />
        <Stack.Screen
          name="Login"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Cadastro"
          options={{
            title: '',
            headerTransparent: true,
            headerShown: true,
          }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
