import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MoreScreen from './MoreScreen';

const Navigator = createStackNavigator(
  {
    MoreScreen: { screen: MoreScreen },
  },
  {
    initialRouteName: "MoreScreen",
  }
);

// wrapper
export default class MoreNavigator extends React.Component {
    constructor(props)  {
        super(props);
    }
    render() {
        return (
            <Navigator screenProps={{ rootNavigation: this.props.navigation }} />
        );
    }
};
