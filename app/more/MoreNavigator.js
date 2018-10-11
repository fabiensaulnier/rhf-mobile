import React from 'react';
import { createStackNavigator } from 'react-navigation';

import defaultNavigationConfig from './../components/HeaderStackNavigator';

import MoreScreen from './MoreScreen';

const MoreNavigator = createStackNavigator(
  {
    MoreScreen: { screen: MoreScreen},
  },
  {
    initialRouteName: "MoreScreen",
    navigationOptions: defaultNavigationConfig,
  },
);

export default MoreNavigator;
