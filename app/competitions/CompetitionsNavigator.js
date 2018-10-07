import React from 'react';
import { createStackNavigator } from 'react-navigation';

import defaultNavigationConfig from './../components/HeaderStackNavigator';

import CompetitionsScreen from './CompetitionsScreen';
import CompetitionScreen from './CompetitionScreen';

const Navigator = createStackNavigator(
  {
    Competitions: { screen: CompetitionsScreen},
    Competition: { screen: CompetitionScreen},
  },
  {
    initialRouteName: "Competitions",
    navigationOptions: defaultNavigationConfig,
  },
);

// wrapper
export default class CompetitionsNavigator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navigator screenProps={{ rootNavigation: this.props.navigation }} />
    );
  }
};
