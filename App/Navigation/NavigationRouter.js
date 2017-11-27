import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import CustomNavBar from './CustomNavBar'

// screens identified by the router
import LaunchScreen from 'App/Containers/LaunchScreen'
import Home from 'App/Containers/Home'
import LiveAdd from 'App/Containers/Live/LiveAdd'
import LiveList from '../Containers/Live/LiveList'
import Live from '../Containers/Live/Live'
import Login from '../Containers/Login'
import CompetitionList from '../Containers/Competition/CompetitionList'
import Classement from '../Containers/Competition/Classement'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navBar={CustomNavBar}>
            <Scene key='launchScreen' initial component={LaunchScreen} hideNavBar />
            <Scene key='login' component={Login} title='Login' hideNavBar />
            <Scene key='home' component={Home} title='Roller Hockey France' />
            <Scene key='liveAdd' component={LiveAdd} title='Faire un live' />
            <Scene key='liveList' component={LiveList} title='Lives' />
            <Scene key='live' component={Live} title='Live' />
            <Scene key='competitionList' component={CompetitionList} title='Compétitions' />
            <Scene key='classement' component={Classement} title='Classement' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
