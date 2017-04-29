import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Colors, Metrics } from '../Themes'
import { connect } from 'react-redux'
import LiveActions from '../Redux/LiveRedux'
import { Screen, ListView, Tile, Title, Subtitle, Divider, Heading, Caption, Video } from '@shoutem/ui';
import _ from 'lodash'
// Styles
import styles from './Styles/LiveStyle'

class Live extends React.Component {

  constructor (props) {
    super(props)
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      restaurants: [{
        "name": "Gaspar Brasserie",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/restaurants/restaurant-1.jpg" },
      }, {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/restaurants/restaurant-2.jpg" },
      }],
    }
  }

  componentDidMount () {
    this.props.getLivesRequest()
  }

  renderRow(live) {
    return (
      <View>

      <Divider styleName="section-header">
        <Caption>Match</Caption>
      </Divider>
<Video
    source={{ uri: 'https://www.youtube.com/watch?v=B--D0eWkJ9s&feature=iv&src_vid=kps2HtNKR8U&annotation_id=channel%3A5901443b-0000-25fa-b412-94eb2c059ef0' }}
    height={200}
    width={300}
/>


          <Tile>

<Title styleName="md-gutter-bottom">{live.teamHome} - {live.teamAway}</Title>
          </Tile>



      </View>

    );
  }




  render () {
      console.tron.log(this.props)
    return (
            <View style={{flex: 1}}>
                <Text>HELLO</Text>
                      <Title>HELLO</Title>

      <ScrollView style={styles.mainContainer}>

          <View style={styles.container}>
  {this.props.error && <Text style={{marginBottom: 20, color: 'red'}}>Il y à une erreur</Text> }
          <Divider styleName="section-header">
            <Caption>Debut Batard</Caption>
          </Divider>
            <ListView
            data={_.values(this.props.lives)}
            renderRow={this.renderRow}
            />
        </View>
      </ScrollView>
</View>


    )
  }
}


const mapStateToProps = (state) => {
  return {
    lives: state.live.lives,
    error: state.live.error
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLivesRequest: () => dispatch(LiveActions.getLivesRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Live)
