import React, { Component } from 'react'
import { ScrollView, View, Image, BackAndroid, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from 'App/Themes'
import styles from 'App/Containers/Common/Styles/DrawerContentStyle'
import ScreenActions from 'App/Redux/ScreenRedux'


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

  openCompetitions = () => {
    this.props.openCompetitions()
    this.context.drawer.close()
  }

  openClassement = () => {
    this.props.openClassement()
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
              style={styles.itemIcon}
            />
            <Text style={styles.itemLabel}>Lives</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.openCompetitions} style={styles.button}>
          <View style={styles.item}>
            <Icon name='calendar'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.itemIcon}
            />
            <Text style={styles.itemLabel}>Competitions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.openLiveList} style={styles.button}>
          <View style={styles.item}>
            <Icon name='feed'
              size={Metrics.icons.medium}
              color={Colors.snow}
              style={styles.itemIcon}
            />
            <Text style={styles.itemLabel}>Actualités</Text>
          </View>
        </TouchableOpacity>


        <Text style={styles.itemLabel}>DEV</Text>
        <TouchableOpacity onPress={this.openLiveAdd} style={styles.button}>
          <Text style={styles.itemLabel}>Faire un live</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openLogin} style={styles.button}>
          <Text style={styles.itemLabel}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openLive} style={styles.button}>
          <Text style={styles.itemLabel}>openLive</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.openClassement} style={styles.button}>
          <Text style={styles.itemLabel}>Classement</Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

const mapDispatchToProps = (dispatch) => ({
  openLiveAdd: () => dispatch(ScreenActions.openScreen("liveAdd")),
  openLiveList: () => dispatch(ScreenActions.openScreen("liveList")),
  openLive: () => dispatch(ScreenActions.openScreen("live")),
  openLogin: () => dispatch(ScreenActions.openScreen("login")),
  openCompetitions: () => dispatch(ScreenActions.openScreen("competitionList")),
  openClassement: () => dispatch(ScreenActions.openScreen("classement"))
})


export default connect(null, mapDispatchToProps)(DrawerContent)
