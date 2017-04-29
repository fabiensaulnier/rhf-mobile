import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../Themes'
import { connect } from 'react-redux'
import LiveActions from '../Redux/LiveRedux'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
  componentDidMount () {
    this.props.getLivesRequest()
    // this.props.createLiveRequest()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createLiveRequest: () => dispatch(LiveActions.createLiveRequest()),
  getLivesRequest: () => dispatch(LiveActions.getLivesRequest())
})

export default connect(null, mapDispatchToProps)(LaunchScreen)
