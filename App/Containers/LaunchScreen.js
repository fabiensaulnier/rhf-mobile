import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../Themes'
import { connect } from 'react-redux'
import LiveActions from '../Redux/LiveRedux'
import { Screen, ListView, Tile, Title, Subtitle, Divider } from '@shoutem/ui';
import _ from 'lodash'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
  constructor (props) {
    super(props)
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount () {
    this.props.getLivesRequest()
  }

  renderRow(live) {
    return (
      <View>
        <Tile>
          <Title styleName="md-gutter-bottom">{live.team_home}</Title>
          <Subtitle styleName="sm-gutter-horizontal">{live.team_away}</Subtitle>
        </Tile>
        <Divider styleName="line" />
      </View>
    );
  }

  render () {
    console.tron.log(this.props.lives)
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ListView
            data={_.values(this.props.lives)}
            renderRow={this.renderRow}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lives: state.live.lives,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLivesRequest: () => dispatch(LiveActions.getLivesRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
