import React, { PropTypes } from 'react'
import { View, Image, LayoutAnimation } from 'react-native'
import NavItems from './NavItems'
import styles from './Styles/CustomNavBarStyles'
import { connect } from 'react-redux'
import { Metrics, Images } from '../Themes'

class CustomNavBar extends React.Component {

  renderMiddle () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    return (
      <Image resizeMode='contain' style={styles.logo} source={Images.clearLogo} />
    )
  }

  renderRightButtons () {
    return (
      <View style={styles.rightButtons}>
        {/* {NavItems.searchButton(this.showSearchBar)} */}
      </View>
    )
  }

  renderLeftButtons () {
    return (
      <View style={styles.leftButtons}>
        {NavItems.hamburgerButton()}
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    )
  }
}

CustomNavBar.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: View.propTypes.style
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)
