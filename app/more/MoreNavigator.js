import React from 'react';
import { createStackNavigator } from 'react-navigation';

import defaultNavigationConfig from './../components/HeaderStackNavigator';

import MoreScreen from './MoreScreen';
import FaqScreen from './FaqScreen';
import SettingsScreen from './SettingsScreen';

const MoreNavigator = createStackNavigator(
  {
    More: {
      screen: MoreScreen,
      navigationOptions: {
        header: null,
      },
    },
    Faq: {
      screen: FaqScreen,
      navigationOptions: {
        title: "Foire aux questions",
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Paramètres",
      },
    },
  },
  {
    initialRouteName: "More",
    navigationOptions: defaultNavigationConfig,
  },
);

export default MoreNavigator;
