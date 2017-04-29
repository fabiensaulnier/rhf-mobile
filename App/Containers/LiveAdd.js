import React from 'react'
import { ScrollView, View, DatePickerIOS} from 'react-native'
import { Text, TextInput, Title, Caption, Button, Icon, Divider } from '@shoutem/ui';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LiveAddStyle'

class AddLive extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    }
  }


  onDateChange = (date) => {
    this.setState({date: date});
  };

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  };

  render () {
    return (
      <ScrollView style={styles.container}>

        <Title>Faire un live</Title>
        <Caption>Prévenez la communauté que vous allez faire le live d'une rencontre !</Caption>
        <View style={{flex: 1, flexDirection: 'row'}}>

          <TextInput
            style={{height: 50, width: '50%'}}
            placeholder={'Domicile'}
            onChangeText={(teamHome) => this.setState({teamHome})}
            value={this.state.teamHome}
          />
          <TextInput
            style={{height: 50, width: '50%'}}
            placeholder={'Extérieur'}
            onChangeText={(teamAway) => this.setState({teamAway})}
            value={this.state.teamAway}
          />
        </View>
        <Divider styleName="line" />
        <DatePickerIOS
          date={this.state.date}
          minimumDate={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
          minuteInterval={30}
        />
        <Button styleName="dark">
          <Text>AJOUTER</Text>
        </Button>
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
