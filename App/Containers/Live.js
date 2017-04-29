import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LiveStyle'

class Live extends React.Component {

   constructor (props) {
     super(props)
 this.state = {
  teamHome: 'Test',
  teamAway: 'Présentation Live'
              }
 }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>LiveOne Container {this.state.teamAway}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Live)
