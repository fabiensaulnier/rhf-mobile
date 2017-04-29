import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerContentStyles'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../Themes'

class DrawerContent extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  render () {
    return (
      <ScrollView style={styles.container}>

        <TouchableOpacity onPress={NavigationActions.liveList} style={styles.button}>
          <Text style={styles.text}>Lives</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={NavigationActions.liveAdd} style={styles.button}>
          <Text style={styles.text}>Créer un Live</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={NavigationActions.pop} style={styles.button}>
          <Text style={styles.text}>Paramètres</Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
