import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { firebaseApp } from './../services/Firebase';

export default class ForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    title: 'Mot de passe oublié ?',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  onResetPasswordPress = () => {
    firebaseApp.auth().sendPasswordResetEmail(this.state.email)
      .then(() => {
        Alert.alert("Password reset email has been sent.");
      }, (error) => {
        Alert.alert(error.message);
    });
  }

  render() {
      return (
          <View style={{flex:1, paddingTop:50, alignItems:"center"}}>

              <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({email: text}) }}
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
              />

              <Button title="Reset Password" onPress={this.onResetPasswordPress} />
          </View>
      );
  }
}

const styles = StyleSheet.create({

});
