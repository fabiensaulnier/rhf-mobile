import React from 'react';
import { createStackNavigator } from 'react-navigation';

import defaultNavigationConfig from './../components/HeaderStackNavigator';

import FavoritesScreen from './FavoritesScreen';

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoritesScreen},
  },
  {
    initialRouteName: "Favorites",
    navigationOptions: defaultNavigationConfig,
  },
);

export default FavoritesNavigator;
