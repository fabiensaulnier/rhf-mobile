import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { firebaseApp } from './../services/Firebase';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Créer un compte',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  onSignupPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }

    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop:50, alignItems:"center"}}>

        <TextInput style={{width: 200, height: 40, borderWidth: 1}}
          value={this.state.email}
          onChangeText={(text) => { this.setState({email: text}) }}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={{paddingTop:10}} />

        <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.password}
            onChangeText={(text) => { this.setState({password: text}) }}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <View style={{paddingTop:10}} />

        <TextInput style={{width: 200, height: 40, borderWidth: 1}}
            value={this.state.passwordConfirm}
            onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
            placeholder="Password (confirm)"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Button title="Signup" onPress={this.onSignupPress} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
