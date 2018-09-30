import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import tabBarIcon from './../components/icons/tabBarIcon'
import HomeScreen from './../home/HomeScreen';
import GamesNavigator from './../games/GamesNavigator';
import NewsScreen from './../news/NewsScreen';
import FavoritesScreen from './../favorites/FavoritesScreen';
import MoreScreen from './../more/MoreScreen';

class Home extends React.Component {
  static navigationOptions = {
    title: "Accueil",
    tabBarIcon: tabBarIcon('home'),
  };
  render() {
    return <HomeScreen id="home" />;
  }
}

class Games extends React.Component {
  static navigationOptions = {
    title: "Compétitions",
    tabBarIcon: tabBarIcon('insert-invitation'),
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
  };
  render() {
    return <GamesNavigator id="games" />;
  }
}

class News extends React.Component {
  static navigationOptions = {
    title: "Actus.",
    tabBarIcon: tabBarIcon('photo-album'),
  };

  render() {
    return <NewsScreen id="news" />;
  }
}

class Favorites extends React.Component {
  static navigationOptions = {
    title: "Favoris",
    tabBarIcon: tabBarIcon('star'),
  };

  render() {
    return <FavoritesScreen id="favorites" />;
  }
}

class More extends React.Component {
  static navigationOptions = {
    title: "Suite",
    tabBarIcon: tabBarIcon('more-horiz'),
  };

  render() {
    return <MoreScreen id="more" />;
  }
}

const MaterialBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Home,
    Games,
    News,
    Favorites,
    More,
  },
  {
    initialRouteName: 'Home',
    activeColor: '#002c48',
    inactiveColor: 'grey',
    shifting: false,
    barStyle: { backgroundColor: 'lightgrey' },
  }
);

export default class RhfStack extends React.Component {
  render() {
    return <MaterialBottomTabNavigator />;
  }
}
