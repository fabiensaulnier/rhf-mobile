import React from 'react'
import { ScrollView, View, DatePickerIOS, TextInput} from 'react-native'
import { Text, Title, Caption, Button, Icon, Divider } from '@shoutem/ui';
import { connect } from 'react-redux'
import LiveActions from 'App/Redux/LiveRedux'
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

    this.onDateChange = this.onDateChange.bind(this);
    this.onTimezoneChange = this.onTimezoneChange.bind(this);
    this.onClick = this.onClick.bind(this);
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

  onClick = (event) => {
    console.tron.log(this.state);
    this.props.createLiveRequest({
      teamHome: this.state.teamHome,
      teamAway: this.state.teamAway,
      //level: this.state.level,
      date: this.state.date
    });
  }

  focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

  render () {
    return (
      <ScrollView style={styles.container}>

        <Title>Annoncez-vous !</Title>
        <Caption>Envie de partager en live un match ? Prévenez la communauté quelle rencontre prévoyez-vous de couvrir.</Caption>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            ref="1"
            returnKeyType="next"
            style={{height: 50, width: '50%'}}
            placeholder={'Domicile'}
            onChangeText={(teamHome) => this.setState({teamHome})}
            value={this.state.teamHome}
            onSubmitEditing={() => this.focusNextField('2')}
          />
          <TextInput
            ref="2"
            returnKeyType="next"
            style={{height: 50, width: '50%'}}
            placeholder={'Extérieur'}
            onChangeText={(teamAway) => this.setState({teamAway})}
            value={this.state.teamAway}
            onSubmitEditing={() => this.focusNextField('3')}
          />
        </View>
        <Divider styleName="line" />

        <DatePickerIOS
          ref="3"
          date={this.state.date}
          minimumDate={this.state.date}
          mode="datetime"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange}
          minuteInterval={30}
        />
        <Button styleName="dark"
           onPress={this.onClick}>
          <Text>VALIDER</Text>
        </Button>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    createLivesSuccess: state.live.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createLiveRequest: (action) => dispatch(LiveActions.createLiveRequest(action)),
    createLivesSuccess: (action) => dispatch(LiveActions.createLivesSuccess(action)),
    createLiveFailure: (action) => dispatch(LiveActions.createLiveFailure(action))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(AddLive)
