import React, { Component } from 'react';

import { colors } from './../../config/styles';

import Classement from './Classement';
import Resultats from './Resultats';
import Statistiques from './Statistiques';
import Palmares from './Palmares';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

export const RouteConfigs = {
  Classement: {
    screen: Classement,
    navigationOptions: {
      tabBarLabel: "Classement",
    }
  },
  Resultats: {
    screen: Resultats,
    navigationOptions: {
      tabBarLabel: "Résultats",
    }
  },
  Statistiques: {
    screen: Statistiques,
    navigationOptions: {
      title: "Statistiques",
    }
  },
};

const TabNavigatorConfig = {
  title: 'Compétitions',
  tabBarOptions: {
    showIcon: false,
    showLabel: true,
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
    style: {
        backgroundColor: colors.rhfBlue,
    },
    indicatorStyle: {
        backgroundColor: 'white',
    },
  },
};

export default CompetitionTabsNavigator = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);
