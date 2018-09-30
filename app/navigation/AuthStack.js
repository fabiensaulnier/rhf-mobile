import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SignInScreen from './../auth/SignInScreen';
import SignUpScreen from './../auth/SignUpScreen';
import ForgotPasswordScreen from './../auth/ForgotPasswordScreen';

const AuthStackNavigator = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },
  },
  {
    initialRouteName: "SignIn",
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class AuthStack extends React.Component {
  render() {
    return <AuthStackNavigator />;
  }
}
