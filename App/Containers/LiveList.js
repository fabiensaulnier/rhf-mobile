import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Screen, ListView, Tile, Title, Subtitle, Divider } from '@shoutem/ui';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LiveListStyle'

class LiveList extends React.Component {

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

  renderRow(restaurant) {
    return (
      <View>
        <Image
          styleName="large-banner"
          source={{ uri: restaurant.image.url }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
          </Tile>
        </Image>
        <Divider styleName="line" />
      </View>
    );
  }

  render () {
    return (
      <Screen>
        <ListView
          data={this.state.restaurants}
          renderRow={this.renderRow}
        />
      </Screen>
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

export default connect(mapStateToProps, mapDispatchToProps)(LiveList)
