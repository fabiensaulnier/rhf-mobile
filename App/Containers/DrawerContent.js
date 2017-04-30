import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerContentStyles'
import OpenScreenActions from '../Redux/OpenScreenRedux'
import { connect } from 'react-redux'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../Themes'

class DrawerContent extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>

        <TouchableOpacity onPress={this.props.openLiveList} style={styles.button}>
          <Text style={styles.text}>Lives</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.openLiveAdd} style={styles.button}>
          <Text style={styles.text}>Faire un live</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.openLive} style={styles.button}>
          <Text style={styles.text}>Live-Suppr</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.openLogin} style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

const mapDispatchToProps = (dispatch) => ({
  openLiveAdd: () => dispatch(OpenScreenActions.openScreen("liveAdd")),
  openLiveList: () => dispatch(OpenScreenActions.openScreen("liveList")),
  openLive: () => dispatch(OpenScreenActions.openScreen("live")),
  openLogin: () => dispatch(OpenScreenActions.openScreen("login"))

})


export default connect(null, mapDispatchToProps)(DrawerContent)
