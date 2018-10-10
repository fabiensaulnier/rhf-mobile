import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import tabBarIcon from './components/icons/tabBarIcon'
import HomeNavigator from './home/HomeNavigator';
import CompetitionsNavigator from './competitions/CompetitionsNavigator';
import FavoritesNavigator from './favorites/FavoritesNavigator';
import MoreNavigator from './more/MoreNavigator';



const MaterialBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home : {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Accueil",
        tabBarIcon: tabBarIcon('home'),
      },
    },
    Competitions : {
      screen: CompetitionsNavigator,
      navigationOptions: {
        title: "Compétitions",
        tabBarIcon: tabBarIcon('insert-invitation'),
      },
    },
    Favorites : {
      screen: FavoritesNavigator,
      navigationOptions: {
        title: "Favoris",
        tabBarIcon: tabBarIcon('star'),
      },
    },
    More : {
      screen: MoreNavigator,
      navigationOptions: {
        title: "Suite",
        tabBarIcon: tabBarIcon('more-horiz'),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#002c48',
    inactiveColor: 'grey',
    shifting: false,
    barStyle: { backgroundColor: 'lightgrey' },
  }
);

export default class RhfNavigator extends React.Component {
  render() {
    return <MaterialBottomTabNavigator />;
  }
}
