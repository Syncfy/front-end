// Em TabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Portal from '../screens/Portal';
import Vendors from '../screens/Vendors';
import History from '../screens/History';
import Profile from '../screens/Profile';
import {Image, ImageSourcePropType} from 'react-native';

interface TabBarIconProps {
  routeName: string;
  focused: boolean;
}

const Tab = createBottomTabNavigator();

const TabBarIcon: React.FC<TabBarIconProps> = ({routeName, focused}) => {
  let iconName: ImageSourcePropType | undefined;

  switch (routeName) {
    case 'Início':
      iconName = focused
        ? require('../assets/icons/home-icon.png')
        : require('../assets/icons/home-icon.png');
      break;
    case 'Fornecedores':
      iconName = focused
        ? require('../assets/icons/vendors-icon.png')
        : require('../assets/icons/vendors-icon.png');
      break;
    case 'Histórico':
      iconName = focused
        ? require('../assets/icons/historic-icon.png')
        : require('../assets/icons/historic-icon.png');
      break;
    case 'Perfil':
      iconName = focused
        ? require('../assets/icons/profile-icon.png')
        : require('../assets/icons/profile-icon.png');
      break;
    default:
      iconName = undefined;
  }

  if (!iconName) {
    return null;
  }

  // eslint-disable-next-line react-native/no-inline-styles
  return <Image source={iconName} style={{width: 25, height: 25}} />;
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({focused}) => (
        <TabBarIcon routeName={route.name} focused={focused} />
      ),
    })}>
    <Tab.Screen name="Início" component={Portal} />
    <Tab.Screen name="Fornecedores" component={Vendors} />
    <Tab.Screen name="Histórico" component={History} />
    <Tab.Screen name="Perfil" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
