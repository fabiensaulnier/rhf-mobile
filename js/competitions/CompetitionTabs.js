
import * as React from 'react';
import {
  Text,
} from 'react-native';

import Classement from './Classement';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';



class Resultats extends React.Component {
  render() {
    return <Text>
      Resultats
    </Text>;
  }
}

class Statistiques extends React.Component {
  render() {
    return <Text>
      Statistiques
    </Text>;
  }
}

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
