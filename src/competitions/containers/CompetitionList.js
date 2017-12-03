import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../../Themes'
import { connect } from 'react-redux'
import CompetitionActions from '../../Redux/CompetitionRedux'
import { Screen, ListView, Tile, Title, Subtitle, Divider } from '@shoutem/ui';
import _ from 'lodash'


// Styles
import styles from '../Styles/CompetitionStyle'

class CompetitionList extends React.Component {
  constructor (props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>

        </View>
      </View>
    )
  }

  renderRow (equipe) {
    return (
      <View>
        <Tile>
          <Title styleName="md-gutter-bottom">{equipe.nom} - {equipe.point}</Title>
        </Tile>
        <Divider styleName="line" />
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    classement: state.competition.payload
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchClassement: () => dispatch(CompetitionActions.fetchClassementRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionList)
