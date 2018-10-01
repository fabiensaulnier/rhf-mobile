import React from 'react';
import { createStackNavigator } from 'react-navigation';

import CompetitionsSection from './CompetitionsSection';
import CompetitionsList from './CompetitionsList';
import CompetitionItem from './CompetitionItem';
import CompetitionDetail from './CompetitionDetail';

const Navigator = createStackNavigator(
  {
    CompetitionsSection: { screen: CompetitionsSection },
    CompetitionsList: { screen: CompetitionsList },
    CompetitionItem: { screen: CompetitionItem},
    CompetitionDetail: { screen: CompetitionDetail},
  },
  {
    initialRouteName: "CompetitionsSection",
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#002c48",
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  }
);

// wrapper
export default class GamesNavigator extends React.Component {
    constructor(props)  {
        super(props);
    }
    render() {
        return (
            <Navigator screenProps={{ rootNavigation: this.props.navigation }} />
        );
    }
};
