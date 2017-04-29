import React from 'react'
import { ScrollView, View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AddLiveStyle'

class AddLive extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      teamHome: 'Domicile',
      teamAway: 'Extérieur'
    }
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <TextInput
            style={{height: 50, backgroundColor: 'powderblue'}}
            onChangeText={(teamHome) => this.setState({teamHome})}
            value={this.state.teamHome}
          />
          <TextInput
            style={{height: 50, backgroundColor: 'powderblue'}}
            onChangeText={(teamAway) => this.setState({teamAway})}
            value={this.state.teamAway}
          />
        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddLive)
