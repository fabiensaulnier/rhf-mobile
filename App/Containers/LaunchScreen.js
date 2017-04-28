import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.section} >
            <TouchableOpacity onPress={NavigationActions.addLive}>
              <Icon name='plus'
                size={Metrics.icons.large}
                color={Colors.background}
                style={styles.button}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
