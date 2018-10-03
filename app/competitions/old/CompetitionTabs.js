import React, { Component } from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Classement from './Classement';
import Resultats from './Resultats';
import Statistiques from './Statistiques';
import Palmares from './Palmares';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

export const RouteConfigs = {
  Classement: {
    screen: Classement,
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialCommunityIcons name="format-list-numbers"/>
      )
    }
  },
  Resultats: {
    screen: Resultats,
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialCommunityIcons name="calendar"/>
      )
    }
  },
  Statistiques: {
    screen: Palmares,
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialCommunityIcons name="account-card-details"/>
      )
    }
  },
  Palmares: {
    screen: Palmares,
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialCommunityIcons name="trophy-award"/>
      )
    }
  }
};

const TabNavigatorConfig = {
  title: 'Compétitions',
  tabBarOptions: {
    showIcon: true,
    showLabel: false
  }
};

export default createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);
