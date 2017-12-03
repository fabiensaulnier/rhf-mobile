import Expo from 'expo';
import React from 'react';
import { Text, Animated, Easing } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import HomeScreen from './core/components/HomeScreen';
import LoginScreen from './users/components/LoginScreen';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

// drawer stack
const DrawerStack = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    gesturesEnabled: false,
  },
);

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      title: 'Kitchen',
      gesturesEnabled: false,
      headerLeft: <Text onPress={() => navigation.navigate('DrawerToggle')}>Menu</Text>,
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0,
      },
    }),
  },
);

// Manifest of possible screens
const AppNavigator = StackNavigator(
  {
    drawerStack: { screen: DrawerNavigation },
    Login: { screen: LoginScreen },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Login',
  },
);

export default AppNavigator;
