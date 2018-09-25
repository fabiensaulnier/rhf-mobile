import React from 'react';
import { Platform, ScrollView, StatusBar, Button, Text, TouchableOpacity, MenuImage } from 'react-native';
import {
  createDrawerNavigator,
  DrawerActions
} from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../home/Home';
import CompetitionTabs from '../competitions/CompetitionTabs';


Home.navigationOptions = {
  drawerLabel: 'Accueil',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="home" size={24} style={{ color: tintColor }} />
  ),
};

CompetitionTabs.navigationOptions = {
  drawerLabel: 'Compétitions',
  drawerIcon: ({ tintColor }) => (
    <MaterialCommunityIcons name="trophy" size={24} style={{ color: tintColor }} />
  ),
};

const RouteConfigs = {
  Home: {
    path: '/',
    screen: Home,
  },
  CompetitionTabs: {
    path: '/competition',
    screen: CompetitionTabs,
  }
};

const DrawerNavigatorConfig = {
  initialRouteName: 'Home',
  backBehavior: 'yes',
  contentOptions: {
    activeTintColor: '#00b4f1',
  }
};
<StatusBar barStyle="light-content" />
const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export default Drawer;
