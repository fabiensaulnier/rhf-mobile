
import * as React from 'react';
import {
  Text,
} from 'react-native';

import Classement from './Classement';
import Resultats from './Resultats';
import Statistiques from './Statistiques';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const RouteConfigs = {
  Classement: {
    screen: Classement,
  },
  Resultats,
  Statistiques,
};

const TabNavigatorConfig = {
  labelStyle: {
    fontSize: 12,
  },
  tabStyle: {
    width: 100,
  },
  style: {
    backgroundColor: 'grey',
  },
};

export default createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);
