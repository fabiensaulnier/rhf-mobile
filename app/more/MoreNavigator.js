import React from 'react';
import { createStackNavigator } from 'react-navigation';

import defaultNavigationConfig from './../components/HeaderStackNavigator';

import MoreScreen from './MoreScreen';
import FaqScreen from './FaqScreen';


const MoreNavigator = createStackNavigator(
  {
    MoreScreen: { screen: MoreScreen},
    FaqScreen: { screen: FaqScreen},
   
  },
  {
    initialRouteName: "MoreScreen",
    navigationOptions: defaultNavigationConfig,
  },
);

export default MoreNavigator;
