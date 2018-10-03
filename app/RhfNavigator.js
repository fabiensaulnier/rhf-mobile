import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import tabBarIcon from './components/icons/tabBarIcon'
import HomeScreen from './home/HomeScreen';
import CompetitionsNavigator from './competitions/CompetitionsNavigator';
import NewsScreen from './news/NewsScreen';
import FavoritesScreen from './favorites/FavoritesScreen';
import MoreNavigator from './more/MoreNavigator';

class Home extends React.Component {
  static navigationOptions = {
    title: "Accueil",
    tabBarIcon: tabBarIcon('home'),
  };
  render() {
    return <HomeScreen />;
  }
}

class Competitions extends React.Component {
  static navigationOptions = {
    title: "Compétitions",
    tabBarIcon: tabBarIcon('insert-invitation'),
  };
  render() {
    return <CompetitionsNavigator />;
  }
}

class News extends React.Component {
  static navigationOptions = {
    title: "Actus.",
    tabBarIcon: tabBarIcon('photo-album'),
  };

  render() {
    return <NewsScreen />;
  }
}

class Favorites extends React.Component {
  static navigationOptions = {
    title: "Favoris",
    tabBarIcon: tabBarIcon('star'),
  };

  render() {
    return <FavoritesScreen />;
  }
}

class More extends React.Component {
  static navigationOptions = {
    title: "Suite",
    tabBarIcon: tabBarIcon('more-horiz'),
  };

  render() {
    return <MoreNavigator />;
  }
}

const MaterialBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home, Competitions, News, Favorites, More,
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
