import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { colors } from './../config/styles';

import SignInScreen from './../auth/SignInScreen';
import SignUpScreen from './../auth/SignUpScreen';
import ForgotPasswordScreen from './../auth/ForgotPasswordScreen';

const AuthStackNavigator = createStackNavigator({
    SignIn: {
      screen: SignInScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        headerTitle: 'Se créer un compte',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: colors.rhfBlue},
      }),
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Mot de passe oublié ?',
        headerTintColor: 'white',
        headerStyle: {backgroundColor: colors.rhfBlue},
      }),
     },
  },
  {
    initialRouteName: "SignIn",
  }
);

export default class StackNavigator extends React.Component {
  render() {
    return <AuthStackNavigator />;
  }
}
