import React from 'react';
import { createStackNavigator } from 'react-navigation';

import defaultNavigationConfig from './../components/HeaderStackNavigator';

import CompetitionsScreen from './CompetitionsScreen';
import CompetitionScreen from './CompetitionScreen';

const CompetitionNavigator = createStackNavigator(
  {
    Competitions: { screen: CompetitionsScreen},
    Competition: { screen: CompetitionScreen},
  },
  {
    initialRouteName: "Competitions",
    navigationOptions: defaultNavigationConfig,
  },
);

export default CompetitionNavigator;
