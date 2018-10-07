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
  // Palmares: {
  //   screen: Palmares,
  //   navigationOptions: {
  //     title: "Palmarès",
  //   }
  // }
};

const TabNavigatorConfig = {
  title: 'Compétitions',
  tabBarOptions: {
    //scrollEnabled: true,
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

const Navigator = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

// wrapper
export default class CompetitionTabs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navigator
        screenProps={{
          competition: this.props.competition,
          stage: this.props.stage,
        }}
      />
    );
  }
};
