import React, { Component } from 'react'
import { ScrollView, View, Image, BackAndroid, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerContentStyles'
import OpenScreenActions from '../Redux/OpenScreenRedux'
import { connect } from 'react-redux'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../Themes'

class DrawerContent extends Component {

  openLiveList = () => {
    this.props.openLiveList()
    this.context.drawer.close()
  }
  openLiveAdd = () => {
    this.props.openLiveAdd()
    this.context.drawer.close()
  }
  openLive = () => {
    this.props.openLive()
    this.context.drawer.close()
  }
  openLogin = () => {
    this.props.openLogin()
    this.context.drawer.close()
  }

  render () {
    return (
      <ScrollView style={styles.container}>

        <TouchableOpacity onPress={this.openLiveList} style={styles.button}>
          <View style={styles.item}>
            <Icon name='podcast'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.idemIcon}
            />
            <Text style={styles.text}>Lives</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={this.openLiveList} style={styles.button}>
          <View style={styles.item}>
            <Icon name='calendar'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.idemIcon}
            />
            <Text style={styles.text}>Matchs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.openLiveList} style={styles.button}>
          <View style={styles.item}>
            <Icon name='feed'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.idemIcon}
            />
            <Text style={styles.text}>Actualités</Text>
          </View>
        </TouchableOpacity>


        <Text style={styles.text}>DEV</Text>
        <TouchableOpacity onPress={this.openLiveAdd} style={styles.button}>
          <Text style={styles.text}>Faire un live</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openLogin} style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openLive} style={styles.button}>
          <Text style={styles.text}>openLive</Text>
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
