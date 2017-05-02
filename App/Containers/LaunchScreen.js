import React from 'react'
import { Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../Themes'
import { connect } from 'react-redux'
import LiveActions from '../Redux/LiveRedux'

// Styles
import styles from './Styles/LaunchScreenStyle'

class LaunchScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image resizeMode='contain' style={styles.logo} source={Images.clearLogo} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
