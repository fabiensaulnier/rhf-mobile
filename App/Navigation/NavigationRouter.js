import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import CustomNavBar from './CustomNavBar'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import LiveAdd from '../Containers/LiveAdd'
import LiveList from '../Containers/LiveList'
import Live from '../Containers/Live'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navBar={CustomNavBar}>
            <Scene initial key='launchScreen' component={LaunchScreen} title='Roller Hockey France' />
            <Scene key='liveAdd' component={LiveAdd} title='Faire un live' />
            <Scene key='liveList' component={LiveList} title='Lives' />
            <Scene key='live' component={Live} title='Live' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
