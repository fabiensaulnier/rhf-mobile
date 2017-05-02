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
import styles from './Styles/HomeStyle'

class Home extends React.Component {
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
          <Title styleName="md-gutter-bottom">{live.teamHome} - {live.teamAway}</Title>
        </Tile>
        <Divider styleName="line" />
      </View>
    );
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          {this.props.error && <Text style={{marginBottom: 20, color: 'red'}}>Il y à une erreur</Text> }
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
    error: state.live.error,
    lives: state.live.lives
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLivesRequest: () => dispatch(LiveActions.getLivesRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
