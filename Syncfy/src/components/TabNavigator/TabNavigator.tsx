// TabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Portal from '../../screens/Portal';
import Vendors from '../../screens/Vendors';
import History from '../../screens/History';
import Profile from '../../screens/Profile';
import TabBarIconComponent from './TabBarIcon';
import {tabBarOptions} from './style';
import Results from '../../screens/Result';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({focused}) => (
        <TabBarIconComponent routeName={route.name} focused={focused} />
      ),
      ...tabBarOptions,
    })}>
    <Tab.Screen name="Início" component={Portal} />
    <Tab.Screen name="Results" component={Results} />
    <Tab.Screen name="Fornecedores" component={Vendors} />
    <Tab.Screen name="Histórico" component={History} />
    <Tab.Screen name="Perfil" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
