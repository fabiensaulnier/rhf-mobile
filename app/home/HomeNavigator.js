import React from 'react';
import { createStackNavigator } from 'react-navigation';

import defaultNavigationConfig from './../components/HeaderStackNavigator';

import HomeScreen from './HomeScreen';

const HomeNavigator = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen},
  },
  {
    initialRouteName: "HomeScreen",
    navigationOptions: defaultNavigationConfig,
  },
);

export default HomeNavigator;
