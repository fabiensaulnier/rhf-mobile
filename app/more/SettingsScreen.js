import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as firebase from 'firebase';
import Button from './../components/Button';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  onSignOutPress = () => {
    firebase.auth()
      .signOut()
      .then(() => { }, (error) => { Alert.alert(error.message); });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Se déconnecter" onPress={this.onSignOutPress} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
