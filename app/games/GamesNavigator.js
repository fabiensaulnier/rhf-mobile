import React from 'react';
import { createStackNavigator, withNavigation } from 'react-navigation';

import CompetitionsSection from './../games/CompetitionsSection';
import CompetitionsList from './../games/CompetitionsList';
import CompetitionItem from './../games/CompetitionItem';
import CompetitionDetail from './../games/CompetitionDetail';

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
