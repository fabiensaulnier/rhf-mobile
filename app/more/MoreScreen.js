import React from 'react';
import {  View,  Button } from 'react-native';
import * as firebase from 'firebase';

export default class MoreScreen extends React.Component {

  constructor(props) {
      super(props);
  }

  onSignOutPress = () => {
      firebase.auth().signOut()
          .then(() => { }, (error) => { Alert.alert(error.message); });
  }

  onFaqPress = () => {
    this.props.navigation.navigate('FaqScreen');
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop:60}}>
          <Button title="FAQ" onPress={this.onFaqPress} />
          <Button title="Se déconnecter" onPress={this.onSignOutPress} />

      </View>
    );
  }
}
